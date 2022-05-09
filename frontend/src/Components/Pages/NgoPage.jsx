import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserState } from '../../Context/userProvider';

const NgoPage = () => {
  const {ngouser,search,ngoSearch, setNgoSearch,searchDistrict,
    searchState,searchCountry}=UserState();
    const navigate = useNavigate();
  const logoutHandler= ()=>{
    localStorage.removeItem("ngoUserInfo");
    navigate("/");
  };
  return (
    <div className="section-container">
      <div className="header-container">
              <h1>Dashboard</h1>
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
      </div>
  )
}

export default NgoPage