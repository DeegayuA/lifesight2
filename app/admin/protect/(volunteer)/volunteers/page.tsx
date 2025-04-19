'use client'

import React, { useState, useEffect } from 'react';
import {apiRequest} from "@/core/api.handler";
import VolunteerTable from "@/components/application/VolunteerTable";


export default function VolunteersPage() {
    const [volunteers, setVolunteers] = useState([]);
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

    const fetchVolunteers = async () => {
        try {
            const payload = {
                pageIndex,
                pageSize,
                filters: {
                    searchText: ''
                }
            }
            const res = await apiRequest(`/api/admin/volunteer/get-paged`, "POST", payload)
            setVolunteers(res[0].data);
            setTotalPages(res[0].metadata[0].total);
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    const deleteVolunteer = async (vol: any) => {
        try {
            const res = await apiRequest(`/api/admin/volunteer/delete/${vol.id}`, "GET")
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
            const res = await apiRequest(`/api/admin/volunteer/activation`, "PUT", payload)
            submittedSuccess()
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    useEffect(() => {
        fetchVolunteers()
    }, [pageIndex, fetchData]);

    const handleEdit = (vol: any) => { /* open edit modal */ };
    const handleDelete = async (vol: any) => {
        await deleteVolunteer(vol)
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
            <h1 className="text-2xl font-bold mb-6">Volunteers</h1>
            {submitted ? (<p className="text-yellow-600 text-center text-2xl">Updated successfully!</p>) : "" }
            <VolunteerTable
                volunteers={volunteers}
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
