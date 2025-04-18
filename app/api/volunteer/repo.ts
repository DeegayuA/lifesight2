import bcrypt from "bcryptjs";
import {connectToDatabase} from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function findFirstVolunteer(email: string) {
    try {
        await connectToDatabase();
        return await Volunteer.findOne({ email: email.toLowerCase()}).exec()
    } catch (e: any) {
        throw e;
    }
}
export async function findUniqueVolunteer(id: string) {
    try {
        await connectToDatabase();
        return await Volunteer.findById(id).exec();
    } catch (e: any) {
        throw e;
    }
}

export async function createVolunteer(data: any) {
    data.password = await bcrypt.hash(data.password, 10)
    try {
        await connectToDatabase();
        return await Volunteer.create({
            ...data
        })
    } catch (e: any) {
        throw e;
    }
}

export async function updateVolunteer(data: any) {
    try {
        await connectToDatabase();
        return await Volunteer.findByIdAndUpdate(data.id,  {$set: {...data}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}

export const getPagedVolunteerByAdminRepo = async (data: any) => {
    await connectToDatabase();
    const {pageIndex, pageSize, sortField, sortOrder, filters} = data;
    const {
        searchText
    } = filters;

    return Volunteer.aggregate([
        {
            $match: {
                archived: false
            },
        },
        {
            $project: {
                id: "$_id",
                name: 1,
                email: 1,
                image: 1,
                phone: 1,
                location: 1,
                language: 1,
                active: 1,
                createdAt: 1,
                searchText: {
                    $concat: ["$email", " ", "$name", " ", "$phone"],
                },
            },
        },
        {
            $match: {
                searchText: {
                    $regex: searchText ? searchText : "",
                    $options: "i",
                }
            },
        },
        {
            $project: {
                searchText: 0,
                _id: 0
            },
        },
        {
            $facet: {
                metadata: [{$count: "total"}, {$addFields: {page: pageIndex || 1}}],
                data: [
                    {
                        $sort: {
                            [sortField || "createdAt"]: sortOrder || -1,
                        },
                    },
                    {$skip: (pageSize || 10) * ((pageIndex || 1) - 1) || 0},
                    {$limit: pageSize || 10},
                ],
            },
        },
    ]).exec();
};

export async function deleteVolunteerByAdminRepo(id: any) {
    try {
        await connectToDatabase();
        return await Volunteer.findByIdAndUpdate(id,  {$set: {archived: true}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}
export async function activationVolunteerByAdminRepo(id: any, data: any) {
    try {
        await connectToDatabase();
        return await Volunteer.findByIdAndUpdate(id,  {$set: {active: data.active}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}
