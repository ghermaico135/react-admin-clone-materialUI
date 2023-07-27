/* eslint-disable */

import { Box } from "@mui/material"
import Header from "../../components/Header"
/* eslint-disable */


const dashboard = () => {
  return (
    <Box m="20px" >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DashBoard" subTitle="welcome to your page" />
      </Box>
    </Box>
  )
}

export default dashboard
