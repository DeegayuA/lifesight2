// components/EmailGrid.js
import EmailCard from './EmailCard';
import SpinnerSection from "@/components/ui/Spinner";
import React from "react";

export default function EmailGrid({ emails, loading, page, pageSize, totalPages, onPageChange, onOpenStatusChange}: any) {
    const pageCount = (total: number, size: number) => {
        return Math.floor(total / size) + 1
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? ((Array(3).fill(0)).map((_: any, i: number) => (
                    <div key={i} className="h-64 w-64 bg-black border-white  rounded-lg p-4 flex">
                        <SpinnerSection/>
                    </div>
                ))) : (emails.map((email: any) => (
                    <EmailCard key={email.id} email={email} onOpenStatusChange={onOpenStatusChange}/>
                )))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-3 py-1">{page} / {pageCount(totalPages,pageSize)}</span>
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === pageCount(totalPages,pageSize)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
