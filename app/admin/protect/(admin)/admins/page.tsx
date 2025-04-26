'use client'

import React, { useState, useEffect } from 'react';
import {apiRequest} from "@/core/api.handler";
import AdminTable from "@/components/application/AdminTable";
import {addToast} from "@heroui/toast";


export default function AdminsPage() {
    const [admins, setAdmins] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [fetchData, setFetchData] = useState(false);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchAdmins = async () => {
        try {
            setLoading(true)
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
        } finally {
            setLoading(false)
        }
    };

    const deleteAdmin = async (vol: any) => {
        try {
            setLoading(true)
            const res = await apiRequest(`/api/admin/admin/delete/${vol.id}`, "GET")
            addToast({title: "Admin Update", description: "Remove successfully!",});
        } catch (error) {
            console.error("Fetching error:", error);
        } finally {
            setLoading(false)
        }
    };
    const statusChange = async (vol: any) => {
        try {
            setLoading(true)
            const payload = {
                id: vol.id,
                active: !vol.active
            }
            const res = await apiRequest(`/api/admin/admin/activation`, "PUT", payload)
            addToast({title: "Admin Update", description: "Status update successfully!",});
        } catch (error) {
            console.error("Fetching error:", error);
        } finally {
            setLoading(false)
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
            <AdminTable
                loading={loading}
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
