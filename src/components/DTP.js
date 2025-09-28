import * as React from "react";
import Papa from "papaparse";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  Box,
  Typography,
  Paper,
  Divider,
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

export default function Dashboard() {
  const [date, setDate] = React.useState(null);
  const [cleared, setCleared] = React.useState(false);
  const [rowsByDate, setRowsByDate] = React.useState({});
  const [allowedDates, setAllowedDates] = React.useState([]);
  const [error, setError] = React.useState(null);

  // Load available files from index.json
  React.useEffect(() => {
    fetch("/task/index.json")
      .then((res) => res.json())
      .then((files) => {
        if (!files || files.length === 0) {
          setError("No task files found.");
          return;
        }

        // Convert filenames into YYYY-MM-DD format
        const dates = files.map((file) => {
          const [day, month, year] = file.replace(".csv", "").split("-");
          return `${year}-${month}-${day}`; // 2025-09-22
        });

        setAllowedDates(dates);

        // Preload CSV data for each file
        files.forEach((file, idx) => {
          const [day, month, year] = file.replace(".csv", "").split("-");
          const dateKey = `${year}-${month}-${day}`;

          Papa.parse(`/task/${file}`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
              if (!result.data || result.data.length === 0) return;

              const rows = result.data.map((row, i) => ({
                id: i + 1,
                TeamMembers: row.TeamMembers,
                DraftTask: Number(row.DraftTask),
                Ready_To_Deploy: Number(row.Ready_To_Deploy),
                Complete: Number(row.Complete),
                Blocked: Number(row.Blocked),
              }));

              setRowsByDate((prev) => ({ ...prev, [dateKey]: rows }));
            },
            error: (err) => {
              setError("Failed to load " + file + ": " + err.message);
            },
          });
        });
      })
      .catch((err) => {
        setError("Failed to load file list: " + err.message);
      });
  }, []);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => setCleared(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [cleared]);

  const shouldDisableDate = (day) => {
    const formatted = day.format("YYYY-MM-DD");
    return !allowedDates.includes(formatted);
  };

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
                helperText:
                  allowedDates.length > 0
                    ? `Available dates: ${allowedDates.join(", ")}`
                    : "No available dates yet",
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

        {error && (
          <Alert severity="error" sx={{ mb: 3, width: "fit-content" }}>
            {error}
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
          !error && (
            <Alert severity="info">Please select a date to view data.</Alert>
          )
        )}
      </Box>
    </LocalizationProvider>
  );
}
