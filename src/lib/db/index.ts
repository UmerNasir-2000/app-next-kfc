import {PrismaClient} from '@prisma/client'

const prismaClient = global.prismaClient || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismaClient = prismaClient

export default prismaClient