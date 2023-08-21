/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PetsIcon from '@mui/icons-material/Pets';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      href:"#Home",
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      href:"#About",
    },
    {
      text: "Serviços",
      icon: <PetsIcon />,
      href:"#Services",
    },
    {
      text: "Depoimentos",
      icon: <CommentRoundedIcon />,
      href:"#Testimonials",
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      href:"#Contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#Home">Home</a>
        <a href="#About">Sobre</a>
        <a href="#Services">Serviços</a>
        <a href="#Testimonials">Depoimentos</a>
        <a href="#Contact">Contato</a>
        <a className="primary-button" href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FIMGBA4ZYP6L5I1&e=AT2ZKBEA6PcxrPWVkrC6n-wvPaxDpP1kBanpueBztCNL64_m1BkwPHUz5yT_56icVRNnrklOMrRBV7BHHme78yXYvAw-mQ1RzNbmnHgRWzB0dpbtG6x7oxw" target="_blank" rel="noreferrer"> Fale comigo</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                <ListItemButton >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <a href={item.href} ><ListItemText primary={item.text} /></a>
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;