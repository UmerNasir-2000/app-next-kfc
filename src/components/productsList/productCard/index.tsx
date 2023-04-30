import {Card, CardBody, CardFooter} from "@chakra-ui/card";
import {Button, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Product} from "@prisma/client";


type ProductCardProps = {
    product: Product
}
export default function ProductCard(props: ProductCardProps) {

    const {product} = props

    return (
        <Card maxW='xs' h={500} bg='bg.primary' color='text.primary'
              transition='transform 0.5s ease'
              _hover={{cursor: 'pointer', transform: 'scale(1.1)'}}>
            <CardBody>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    w='100%'
                />
                <Stack mt='2'>
                    <Heading size='md' fontWeight='900'>{product.name}</Heading>
                    <Text>
                        {product.description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter display='flex' justify='space-between' alignItems='center'>
                <Text fontSize='2xl' fontWeight='bold'>
                    Rs. {product.price}
                </Text>
                <Button bg='text.accent' color='white' size='sm' fontWeight='bold' _hover={{bg: 'red.600'}}>
                    Add to bucket
                </Button>
            </CardFooter>
        </Card>
    )
}