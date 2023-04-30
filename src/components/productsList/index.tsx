import {Product} from "@prisma/client";
import ProductCard from "@/components/productsList/productCard";
import {Flex} from "@chakra-ui/layout";

type ProductsListProps = {
    products: Product[]
}

export default function ProductsList(props: ProductsListProps) {
    const {products} = props
    return (
        <Flex justify='center' alignItems='center' gap={5} marginY={5} flexWrap='wrap' rowGap={7}>
            {products.map((product) => <ProductCard key={product.id} product={product}/>)}
        </Flex>
    )
}