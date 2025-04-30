import React, { useState, useContext } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { styled } from "@mui/material/styles";
import { googleLogout } from '@react-oauth/google';
import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';

//components
import InfoDrawer from '../../drawer/Drawer';

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4A4A4A;
`;

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const {
    setAccount,
    setShowloginButton,
    setShowlogoutButton
  } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = () => setOpenDrawer(true);

  const onSignoutSuccess = () => {
    // call the Google logout helper
    googleLogout();

    alert("You have been logged out successfully");
    console.clear();

    // reset your app state
    setShowlogoutButton(false);
    setShowloginButton(true);
    setAccount('');
    setPerson({});

    handleMenuClose();
  };

  return (
    <>
      <MoreVert onClick={handleMenuOpen} />

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top',    horizontal: 'right' }}
      >
        <MenuOption
          onClick={() => {
            handleMenuClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuOption>

        <MenuOption onClick={onSignoutSuccess}>
          Logout
        </MenuOption>
      </Menu>

      <InfoDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        profile={true}
      />
    </>
  );
};

export default HeaderMenu;
