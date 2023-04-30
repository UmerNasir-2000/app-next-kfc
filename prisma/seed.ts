import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// const categories: Prisma.CategoryCreateManyInput[] = [
//     {
//         name: 'Ala Carte & Combos',
//         imageUrl: 'https://images.kfcpakistan.com/image/1664808314387-image.png'
//     },
//     {
//         name: 'Signature Boxes',
//         imageUrl: 'https://images.kfcpakistan.com/image/1670428259329-image.jpg'
//     },
//     {
//         name: 'Sharing',
//         imageUrl: 'https://images.kfcpakistan.com/image/1670428289482-image.jpg'
//     },
//     {
//         name: 'Snacks & Beverages',
//         imageUrl: 'https://images.kfcpakistan.com/image/1670428300613-image.jpg'
//     },
//     {
//         name: 'Midnight',
//         imageUrl: 'https://images.kfcpakistan.com/image/1664808381179-image.png'
//     }
// ]
//
//
// const products: Prisma.ProductCreateManyInput[] = [
//     // {
//     //     name: 'Krunch Burger',
//     //     description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
//     //     price: 250,
//     //     imageUrl: 'https://images.kfcpakistan.com/image/1670410356108-image.jpg',
//     //     categoryId: '644d59b9873422d1f16b01cb'
//     // },
//     // {
//     //     name: 'Rice N Spice',
//     //     description: 'Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce',
//     //     price: 330,
//     //     imageUrl: 'https://images.kfcpakistan.com/image/1670409072074-image.jpg',
//     //     categoryId: '644d59b9873422d1f16b01cb'
//     // },
//     // {
//     //     name: 'Zingeratha',
//     //     description: 'Crispy chicken, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha',
//     //     price: 330,
//     //     imageUrl: 'https://images.kfcpakistan.com/image/1664220028997-image.png',
//     //     categoryId: '644d59b9873422d1f16b01cb'
//     // },
//     // {
//     //     name: 'Krunch Burger + Drink',
//     //     description: '1 Krunch burger + 1 regular drink',
//     //     price: 350,
//     //     imageUrl: 'https://images.kfcpakistan.com/image/1664220042613-image.png',
//     //     categoryId: '644d59b9873422d1f16b01cb'
//     // },
//     {
//         name: 'Krunch With Fries N Drink',
//         description: 'Krunch + 1 regular Fries + 1 regular Drink',
//         price: 490,
//         imageUrl: 'https://images.kfcpakistan.com/image/1670409700963-image.jpg',
//         categoryId: '644d59b9873422d1f16b01cb'
//     },
//     {
//         name: 'Chicken N Chips',
//         description: '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce',
//         price: 520,
//         imageUrl: 'https://images.kfcpakistan.com/image/1670410283442-image.jpg',
//         categoryId: '644d59b9873422d1f16b01cb'
//     },
//     {
//         name: 'Krunch Chicken Combo',
//         description: '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink',
//         price: 520,
//         imageUrl: 'https://images.kfcpakistan.com/image/1670411150887-image.jpg',
//         categoryId: '644d59b9873422d1f16b01cb'
//     },
//     {
//         name: '3 Pcs Chicken',
//         description: '3 pieces of Hot and Crispy Fried Chicken',
//         price: 590,
//         imageUrl: 'https://images.kfcpakistan.com/image/1670408306192-image.jpg',
//         categoryId: '644d59b9873422d1f16b01cb'
//     }
// ]


async function main() {
    // const createdProducts = await prisma.product.createMany({data: products})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })