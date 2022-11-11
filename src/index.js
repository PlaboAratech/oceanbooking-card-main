import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from './myTheme';
import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

ReactDOM.render(
    <ChakraProvider theme={myTheme}>
        <App />
    </ChakraProvider>,
    document.getElementById('root')
  );


