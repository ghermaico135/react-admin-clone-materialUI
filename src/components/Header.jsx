/* eslint-disable */
import { useTheme } from "@emotion/react"
import { tokens } from "../theme"
import { Box, Typography } from "@mui/material"
useTheme

const Header = ({title,subTitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box >
        <Typography
          variant="h2"
          color = {colors.grey[100]}
          fontWeight="bold"
          sx={{mb: "5px"}}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          color = {colors.greenAccent[400]}
        >
          {subTitle}
        </Typography>
    </Box>
  )
}

export default Header
