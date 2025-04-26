'use client'

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import {Bar, BarChart, XAxis} from "recharts";
import React, {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import {apiRequest} from "@/core/api.handler";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import SpinnerSection from "@/components/ui/Spinner";


const Dashboard = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(false);


    const chartData = [
        {day: "Monday", admin: 186, volunteer: 80},
        {day: "Tuesday", admin: 305, volunteer: 200},
        {day: "Wednesday", admin: 237, volunteer: 120},
        {day: "Thursday", admin: 73, volunteer: 190},
        {day: "Friday", admin: 209, volunteer: 130},
        {day: "Saturday", admin: 20, volunteer: 140},
        {day: "Sunday", admin: 214, volunteer: 140},
    ]

    const chartConfig = {
        admin: {
            label: "Admin",
            color: "#2563eb",
        },
        volunteer: {
            label: "Volunteer",
            color: "#f3f368",
        },
    } satisfies ChartConfig

    const fetchVolunteers = async () => {
        try {
            const payload = {
                pageIndex: 1,
                pageSize: 3,
                filters: {
                    searchText: ''
                }
            }
            const res = await apiRequest(`/api/admin/volunteer/get-paged`, "POST", payload)
            setVolunteers(res[0].data);
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };
    const fetchAdmins = async () => {
        try {
            const payload = {
                pageIndex: 1,
                pageSize: 3,
                filters: {
                    searchText: ''
                }
            }
            const res = await apiRequest(`/api/admin/admin/get-paged`, "POST", payload)
            setAdmins(res[0].data);
        } catch (error) {
            console.error("Fetching error:", error);
        }
    };


    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchVolunteers(),
                    fetchAdmins()
                ]);
            } catch (error) {
                console.error("Fetching error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    return (
        <div className="my-5 flex flex-col gap-4">
            <div className="grid min-[900px]:grid-cols-2 gap-6 mb-3">
                <div className="border rounded-full flex flex-col justify-center items-center space-y-2 w-full p-3">
                    <table>
                        <thead>
                            <tr className="">
                                <th className=" pl-4"></th>
                                <th className=" pl-4">Active</th>
                                <th className=" pl-4">Banned</th>
                                <th className=" pl-4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-4">Admin</td>
                                <td className="pl-4 text-yellow-500 font-bold">5</td>
                                <td className="pl-4 text-yellow-500 font-bold">2</td>
                                <td className="pl-4 text-yellow-500 font-bold">7</td>
                            </tr>
                            <tr>
                                <td className="pl-4">Volunteer</td>
                                <td className="pl-4 text-yellow-500 font-bold">5</td>
                                <td className="pl-4 text-yellow-500 font-bold">2</td>
                                <td className="pl-4 text-yellow-500 font-bold">7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border rounded-full flex flex-col justify-center items-center space-y-2 p-2 w-full">
                    <h4 className="text-md font-semibold leading-none tracking-tight">Read / Total Mails</h4>
                    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-yellow-500">5 / 10 </h1>
                </div>
            </div>
            <div className="grid min-[900px]:grid-cols-2 gap-2 w-full overflow-x-auto">
                <div className="flex flex-col justify-center items-center space-y-1 w-full">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">Active admins</h2>
                    <div className="overflow-x-auto w-full rounded">
                        <Table className="w-full text-gray-500 shadow">
                            <TableHeader>
                                <TableColumn>Name</TableColumn>
                                <TableColumn>Image</TableColumn>
                                <TableColumn>Email</TableColumn>
                                <TableColumn>Language</TableColumn>
                            </TableHeader>
                            <TableBody emptyContent={"No volunteers to display."}>
                                {!loading ?
                                    (volunteers.map((v: any) => (
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
                                            <TableCell className="px-4 py-2 whitespace-nowrap">{v.email}</TableCell>
                                            <TableCell className="px-4 py-2 whitespace-nowrap">{v.language}</TableCell>
                                        </TableRow>
                                    )))
                                    :
                                    (<TableRow>
                                        <TableCell colSpan={4}>
                                            <div className="flex h-full">
                                                <SpinnerSection/>
                                            </div>
                                        </TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1 w-full">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">Active Volunteers</h2>
                    <div className="overflow-x-auto w-full rounded">
                        <Table className="w-full text-gray-500 shadow">
                            <TableHeader>
                                <TableColumn>Name</TableColumn>
                                <TableColumn>Image</TableColumn>
                                <TableColumn>Email</TableColumn>
                                <TableColumn>Role</TableColumn>
                            </TableHeader>
                            <TableBody emptyContent={"No volunteers to display."}>
                                {!loading ?
                                    (admins.map((admin: any) => (
                                        <TableRow key={admin._id} className="border-t items-center">
                                            <TableCell className="px-4 py-2 whitespace-nowrap"><p>{admin.name}</p></TableCell>
                                            <TableCell className="px-4 py-2 whitespace-nowrap">
                                                <div className="w-full h-full">
                                                    {admin.image
                                                        ?
                                                        <img src={admin.image} alt={admin.name}
                                                             className="h-8 w-8 rounded-full bg-gray-200 object-cover"/>
                                                        : <div className="h-8 w-8 rounded-full bg-gray-200"/>}
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-4 py-2 whitespace-nowrap">{admin.email}</TableCell>
                                            <TableCell className="px-4 py-2 whitespace-nowrap">{admin.role}</TableCell>
                                        </TableRow>
                                    )))
                                    :
                                    (<TableRow>
                                        <TableCell colSpan={4}>
                                            <div className="flex h-full">
                                                <SpinnerSection/>
                                            </div>
                                        </TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="border rounded-lg">
                <h3 className="text-center text-xl font-bold underline">Daily User Count</h3>
                <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
                    <BarChart title="test" accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent/>}/>
                        <ChartLegend content={<ChartLegendContent/>}/>
                        <Bar dataKey="admin" fill="#2563eb" radius={4}/>
                        <Bar dataKey="volunteer" fill="#f3f368" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    )
}

export default Dashboard
