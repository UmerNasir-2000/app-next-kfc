import {Box, Text} from "@chakra-ui/react";

type SectionHeaderProps = {
    title: string
}
export default function SectionHeader(props: SectionHeaderProps) {

    const {title} = props

    return (
        <Box position='relative'>
            <div className='line'></div>
            <Text fontSize='1.8rem' fontWeight='bold'>{title}</Text>
        </Box>
    )
}