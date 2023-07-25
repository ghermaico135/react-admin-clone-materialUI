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
import dashboard from '../dashBoard/dashboard';

const SideBar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed , setIsCollapsed] = useState(false)
  const [isSelected, setIsSelected] = useState("dashboard")

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner":{
        background:`${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper":{
        background:`transparent !important`
      },
      "& .pro-inner-item":{
        padding:`5px 35px 5px 20px !important`
      },
      "& .pro-inner-item:hover":{
        color: "#868dfb !important",
      },
      "& .pro-inner-item.active":{
        color: "#6870fa !important",
      },

    }}>

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
              <img alt="profile-user" width="100px" height="100px" src={``} 
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
        </Menu>
      </Sidebar>
      
    </Box>
  )
}

export default SideBar
