import { Flex, Image, Text } from "@chakra-ui/react"



export default function HotelInfo({title}) {


    return(
        <Flex w='100%'  bg='white' p='30px 24px 20px' borderBottom='1px solid#979797'>

            <Flex w='50%'>
                <Image src={'http://apibooking.springhoteles.com/media/1026/D/FRESH_01.jpg'} />
            </Flex>
            <Flex w='50%' direction='column' gap='2em' p='30px 24px 20px'>
                {/* Title */}
                <Text as='h2' >{title}</Text>
                <Text> Lorem ipsum de la descripcion del hotel etc etc </Text>
            </Flex>

        </Flex>
    )
}