/* eslint-disable */

import { Box, IconButton, Typography,useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item = ({title,to,icon,selected,setIsSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return ( <MenuItem 
    active={selected === title}
    style={{color: colors.grey[100]}}
    onClick={() => setIsSelected(title)}
    icon={icon}
  >
    <Typography>{title}</Typography>
    <Link to={to} />

    </MenuItem>)
   
}

const SideBar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed , setIsCollapsed] = useState(false)
  const [isSelected, setIsSelected] = useState("Dashboard")

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >

      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuBookOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color : colors.grey[100],
          }}
          >
            {!isCollapsed && (
              <Box 
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px">
                <Typography variant='h3' color = {colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuBookOutlinedIcon />
                </IconButton >

              </Box>
            )}

          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
               <Box display="flex" justifyContent="center" alignItems="center">
              <img alt="profile-user" width="100px" height="100px" src={"../../assets/user.png"} 
              style={{cursor:"pointer" ,borderRadius:"50%"}} />
            </Box>
            <Box textAlign="center">
              <Typography
              variant='h2' color ={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>
                  Ed Roh
              </Typography>
              <Typography
              variant='h5' color ={colors.greenAccent[500]}>
                  VP Fancy Admin
              </Typography>
            </Box>

            </Box>
           
          )}

          {/* Menu Items */}
          <Box  paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item 
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
             <Typography variant='h6' color={colors.grey[300]} 
              sx={{ m : "15px 0 5px 20px"}}
            >
              Data
            </Typography>
            <Item 
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlineOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
              <Item 
              title="Contacts information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
      
             <Item 
              title="Invoices Balance"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
                 <Typography variant='h6' color={colors.grey[300]} 
              sx={{ m : "15px 0 5px 20px"}}
            >
              Pages
            </Typography>
             <Item 
              title="Profile Form"
              to="/form"
              icon={<PersonOutlineOutlinedIcon/>}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
            <Item 
              title="Calendar"
              to="/form"
              icon={<CalendarTodayOutlinedIcon/>}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
            <Item 
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon/>}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />

            <Typography variant='h6' color={colors.grey[300]} 
              sx={{ m : "15px 0 5px 20px"}}
            >
              Charts
            </Typography>
            <Item 
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
             <Item 
              title="Pie Chart"
              to="/pie"
              icon={< PieChartOutlineOutlinedIcon/>}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
             <Item 
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
            <Item 
              title="Geography"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected = {isSelected}
              setIsSelected={setIsSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
      
    </Box>
  )
}

export default SideBar
