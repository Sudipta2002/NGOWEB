import React, { useEffect } from 'react'
import {Container,Box,Text} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ClientFinder from '../Authentication/ClientFinder';
// import NGOFinder from '../Authentication/NgoFinder';
import NgoFinder from '../Authentication/NgoFinder';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();

    useEffect(() => {
     const user1=JSON.parse(localStorage.getItem("clientUserInfo"));
     const user2=JSON.parse(localStorage.getItem("ngoUserInfo"));
     
     if(user1){
      //  console.log("getting called");
        navigate('/client');
      }
     if(user2){
      //  console.log("getting called");
        navigate('/ngo');
      }
    }, [navigate])
  return (
        <Container maxW='xl' centerContent>
          <Box 
            d="flex" 
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0" 
            borderRadius="lg" 
            borderWidth="1px"
           >
            <Text fontSize={'5xl'} fontFamily="Work sans" color="black">ONE-STOP-NGO</Text>
          </Box>
          <Box
            bg={"white"}
            w="100%" 
            borderRadius="lg" 
            borderWidth="1px"
            p={4}
            color="black"
          >
            <Tabs variant='soft-rounded' colorScheme='facebook'>
      <TabList mb="1em">
        <Tab width="50%">Client Auth</Tab>
        <Tab width="50%">NGO Auth</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NgoFinder/>
        </TabPanel>
        <TabPanel>
          <ClientFinder/>
        </TabPanel>
      </TabPanels>
    </Tabs>
          </Box>
        </Container>
  )
}

export default Homepage