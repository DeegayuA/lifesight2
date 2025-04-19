import Admin from "@/models/Admin";
import {connectToDatabase} from "@/lib/mongodb";


export async function createAdmin(data: any) {

    try {
        await connectToDatabase();
        return await Admin.create({

            name: data.name,
            email: data.email,
            password: data.password,
            updatedAt: data.updatedAt

        })
    } catch (e: any) {
        throw e;
    }
}

export async function findFirstAdmin(email: string) {

    try {
        await connectToDatabase();
        return await Admin.findOne({
            email: email.toLowerCase()
        }).exec()
    } catch (e: any) {
        throw e;
    }
}

export async function findUniqueAdmin(id: string) {

    try {
        await connectToDatabase();
        return await Admin.findById(id).exec()
    } catch (e: any) {
        throw e;
    }
}
export async function updateAdmin(data: any) {
    try {
        await connectToDatabase();
        return await Admin.findByIdAndUpdate(data.id,  {$set: {...data}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}


export const getPagedAdminByAdminRepo = async (data: any) => {
    await connectToDatabase();
    const {pageIndex, pageSize, sortField, sortOrder, filters} = data;
    const {
        searchText
    } = filters;

    return Admin.aggregate([
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
                role: 1,
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

export async function deleteAdminByAdminRepo(id: any) {
    try {
        await connectToDatabase();
        return await Admin.findByIdAndUpdate(id,  {$set: {archived: true}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}
export async function activationAdminByAdminRepo(id: any, data: any) {
    try {
        await connectToDatabase();
        return await Admin.findByIdAndUpdate(id,  {$set: {active: data.active}}, { new: true }).select('_id name email ').exec();
    } catch (e: any) {
        throw e;
    }
}
