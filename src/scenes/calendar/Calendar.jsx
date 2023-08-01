/* eslint-disable */ 
import { useState } from "react";
import { tokens } from "../../theme"
import { Box, List, ListItem, ListItemText, Typography,useTheme } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import Header from "../../components/Header";


const Calendar = () => {
 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) =>{
    const title = prompt("Please enter a new title for your event");
    const CalendarApi = selected.view.calendar;
    CalendarApi.unselect();

    if(title) {
      CalendarApi.addEvent({
        id : `${selected.dateStr} -${title}`,
        title,
        start:selected.startStr,
        end:selected.endStr,
        allDay:selected.allDay,
    })
  }
  }
  const handleEventClick = (selected) =>{
    if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
      selected.event.remove();
    }
  }
  return (
    <Box m="20px" width="79vw">
      <Header title="CALENDAR" subTitle="Full Calendar Interactive Page" /> 
      <Box display="flex" justifyContent="space-between">
        {/* calendar sidebar */}
        <Box flex="1 1 20%" 
        backgroundColor={colors.primary[400]} p="15px" 
        borderRadius="4px">
          <Typography variant="h5">Events</Typography>
          {currentEvents.map((event) =>(
            <List>
              <ListItem
                key={event.id} 
                sx={{backgroundColor: colors.greenAccent[500],
                margin:"10px 0",
                borderRadius:"2px"
                }}
              >
                <ListItemText primary={event.title} secondary={
                  <Typography>
                    {formatDate(event.start,{
                      year:"numeric",
                      month:"short",
                      day: "numeric"
                    })}
                  </Typography>
                }/>

              </ListItem>
              </List>
          ))}
        </Box>
        {/* calendar view */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar 
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
          ]} 
          headerToolbar={{
            left:"prev,next,today",
            center:"title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick = {handleEventClick}
          eventsSet ={(events) => setCurrentEvents(events)}
          initialEvents={[
            {id : "1234" ,title:"All-day event", date:"2023-08-01"},
            {id : "5678" ,title:"Timed event", date:"2023-08-21"},
          ]}

          />

        </Box>
      </Box>
    </Box>
  )
}

export default Calendar;
