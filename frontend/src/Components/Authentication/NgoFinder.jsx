import React from 'react'
import {Container,Box,Text} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LoginUser from './LoginUser';
import SignupUser from './SignupUser';
const NgoFinder = () => {
  return (
    <Container maxW='xl' centerContent>
          <Box
            bg={"white"}
            w="100%" 
            borderRadius="lg" 
            borderWidth="1px"
            p={4}
            color="black"
          >
            <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList mb="1em">
        <Tab width="50%">Login</Tab>
        <Tab width="50%">SignUP</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LoginUser/>
        </TabPanel>
        <TabPanel>
          <SignupUser/>
        </TabPanel>
      </TabPanels>
    </Tabs>
          </Box>
        </Container>
  )
}

export default NgoFinder