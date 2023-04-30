import {RefObject} from "react";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/modal";
import {Box, Button, Text} from "@chakra-ui/react";
import {FocusableElement} from "@chakra-ui/utils";
import {Flex} from "@chakra-ui/layout";

type CartDrawerProps = {
    openButtonRef: RefObject<FocusableElement> | undefined;
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer(props: CartDrawerProps) {

    const {openButtonRef, isOpen, onClose} = props

    return (

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={openButtonRef}
            size='sm'
        >
            <DrawerOverlay/>
            <DrawerContent bg='bg.primary'>
                <DrawerCloseButton/>
                <DrawerHeader>
                    <Text>Your Bucket</Text>
                </DrawerHeader>

                <DrawerBody>
                    <Flex alignItems='center' justify='center' h='xl'>
                        <Box>
                            <Box sx={{width: '100px', height: '100px', textAlign: 'center', marginInline: 'auto'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="gray" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                            </Box>
                            <Text fontWeight='bold'>You haven’t added any items in bucket yet</Text>
                        </Box>

                    </Flex>

                </DrawerBody>

                <DrawerFooter>
                    <Button bg='text.accent' color='white' fontWeight='bold' _hover={{bg: 'red.600'}} w='xl'>View
                        Bucket</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}