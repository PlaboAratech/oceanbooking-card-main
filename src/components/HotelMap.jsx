import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function  HotelMap() {
    const position = [51.505, -0.09]

    return(
    //Sacar del hotel prop el nombre y las coordenadas
         <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{height:'300px', width: '100%'}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}
