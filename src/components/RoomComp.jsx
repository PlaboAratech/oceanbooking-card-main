import { Flex, Text, Button, Image } from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';

export default function RoomComp({room, login}){

    return(
        <Flex w='100%' direction='column' borderBottom='1px solid#979797'>

            {/* Section image + desc */}
            <Flex w='100%' p='30px 24px 20px'>
                <Flex w='50%'>
                    <Carousel showStatus={false} showThumbs={false}>
                        {room['images_room'].map((image)=>
                            <Image src={image} />
                        )}        
                    </Carousel>
                    
                </Flex>
                <Flex w='50%' gap='1em' direction='column' p='30px 14px 20px'>
                    <Text as='h2'>
                        {room['room_title']}
                    </Text>
                    <Text>
                        {room['room_description']}
                    </Text>
                </Flex>
            </Flex>

            {/* Board Types */}
            <Flex w='100%' borderTop='solid 1px #08a7a6'  justify='space-between'>
                <Flex p='15px 1em 13px'>
                    <Text fontWeight='700' color='black' >Elige tu pensión</Text>
                </Flex>
                <Flex>
                    <Flex w='18em' justify='end' p='15px 1em 13px' >
                        <Text fontWeight='700' color='black'>Precio Estándar</Text>
                    </Flex>
                    {login && 
                    <Flex w='18em' direction='column' justify='center' bg='lightPrimary' p='15px 1em 13px'>
                        <Text fontWeight='700' color='black'>Spring Club</Text>
                        <Text fontSize='10px' lineHeight='1.6em' color='grey' >5% de descuento solo por unirte a Spring Club</Text>
                    </Flex>
                    }
                </Flex>
            </Flex>

			{room['boardtypes'].map((boardtype) => (
				<Flex  w='100%' borderTop='solid 1px #08a7a6' justify='space-between'>
                    <Flex  p='15px 1em 13px' direction='column' >
                        <Text as='h3' > {boardtype['boardtype_text']} </Text>
                        <Text> {boardtype['offertext']} </Text>
                    </Flex>
                    <Flex>
                        <Flex p='15px 1em 13px' w='18em' justify='center' align='center' textAlign='right'>
                            <Flex direction='column'>
                                <Text textDecor='line-through'  >{Math.round(boardtype['pricewithoutoffer'] * 100) / 100}€</Text>
                                <Text as='pricetext' >{Math.round(boardtype['pricewithoffer'] * 100) / 100}€</Text>
                            </Flex>
                            <Button ml='10px' variant='brandSecondary'>Seleccionar</Button>
                        </Flex>
                        {login && 
                        <Flex  bg='lightPrimary' justify='center' w='18em' p='15px 1em 13px' align='center' >
                            <Flex direction='column' align='end'>
                                <Text textDecor='line-through'  >{Math.round(boardtype['pricewithoutoffer'] * 95) / 100}€</Text>
                                <Text as='pricetext' >{Math.round(boardtype['pricewithoffer'] * 95) / 100}€</Text>
                            </Flex>
                            <Button  ml='10px' variant='brandPrimary'>Seleccionar</Button>
                        </Flex>
                        }
                    </Flex>
                </Flex>
			))}

        </Flex>


    )
}