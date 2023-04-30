import Head from 'next/head'
import {Poppins} from 'next/font/google'
import axios from "axios";
import {Category, Product} from "@prisma/client";
import {InferGetStaticPropsType} from "next";
import {Container} from "@chakra-ui/layout";
import Banner from "@/components/core/banner";
import {Box} from "@chakra-ui/react";
import SectionHeader from "@/components/core/sectionHeader";
import CategoriesList from "@/components/categoriesList";
import ProductsList from "@/components/productsList";

const poppins = Poppins({weight: ['400', '600', '700'], subsets: ['latin']})

export default function Home({categories, products}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <title>KFC</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo-red.png"/>
            </Head>
            <main className={poppins.className}>

                <Container maxW='8xl' mt={5}>
                    <Box mb={10}>
                        <Banner/>
                    </Box>

                    <section>
                        <SectionHeader title='Browse Categories'/>
                        <CategoriesList categories={categories}/>
                    </section>

                    <section>
                        <SectionHeader title='Top Selling'/>
                        <ProductsList products={products}/>
                    </section>

                </Container>
            </main>
        </>
    )
}

export const getStaticProps = async () => {

    const categoriesResponse = await axios.get<Category[]>('http://localhost:3000/api/categories');
    const productsResponse = await axios.get<Product[]>('http://localhost:3000/api/top-products');

    return {
        props: {
            categories: categoriesResponse.data as Category[],
            products: productsResponse.data as Product[]
        }
    }
}
