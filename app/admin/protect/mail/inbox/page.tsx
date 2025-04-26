'use client'

import React, {useEffect, useState} from "react";
import EmailGrid from "@/components/application/EmailGrid";
import {apiRequest} from "@/core/api.handler";
import {addToast} from "@heroui/toast";

const Inbox = () => {
    const [emails, setEmails] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(1);
    const [fetchData, setFetchData] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchEmails = async () => {
        try {
            setLoading(true)
            const payload = {
                pageIndex,
                pageSize,
                filters: {
                    searchText: ''
                }
            }
            const res = await apiRequest(`/api/admin/mail`, "POST", payload)
            setEmails(res[0].data);
            setTotalPages(res[0].metadata[0].total);
        } catch (error) {
            console.error("Fetching error:", error);
        } finally {
            setLoading(false)
        }
    };
    const openStatusChange = async (mail: any) => {
        try {
            setLoading(true)
            const payload = {
                id: mail.id,
                open: !mail.open,
                read: true
            }
            const res = await apiRequest(`/api/admin/mail`, "PUT", payload)
            addToast({title: "Mail Status", description: "Status updated successfully!",});
            setFetchData(!fetchData)
        } catch (error) {
            console.error("Fetching error:", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchEmails()
    }, [pageIndex, fetchData]);

    return (
        <div className="mx-auto">
            <h1 className="text-2xl font-bold mb-6">Inbox</h1>
            <EmailGrid
                loading={loading}
                emails={emails}
                page={pageIndex}
                pageSize={pageSize}
                totalPages={totalPages}
                onPageChange={setPageIndex}
                onOpenStatusChange={openStatusChange}
            />
        </div>
    );
}

export default Inbox
