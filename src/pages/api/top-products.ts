import type {NextApiRequest, NextApiResponse} from 'next'
import prismaClient from "@/lib/db";
import {Product} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>
) {
    const products = await prismaClient.product.findMany({take: 4})
    return res.status(200).json(products)
}