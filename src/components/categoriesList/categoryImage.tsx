import {Box, Image} from "@chakra-ui/react";


type CategoryImageProps = {
    image: string
}

export default function CategoryImage(props: CategoryImageProps) {

    const {image} = props

    return (
        <Box transition='transform 0.5s ease'
             _hover={{
                 cursor: 'pointer',
                 transform: 'scale(1.2)',
             }}>
            <Image src={image}/>
        </Box>
    )
}