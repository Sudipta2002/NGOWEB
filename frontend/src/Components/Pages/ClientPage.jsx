import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { UserState } from '../../Context/userProvider';
import { useNavigate } from 'react-router-dom'
// import UserListItem from '../Cards/UserListItem';

const ClientPage = () => {
  const {clientuser,search}=UserState();
  const navigate = useNavigate();
  const logoutHandler= ()=>{
    localStorage.removeItem("clientUserInfo");
    navigate("/");
  };
  // console.log({search});
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
            {/* <Avatar size="sm" cursor={"pointer"} name={clientuser.name} src={clientuser.pic}/> */}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={logoutHandler}>LogOut</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default ClientPage