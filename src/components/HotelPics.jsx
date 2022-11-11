import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';

export default function HotelPics({images}){

    return(
        <Carousel showStatus={false} showThumbs={false}>
            {images?.map((image)=>
                <Image key={image} src={image} />
            )}        
        </Carousel>
    )
}