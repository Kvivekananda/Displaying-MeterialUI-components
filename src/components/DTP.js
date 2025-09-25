import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Stack,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "TeamMembers", headerName: "Team Members", width: 180 },
  { field: "DraftTask", headerName: "Draft Task", type: "number", width: 150 },
  { field: "Ready_To_Deploy", headerName: "Ready To Deploy", type: "number", width: 180 },
  { field: "Complete", headerName: "Complete", type: "number", width: 150 },
  { field: "Blocked", headerName: "Blocked", type: "number", width: 150 },
];


const rowsByDate = {
  "2025-09-22": [
    { id: 1, TeamMembers: "Vivekananda", DraftTask: 9, Ready_To_Deploy: 8, Complete: 1, Blocked: 4 },
    { id: 2, TeamMembers: "Pavan", DraftTask: 6, Ready_To_Deploy: 8, Complete: 5, Blocked: 1 },
    { id: 3, TeamMembers: "Srini", DraftTask: 8, Ready_To_Deploy: 8, Complete: 1, Blocked: 3 },
    { id: 4, TeamMembers: "Praneeth", DraftTask: 4, Ready_To_Deploy: 8, Complete: 2, Blocked: 2 },
    { id: 5, TeamMembers: "Ravi", DraftTask: 7, Ready_To_Deploy: 8, Complete: 5, Blocked: 3 },
    { id: 6, TeamMembers: "Nikhil", DraftTask: 5, Ready_To_Deploy: 5, Complete: 4, Blocked: 1 },
    { id: 7, TeamMembers: "Bala", DraftTask: 6, Ready_To_Deploy: 4, Complete: 5, Blocked: 3 },
  ],
  "2025-09-23": [
    { id: 1, TeamMembers: "Vivekananda", DraftTask: 8, Ready_To_Deploy: 7, Complete: 3, Blocked: 2 },
    { id: 2, TeamMembers: "Pavan", DraftTask: 7, Ready_To_Deploy: 6, Complete: 4, Blocked: 2 },
    { id: 3, TeamMembers: "Srini", DraftTask: 5, Ready_To_Deploy: 7, Complete: 3, Blocked: 1 },
    { id: 4, TeamMembers: "Praneeth", DraftTask: 6, Ready_To_Deploy: 6, Complete: 3, Blocked: 2 },
  ],
  "2025-09-24": [
    { id: 1, TeamMembers: "Vivekananda", DraftTask: 10, Ready_To_Deploy: 6, Complete: 2, Blocked: 3 },
    { id: 2, TeamMembers: "Pavan", DraftTask: 9, Ready_To_Deploy: 5, Complete: 4, Blocked: 2 },
    { id: 3, TeamMembers: "Srini", DraftTask: 4, Ready_To_Deploy: 7, Complete: 5, Blocked: 1 },
    { id: 4, TeamMembers: "Praneeth", DraftTask: 5, Ready_To_Deploy: 6, Complete: 4, Blocked: 2 },
  ],
};

export default function Dashboard() {
  const [date, setDate] = React.useState(null);
  const [cleared, setCleared] = React.useState(false);


  const allowedDates = ["2025-09-22", "2025-09-23", "2025-09-24"];
  const shouldDisableDate = (day) => {
    const formatted = day.format("YYYY-MM-DD");
    return !allowedDates.includes(formatted);
  };

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => setCleared(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [cleared]);

  const selectedRows = date ? rowsByDate[date.format("YYYY-MM-DD")] : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          📊 Project Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          View team progress by selecting a project date.
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select a Date
          </Typography>
          <DesktopDatePicker
            label="Project Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            shouldDisableDate={shouldDisableDate}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText: "Only Sep 22, 23, 24 2025 are available",
              },
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </Paper>

        {cleared && (
          <Alert severity="success" sx={{ mb: 3, width: "fit-content" }}>
            Date cleared!
          </Alert>
        )}

        {selectedRows ? (
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              📅 Schedule for {date.format("YYYY-MM-DD")}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={selectedRows}
                columns={columns}
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
              />
            </div>
          </Paper>
        ) : (
          <Alert severity="info">Please select a date to view data.</Alert>
        )}
      </Box>
    </LocalizationProvider>
  );
}
