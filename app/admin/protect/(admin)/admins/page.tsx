'use client'

import React, { useState, useEffect } from 'react';
import {apiRequest} from "@/core/api.handler";
import AdminTable from "@/components/application/AdminTable";


export default function AdminsPage() {
    const [admins, setAdmins] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [fetchData, setFetchData] = useState(false);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [submitted, setSubmitted] = useState(false);


    const submittedSuccess = () => {
        const trigger = () => {
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 3000);
        };
        trigger()
    }

    const fetchAdmins = async () => {
        try {
            const payload = {
                pageIndex,
                pageSize,
                filters: {
                    searchText: ''
                }
            }
            const res = await apiRequest(`/api/admin/admin/get-paged`, "POST", payload)
            setAdmins(res[0].data);
            setTotalPages(res[0].metadata[0].total);
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    const deleteAdmin = async (vol: any) => {
        try {
            const res = await apiRequest(`/api/admin/admin/delete/${vol.id}`, "GET")
            submittedSuccess()
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };
    const statusChange = async (vol: any) => {
        try {
            const payload = {
                id: vol.id,
                active: !vol.active
            }
            const res = await apiRequest(`/api/admin/admin/activation`, "PUT", payload)
            submittedSuccess()
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    useEffect(() => {
        fetchAdmins()
    }, [pageIndex, fetchData]);

    const handleEdit = (vol: any) => { /* open edit modal */ };
    const handleDelete = async (vol: any) => {
        await deleteAdmin(vol)
        setPageIndex(1)
        setFetchData(!fetchData)
    };
    const handleToggleActive = async (vol: any) => {
        await statusChange(vol)
        setPageIndex(1)
        setFetchData(!fetchData)
    };

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Admins</h1>
            {submitted ? (<p className="text-yellow-600 text-center text-2xl">Updated successfully!</p>) : "" }
            <AdminTable
                admins={admins}
                page={pageIndex}
                pageSize={pageSize}
                totalPages={totalPages}
                onPageChange={setPageIndex}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleActive={handleToggleActive}
            />
        </div>
    );
}
