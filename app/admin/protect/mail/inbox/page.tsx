'use client'

import {useEffect, useState} from "react";
import EmailGrid from "@/components/application/EmailGrid";
import {apiRequest} from "@/core/api.handler";

const Inbox = () => {
    const [emails, setEmails] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(1);

    const fetchEmails = async () => {
        try {
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
        }
    };

    useEffect(() => {
        fetchEmails()
    }, [pageIndex]);

    return (
        <div className="mx-auto">
            <h1 className="text-2xl font-bold mb-6">Inbox</h1>
            <EmailGrid
                emails={emails}
                page={pageIndex}
                pageSize={pageSize}
                totalPages={totalPages}
                onPageChange={setPageIndex}
            />
        </div>
    );
}

export default Inbox
