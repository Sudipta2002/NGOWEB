import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
// import {Button,FormControl,FormLabel,Input,InputGroup,InputRightElement,VStack } from '@chakra-ui/react'
import LoginUser from './LoginUser'
import Signup from './Signup'
import SignupUser from './SignupUser'

const ClientFinder = () => {

  
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
          <Login/>
        </TabPanel>
        <TabPanel>
          <Signup/>
        </TabPanel>
      </TabPanels>
    </Tabs>
          </Box>
        </Container>
  )
}

export default ClientFinder