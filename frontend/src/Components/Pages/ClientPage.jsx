import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import React from 'react'
import { UserState } from '../../Context/userProvider';
import { useNavigate } from 'react-router-dom'
// import UserListItem from '../Cards/UserListItem';
import "./ClientPage.css";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const ClientPage = () => {
  const {clientuser,search,ngoSearch, setNgoSearch,searchDistrict,
    searchState,searchCountry}=UserState();
  const [loading, setLoading] = useState(false)
  const toast= useToast();
  const navigate = useNavigate();
  const logoutHandler= ()=>{
    localStorage.removeItem("clientUserInfo");
    navigate("/");
  };
  // console.log({search});
  const call=async()=>{
    try {
          setLoading(true);
          const config={
            headers:{
              Authorization:`Bearer ${clientuser.token}`,
            },
          };
          const {data}= await axios.get(`/api/clientuser?search=${search}&district=${searchDistrict}&state=${searchState}&country=${searchCountry}`,config);
          setLoading(false);
          setNgoSearch(data);
          console.log(data);
        } catch (error) {
          // toast({
          //   title: 'Error occured',
          //   status: 'warning',
          //   duration: 5000,
          //   isClosable: true,
          //   position:"bottom",
          // });  
        }
  }
  useEffect(() => {
   call();
  }, []);
  
  return (
    <>
    <div className="section-container">
      <div className="header-container">
              <h1>Listed NGOs nearer to Your location</h1>
              <div className='log'>

                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                      {/* <Avatar size="sm" cursor={"pointer"} name={clientuser.name} src={clientuser.pic}/> */}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={logoutHandler}>LogOut</MenuItem>
                  </MenuList>
                </Menu>
              </div>
      </div>
      <div className="project-cards-container">
          {
              ngoSearch.map(({name,city,pic,email})=>{
                  return <Cards name={name} pic={pic} city={city} email={email}/>
              })
          }
      </div>
    </div>
      
    </>
  )
}

export default ClientPage;