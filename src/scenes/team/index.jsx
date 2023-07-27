/* eslint-disable */
import { tokens } from "../../theme"
import { Box, Typography,useTheme } from "@mui/material"
import {mockData } from "../../Data/mockData"
import { DataGrid } from "@mui/x-data-grid"
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
      <Header title="Teams" subTitle="Managing the Teams Members" />
      <Box>

      </Box>
      
    </Box>
  )
}

export default Team
