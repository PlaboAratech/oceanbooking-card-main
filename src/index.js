import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from './myTheme';
import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={myTheme}>
        <App />
    </ChakraProvider>
);

