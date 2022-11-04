import React from "react";
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

import room from "../../static/img/rooms/room01/room01-01.jpg"
import room1 from "../../static/img/rooms/room01/room01-02.jpg"

class RoomGallery extends React.Component {

  render() {

    let imageArray =  this.props.sliderimages;
    let images = [];

    let getImages = (array) => {
      if(array && array.length) {
        for (let i = 0; i < array.length; i++) {
          images.push({original: array[i],})
        }
      } else {
        images.push(
            {original: room},
            {original: room1},
            )
      }
    };

    getImages(imageArray);

    return (
      <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showNav={true}
          showBullets={false}
      />
    );
  }

}

export default RoomGallery;