import {connectToDatabase} from "@/lib/mongodb";
import Contact from "@/models/Contact";


export async function createContact(data: any) {
    try {
        await connectToDatabase();
        return await Contact.create(
             {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        )
    } catch (e: any) {
        throw e;
    }
}
export async function statusChangeContactRepo(id: any, data: any) {
    try {
        await connectToDatabase();
        return await Contact.findByIdAndUpdate(id, {$set: {...data}}).select('_id email').exec()
    } catch (e: any) {
        throw e;
    }
}

export const getPagedContactRepo = async (data: any) => {
    await connectToDatabase();
    const {pageIndex, pageSize, sortField, sortOrder, vendorId, filters} = data;
    const {
        searchText
    } = filters;

    return Contact.aggregate([
        {
            $match: {
                archived: false
            },
        },
        {
            $project: {
                id: "$_id",
                email: 1,
                firstName: 1,
                lastName: 1,
                phone: 1,
                message: 1,
                read: 1,
                open: 1,
                createdAt: 1,
                searchText: {
                    $concat: ["$email", " ", "$firstName", " ", "$lastName", " ", "$message", " ", "$phone" ],
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
