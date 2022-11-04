import { useState } from 'react'
import { Flex, Button, Link, Text } from '@chakra-ui/react'

//comps
import HotelInfo from './HotelInfo'
import HotelDesc from './HotelDesc'
import HotelMap from './HotelMap'
import RoomComp from './RoomComp'

export default function CardComp({hotel, login}){
	const [tab, setTab] =useState('')

	return(
		<Flex bg='white' borderRadius='4px'   direction='column'  w='100%'
		border='1px solid #CCD9D6' boxShadow='0 4px 8px 0 rgba(0,0,0,0.15)' gap='10px' >
			{/* Image y title little desc*/}
			<HotelInfo title={hotel['hotel_name']} />

			{/* Mini navbar */}
			<Flex w='100%' justify='space-between' align='center' gap='2em' >
				{/* navitems */}
				<Flex p='0 12px' justify='space-evenly'>
					<Link as='navitem'  onClick={()=>tab!=='room'?setTab('room') : setTab('')} >Habitación</Link>
					<Link as='navitem'  onClick={()=>tab!=='desc'?setTab('desc') : setTab('')}>Descripción</Link>
					<Link as='navitem'  onClick={()=>tab!=='map'?setTab('map') : setTab('')} >Mapa</Link>
					<Link as='navitem'  onClick={()=>tab!=='pics'?setTab('pics') : setTab('')}>Fotos</Link>
				</Flex>
				{/* Price and button */}
				<Flex gap='1em' align='center' p='8px 24px 8px 0' > 
					<Text as='pricetext'>+457,02€</Text>
					<Button variant='brandPrimary' ml='20px' >ELEGIR HOTEL</Button>
				</Flex>
			</Flex>

			{/* Selectable View */}
		
			{/* Rooms */}
			{tab==='room' &&  	(	
				hotel['products'].map((room) => (
					<RoomComp login={login} room={room} key={room['room']} />
				)) 
				)
			}
			{/* Desc */}
			{ tab==='desc' &&
				<HotelDesc hotel={hotel} />
			}

			{/* Map */}
			{ tab==='map' &&
				<HotelMap />
			}

		</Flex>
	)
}