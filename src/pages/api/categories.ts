import type {NextApiRequest, NextApiResponse} from 'next'
import prismaClient from "@/lib/db";
import {Category} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    const categories = await prismaClient.category.findMany()
    return res.status(200).json(categories)
}
