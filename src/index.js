import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from './myTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={myTheme}>
        <App />
    </ChakraProvider>
);

