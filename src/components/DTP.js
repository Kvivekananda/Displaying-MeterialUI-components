import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import { DemoContainer} from '@mui/x-date-pickers/internals/demo';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';


export default function DTP() {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <div style={{ padding: "25px" }}>
         <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                <Typography variant="h4" fontWeight="bold">DATA TIME PICKER</Typography>
                <Typography variant="body2" color="text.secondary">
                 A collection of React UI components for selecting dates and times.
                </Typography>
            </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
   position: "relative",
          }}
        >
          <DemoItem label="DesktopDatePicker">
            <DesktopDatePicker
              sx={{ width: 260 }}
              slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </DemoItem>

          {cleared && (
            <Alert
              sx={{ position: "absolute", bottom: 0, right: 0 }}
              severity="success"
            >
              Field cleared!
            </Alert>
          )}
        </Box>
      </LocalizationProvider>





      <div  style={{paddingRight:'60em',marginTop:'60px'}}>
        <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                <Typography variant="h6" fontWeight="bold">DATA TIME PICKER</Typography>
                <Typography variant="body2" color="text.secondary">
                 A collection of React UI components for selecting dates and times.
                </Typography>
            </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker orientation="landscape" />
      </LocalizationProvider>
      </div>





<div style={{marginTop:'60px'}}>
    <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                <Typography variant="h6" fontWeight="bold">DATA TIME PICKER</Typography>
                <Typography variant="body2" color="text.secondary">
                 A collection of React UI components for selecting dates and times.
                </Typography>
            </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['StaticDateTimePicker']}>
        
         <DemoItem label="Static variant">
          <StaticDateTimePicker defaultValue={dayjs('2025-10-17T15:30')} />
        </DemoItem>
       
      </DemoContainer>
        </LocalizationProvider>
</div>
    </div>
  );
}


