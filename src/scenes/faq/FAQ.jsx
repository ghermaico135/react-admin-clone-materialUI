/* eslint-disable */
import {  Box,Typography,useTheme } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary  from "@mui/material/AccordionSummary"
import AccordionDetails  from "@mui/material/AccordionDetails"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme"


const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px" width="79vw">
      <Header title="FAQ" subTitle="Frequenly Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
              An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores accusamus quia cupiditate, sint eos asperiores vitae nobis et doloribus sapiente deserunt minus minima suscipit obcaecati maxime quos sed nam blanditiis eligendi exercitationem molestias alias nisi itaque. Inventore, vitae dolorum deserunt 
            fugit neque eveniet autem voluptatum laudantium distinctio accusamus iure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores accusamus quia cupiditate, sint eos asperiores vitae nobis et doloribus sapiente deserunt minus minima suscipit obcaecati maxime quos sed nam blanditiis eligendi exercitationem molestias alias nisi itaque. Inventore, vitae dolorum deserunt 
            fugit neque eveniet autem voluptatum laudantium distinctio accusamus iure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
              Additional question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores accusamus quia cupiditate, sint eos asperiores vitae nobis et doloribus sapiente deserunt minus minima suscipit obcaecati maxime quos sed nam blanditiis eligendi exercitationem molestias alias nisi itaque. Inventore, vitae dolorum deserunt 
            fugit neque eveniet autem voluptatum laudantium distinctio accusamus iure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
              Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores accusamus quia cupiditate, sint eos asperiores vitae nobis et doloribus sapiente deserunt minus minima suscipit obcaecati maxime quos sed nam blanditiis eligendi exercitationem molestias alias nisi itaque. Inventore, vitae dolorum deserunt 
            fugit neque eveniet autem voluptatum laudantium distinctio accusamus iure.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
