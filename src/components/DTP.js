import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box, Typography, Paper, Stack, Alert, Divider } from "@mui/material";

export default function DTP() {
  const [date, setDate] = React.useState(dayjs());
  const [time, setTime] = React.useState(dayjs());
  const [dateTime, setDateTime] = React.useState(dayjs());
  const [cleared, setCleared] = React.useState(false);
  const [cleared2, setCleared2] = React.useState(false);
  const [cleared3, setCleared3] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => setCleared(false), 1500);
      return () => clearTimeout(timeout);
    }
   
  }, [cleared]);
  React.useEffect(() => {
    if (cleared2) {
      const timeout = setTimeout(() => setCleared2(false), 1500);
      return () => clearTimeout(timeout);
    }
   
  }, [cleared2]);
   React.useEffect(() => {
    if (cleared3) {
      const timeout = setTimeout(() => setCleared3(false), 1500);
      return () => clearTimeout(timeout);
    }
   
  }, [cleared3]);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          p: 2,
          bgcolor: "#f5f5f5",
          mb: 2,
          borderRadius: 1,
          padding: "40px",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          DATE AND TIME PICKERS
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A collection of React UI components for selecting dates, times, and
          both date and time.
        </Typography>
      </Box>
      
      <Box sx={{ p: 4, minHeight: "100vh" }}>
        {/* Summary (real-world use case) */}
        <Paper elevation={1} sx={{ p: 3,marginBottom:'30px', borderRadius: 2, bgcolor: "#f5f5f5" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Summary
          </Typography>
          <Typography>
            📅 Date: {date ? date.format("YYYY-MM-DD") : "Not selected"}
          </Typography>
          <Typography>
            ⏰ Time: {time ? time.format("hh:mm A") : "Not selected"}
          </Typography>
          <Typography>
            📋 Full Schedule:{" "}
            {dateTime ? dateTime.format("YYYY-MM-DD hh:mm A") : "Not selected"}
          </Typography>
        </Paper>
        
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Schedule an Appointment
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Choose a date and time for your booking. These fields can be reused
          for meetings, reservations, or event scheduling.
        </Typography>

        <Stack spacing={4}>
          {/* Date Picker */}
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Select a Date
            </Typography>
            <DesktopDatePicker
              label="Appointment Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  helperText: "Pick a suitable date",
                },
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </Paper>

          {cleared && (
            <Alert severity="success" sx={{ mt: 3, width: "fit-content" }}>
              Date Field cleared!
            </Alert>
          )}

          {/* Time Picker */}
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Select a Time
            </Typography>
            <TimePicker
              label="Appointment Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  helperText: "Choose an available slot",
                },
                field: { clearable: true, onClear: () => setCleared2(true) },
              }}
            />
          </Paper>
          {cleared2 && (
            <Alert severity="success" sx={{ mt: 3, width: "fit-content" }}>
              Time Field cleared!
            </Alert>
          )}

          {/* Date & Time Picker */}
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Select Date & Time
            </Typography>
            <DateTimePicker
              label="Full Schedule"
              value={dateTime}
              onChange={(newValue) => setDateTime(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  helperText: "Combine date & time",
                },field: { clearable: true, onClear: () => setCleared3(true) },
              }}
            />
          </Paper>
           {cleared3 && (
            <Alert severity="success" sx={{ mt: 3, width: "fit-content" }}>
             Date and Time Fields cleared!
            </Alert>
          )}
        </Stack>

        

        
      </Box>
    </LocalizationProvider>
  );
}
