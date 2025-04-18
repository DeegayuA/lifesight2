import { PencilSquareIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";

function ActionMenu({ onEdit, onDelete, onToggleActive }: any) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="p-2 rounded hover:bg-gray-100"
                onClick={() => setOpen((v) => !v)}
                aria-label="More actions"
            >
                <EllipsisVerticalIcon className="w-5 h-5" />
            </button>
            {open && (
                <div className="absolute right-0 z-10 mt-2 w-36 bg-white border rounded shadow-lg">
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        onClick={() => { setOpen(false); onDelete(); }}
                    >
                        Delete
                    </button>
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => { setOpen(false); onToggleActive(); }}
                    >
                        Toggle Active
                    </button>
                </div>
            )}
        </div>
    );
}
const pageCount = (total: number, size: number) => {
    return Math.floor(total / size) + 1
}

export default function VolunteerTable({ volunteers, page, pageSize, totalPages, onPageChange, onEdit, onDelete, onToggleActive }: any ) {
    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full bg-white text-gray-500 border rounded shadow">
                <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Phone</TableColumn>
                    <TableColumn>Location</TableColumn>
                    <TableColumn>Language</TableColumn>
                    <TableColumn>Active</TableColumn>
                    <TableColumn>Created</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                {volunteers.map((v: any) => (
                    <TableRow key={v._id} className="border-t items-center">
                        <TableCell className="px-4 py-2 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <div className="w-full h-full">
                                    {v.image
                                        ?
                                        <img src={v.image} alt={v.name} className="h-8 w-8 rounded-full bg-gray-200 object-cover"/>
                                        : <div className="h-8 w-8 rounded-full bg-gray-200"/>}
                                </div>
                                <p>  {v.name}</p>
                            </div>
                        </TableCell>
                        <TableCell className="px-4 py-2">{v.email}</TableCell>
                        <TableCell className="px-4 py-2 whitespace-nowrap">{v.phone}</TableCell>
                        <TableCell className="px-4 py-2 whitespace-nowrap">{v.location}</TableCell>
                        <TableCell className="px-4 py-2 whitespace-nowrap">{v.language}</TableCell>
                        <TableCell className="px-4 py-2 whitespace-nowrap">
                <span className={`inline-block px-2 py-1 rounded text-xs ${v.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {v.active ? 'Active' : 'Inactive'}
                </span>
                        </TableCell>
                        <TableCell className="px-4 py-2 whitespace-nowrap">{new Date(v.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell className="px-4 py-2 flex items-center gap-2">
                            <button
                                className="p-2 rounded hover:bg-gray-100"
                                onClick={() => onEdit(v)}
                                aria-label="Edit"
                            >
                                <PencilSquareIcon className="w-5 h-5 text-blue-500" />
                            </button>
                            <ActionMenu
                                onDelete={() => onDelete(v)}
                                onToggleActive={() => onToggleActive(v)}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-4">
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
