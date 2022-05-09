import React, { useState } from 'react'
import {Button,FormControl,FormLabel,Input,InputGroup,InputRightElement,toast,useToast,VStack } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [show1,setShow1]=useState(false);
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const[loading,setLoading]=useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick1=()=>{
    setShow1(!show1);
}
const submitHandler= async()=>{
  setLoading(true);
  if(!email || !password){
    toast({
      title: 'Please Fill all the Fields',
      status: 'warning',
      duration: 1000,
      isClosable: true,
      position:"bottom",
    });  
    setLoading(false);
    return;
  }
  try {
    const config={
      headers:{
        "Content-type":"application/json",
      },
    };
    const {data}= await axios.post("/api/ngouser/login",{email,password},
    config);
    toast({
      title: 'Logged In Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position:"bottom",
    });  
    localStorage.setItem('ngoUserInfo',JSON.stringify(data));
    setLoading(false);
    navigate('/ngo');
  } catch (error) {
    toast({
      title: 'Error occured',
      status: 'warning',
      duration: 1000,
      isClosable: true,
      position:"bottom",
    });  
    setLoading(false);
  }
}
  return (
    <VStack spacing='5px' color="black">
    <FormControl id='email' isRequired>
      <FormLabel>Email</FormLabel>
        <Input borderColor="black" value={email}color="black" placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
    </FormControl>
    <FormControl id='password' isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input type={show1?"text":"password"} value={password} borderColor="black" color="black" placeholder='Enter your Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1}>
              {show1?"Hide":"Show"}
            </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button colorScheme={"blue"} isLoading={loading} width="100%" style={{marginTop:15}}
     onClick={submitHandler}
     >
              Login     </Button>
    <Button colorScheme={"red"} width="100%" style={{marginTop:15}} onClick={()=>{ setEmail("guest@example.com"); setPassword("123456")}}>
              Login as a Guest User
    </Button>
  </VStack>
  )
}

export default Login