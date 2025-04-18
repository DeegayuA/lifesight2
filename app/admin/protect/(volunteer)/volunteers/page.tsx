'use client'

import { useState, useEffect } from 'react';
import {apiRequest} from "@/core/api.handler";
import VolunteerTable from "@/components/application/VolunteerTable";


export default function VolunteersPage() {
    const [volunteers, setVolunteers] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

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

    useEffect(() => {
        fetchVolunteers()
    }, [pageIndex]);

    const handleEdit = (vol: any) => { /* open edit modal */ };
    const handleDelete = (vol: any) => { /* confirm and delete */ };
    const handleToggleActive = (vol: any) => { /* toggle active status */ };

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Volunteers</h1>
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
