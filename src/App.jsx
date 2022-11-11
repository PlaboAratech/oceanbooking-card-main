import React, { useState } from 'react';
import { Flex , Button} from '@chakra-ui/react'

//comps
import CardComp from "./components/CardComp";
//import data from './fixture.json'
import data from './fixture2.json'

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [login, setLogin] = useState(false);

  return (
	<Flex w='100%' align='center' minH='100vh' justify='center' bg='white' direction='column' gap='2vh' py='10vh'>
		<Button variant='brandPrimary' onClick={()=>setLogin(!login)}>
			{login? 'LOGIN' : 'LOGOUT'} 
		</Button>

		{/* Contenedor responsive para el listado */}
		<Flex maxW='750px' px='20px'  mx='auto' direction='column' gap='5vh'>
			{data.map((hotel) => (
				<CardComp login={login} hotel={hotel} key={hotel['hotel']} />
			))} 
		</Flex>
	</Flex>
  );
}