import {extendTheme} from '@chakra-ui/react'

const colors = {
    bg: {
        primary: '#1C1816',
        dark: '#000000',
    },
    text: {
        primary: '#F8F8F8',
        accent: '#EB002B',
    }
}

const theme = extendTheme({
    styles: {
        global: (props) => ({
            '*, *::before, &::after': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            'html, body': {
                background: 'bg.dark',
                color: 'text.primary',
            },
        }),
    },
    colors
})

export default theme