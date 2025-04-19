'use client'

import React, {useEffect, useState} from "react";
import EmailGrid from "@/components/application/EmailGrid";
import {apiRequest} from "@/core/api.handler";

const Inbox = () => {
    const [emails, setEmails] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [fetchData, setFetchData] = useState(false);


    const submittedSuccess = () => {
        const trigger = () => {
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 3000);
        };
        trigger()
    }

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
    const openStatusChange = async (mail: any) => {
        try {
            const payload = {
                id: mail.id,
                open: !mail.open,
                read: true
            }
            const res = await apiRequest(`/api/admin/mail`, "PUT", payload)
            submittedSuccess()
            setFetchData(!fetchData)
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    useEffect(() => {
        fetchEmails()
    }, [pageIndex, fetchData]);

    return (
        <div className="mx-auto">
            <h1 className="text-2xl font-bold mb-6">Inbox</h1>
            {submitted ? (<p className="text-yellow-600 text-center text-2xl">Updated successfully!</p>) : "" }
            <EmailGrid
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
