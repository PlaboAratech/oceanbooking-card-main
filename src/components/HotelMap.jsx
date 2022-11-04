import { Flex } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function  HotelMap() {
    const position = [51.505, -0.09]

    return(
    //Sacar del hotel prop el nombre y las coordenadas
    <Flex  w='100%' border='1px solid black' justify='center' align='center' height={'300px'}>
         <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{height:'300px', width: '300px'}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>,
    </Flex>
    )
}
