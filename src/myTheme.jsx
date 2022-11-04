import { extendTheme } from "@chakra-ui/react"

export const myTheme = extendTheme({
    colors: {
        primary: '#08a7a6',
        lightPrimary: '#f1fcfc',
        buttonHover: '#09c3c3',
        grey: '#979797',
        },
    styles: {
        global: {
          // styles for the `body`
            body: {
                bg: 'white',
                color: '#8B8B8B',
                fontSize: '12px',
                fontWeight: '400',
                minWidth: '360px',
                },
            p: {
                lineHeight: '1.6em'
            },
            h1: {
                color: 'primary',
                fontWeight: '700',
            },
            h2: {
                color: 'primary',
                fontWeight: '700',
                fontSize: '1.5em',
            },
            h3: {
                color: 'primary',
                fontWeight: '700',
                fontSize: '1.35em',
            },
            navitem:{
                minW: '80px',
                padding: '10px 14px 14px',
                color: 'lightPrimary',
                fontWeight: '400',
                lineHeight: '1.5',
            },
            a: {
            color: 'teal.500',
            _hover: {
                textDecoration: 'underline',
            },
            },
            pricetext: {
                fontWeight: '700', 
                color: 'black', 
                fontSize: '1.3em'
            },
        },
      },
    components: {
        Button: {
            variants: {
                'brandPrimary':{
                    p: '8px 16px',
                    fontSize: '1em',
                    bg: 'primary',
                    color: 'white',
                    _hover:{
                        bg:' #09c3c3',
                    }
                },
                'brandSecondary':{
                    bg: 'white',
                    color: 'primary',
                    fontSize: '1em',
                    border: '1px solid #08a7a6',
                    p: '8px 16px',
                    _hover:{
                        bg:'primary',
                        color: 'white',
                    }
                },
            }
        }

    }
})