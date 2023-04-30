import {Container, Flex} from "@chakra-ui/layout";
import {Box, Button, Image} from "@chakra-ui/react";
import {useDisclosure} from "@chakra-ui/hooks";
import {RefObject, useRef} from "react";
import CartDrawer from "@/components/cart";
import {FocusableElement} from "@chakra-ui/utils";

export default function Navbar() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const drawerRef = useRef() as RefObject<FocusableElement> | undefined

    return (
        <>
            <Container maxW='8xl' mt={5}>
                <nav>
                    <Flex justify='space-between' align='center'>
                        <Image src="/logo-red.png" alt="logo" width={70} height={70}/>
                        <Flex>
                            <Box position='relative' ref={drawerRef} onClick={onOpen}>
                                <Box position='absolute' left={3} right={3} top={1}
                                     sx={{fontSize: '1.3rem', fontWeight: 'bold', cursor: 'pointer'}}>0</Box>
                                <Image src="/bucket-empty.png" alt="empty bucket" width={10} height={10} mr={5}/>
                            </Box>
                            <Button bg='text.accent' shadow='md' _hover={{bg: 'red.600', cursor: 'pointer',}}>Register /
                                Sign
                                in</Button>
                        </Flex>
                    </Flex>
                </nav>
            </Container>
            <CartDrawer isOpen={isOpen} openButtonRef={drawerRef} onClose={onClose}/>
        </>


    )

}