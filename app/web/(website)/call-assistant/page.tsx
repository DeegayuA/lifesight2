"use client";

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Phone, ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import {useSettings} from '@/components/settings-provider';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import React, {useEffect, useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/react";
import {apiRequest} from "@/core/api.handler";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {ASSIST_LANGUAGE} from "@/lib/constants";
import {StarIcon} from "@/components/star-rating";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";


function StarRating({starCount}: any) {
    const validatedStarCount = Math.min(Math.max(starCount, 0), 5);
    return (
        <div className="flex flex-col items-center ">
            <RadioGroup aria-label="Rating" id="rating" className="flex items-center">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = starCount - index;
                    return (
                        <div key={index}>
                            <RadioGroupItem value={ratingValue.toString()} id={`rating-${ratingValue}`}
                                            className="peer sr-only" key={ratingValue}/>
                            <Label htmlFor={`rating-${ratingValue}`} title={`${ratingValue} stars`}>
                                <StarIcon
                                    className={`h-3 w-3 text-yellow-500 ${starCount <= index ? '' : 'fill-yellow-500'}`}/>
                            </Label>
                        </div>
                    );
                })}
            </RadioGroup>
        </div>
    )
}

function ModalOpen({isOpen, onOpenChange, rowData}: any) {
    const {fontSize, accentColor} = useSettings();

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Confirm Action</ModalHeader>
                        <ModalBody>
                            <p>Are you sure you want to perform this action as:</p>
                        </ModalBody>
                        <ModalFooter>
                            <Link href={`tel:${rowData?.phone}`} onClick={onClose}>
                                <Button style={{backgroundColor: accentColor}}>
                                    Audio Call
                                </Button>
                            </Link>
                            <Link href={`facetime:${rowData?.phone}`} onClick={onClose}>
                                <Button style={{backgroundColor: accentColor}}>
                                    Video Call
                                </Button>
                            </Link>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}


const pageCount = (total: number, size: number) => {
    return Math.floor(total / size) + 1
}
export default function CallAssistantPage() {
    const {fontSize, accentColor} = useSettings();

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const [volunteers, setVolunteers] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const saved = localStorage.getItem(ASSIST_LANGUAGE);
        return saved ? JSON.parse(saved) : "English";
    });

    // Function to open modal and set selected row
    const openModalWithRow = (row: any) => {
        setSelectedRow(row);
        setModalOpen(true);
    };
    const fetchVolunteers = async () => {
        try {
            const payload = {
                pageIndex,
                pageSize,
                filters: {
                    searchText: '',
                    language: selectedLanguage
                }
            }
            const res = await apiRequest(`/api/common/volunteer/get-paged`, "POST", payload)
            setVolunteers(res[0]?.data);
            setTotalPages(res[0]?.metadata[0]?.total ? res[0]?.metadata[0]?.total : 1);
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };

    useEffect(() => {
        fetchVolunteers()
    }, [pageIndex, selectedLanguage]);

    useEffect(() => {
        localStorage.setItem(ASSIST_LANGUAGE, JSON.stringify(selectedLanguage));
    }, [selectedLanguage]);

    return (
        <main className="min-h-screen bg-background p-6 mt-[7rem]" style={{fontSize: `${fontSize / 16}rem`}}>
            <div className="max-w-2xl mx-auto space-y-8">
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/web/public">
                        <ArrowLeft className="mr-2 h-4 w-4"/>
                        Back to Home
                    </Link>
                </Button>

                <Card className="p-8 text-center space-y-6">
                    <Phone className="w-12 h-12 mx-auto text-primary"/>
                    <h1 className="text-3xl font-bold">Connect with an Assistant</h1>
                    <p className="text-lg text-muted-foreground">
                        Our trained assistants are available 24/7 to provide personalized help when you need it.
                    </p>

                    <div className="text-start">
                        <label className="text-xl font-medium">Preferred Language : </label>
                        <Select value={selectedLanguage} onValueChange={(value: string) => setSelectedLanguage(value)}>
                            <SelectTrigger className="w-full">
                                {selectedLanguage || "Select a language"}
                            </SelectTrigger>
                            <SelectContent>
                                {["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi", "Arabic", "Portuguese"].map(lang => (
                                    <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="overflow-x-auto">
                        <Table className="min-w-full bg-white text-gray-500 border rounded shadow">
                            <TableHeader>
                                <TableColumn>Name</TableColumn>
                                <TableColumn>Image</TableColumn>
                                <TableColumn>Rate</TableColumn>
                                <TableColumn>Contact Action</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {volunteers.map((v: any) => (
                                    <TableRow key={v._id} className="border-t items-center">
                                        <TableCell className="px-4 py-2 whitespace-nowrap"><p>{v.name}</p></TableCell>
                                        <TableCell className="px-4 py-2 whitespace-nowrap">
                                            <div className="w-full h-full">
                                                {v.image
                                                    ?
                                                    <img src={v.image} alt={v.name}
                                                         className="h-8 w-8 rounded-full bg-gray-200 object-cover"/>
                                                    : <div className="h-8 w-8 rounded-full bg-gray-200"/>}
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-2 whitespace-nowrap">
                                            <StarRating starCount={v.rate} title="You Gathered Rate"></StarRating>
                                        </TableCell>
                                        <TableCell className="px-4 py-2 flex flex-col gap-2 ">
                                            <Button className="w-fit text-white text-md" style={{backgroundColor: accentColor, padding: 7}}
                                                    onClick={() => openModalWithRow(v)}>Call : {v.phone}
                                            </Button>
                                            <Link href={`mailto:${v.email}`}>
                                                <Button style={{backgroundColor: accentColor, padding: 7}}>
                                                    <span className=" mr-2">Mail : </span> {v.email}
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ModalOpen
                            isOpen={isModalOpen}
                            onOpenChange={setModalOpen}
                            rowData={selectedRow}
                        />
                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-4">
                            <button
                                onClick={() => setPageIndex(pageIndex - 1)}
                                disabled={pageIndex === 1}
                                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <span className="px-3 py-1">{pageIndex} / {pageCount(totalPages, pageSize)}</span>
                            <button
                                onClick={() => setPageIndex(pageIndex + 1)}
                                disabled={pageIndex === pageCount(totalPages, pageSize)}
                                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}
