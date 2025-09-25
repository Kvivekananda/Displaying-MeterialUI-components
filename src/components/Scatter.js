import * as React from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import {
  Box,Tooltip,
  Typography,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { rainbowSurgePalette } from "@mui/x-charts/colorPalettes";

function EmployeeScatterDashboard() {
  const theme = useTheme();
  const palette = rainbowSurgePalette(theme.palette.mode);

const data = [
   { x: 5, y: 4, id: "lice" },
  { x: 9, y: 9, id: "Bab" },
  { x: 5, y: 8, id: "Charlie" },
  { x: 5, y: 7, id: "Lie" },
  { x: 7, y: 8, id: "Did" },
  { x: 5, y: 6, id: "Alice" },
  { x: 8, y: 9, id: "Bob" },
  { x: 5, y: 10, id: "Charlie" },
  { x: 3, y: 7, id: "Liam" },
  { x: 2, y: 8, id: "David" },
  { x: 5, y: 7, id: "Eva" },
  { x: 10, y: 12, id: "Frank" },
  { x: 8, y: 11, id: "Grace" },
  { x: 2, y: 10, id: "Hannah" },
  { x: 7, y: 12, id: "Ian" },
  { x: 4, y: 9, id: "Jack" },
  { x: 4, y: 6, id: "Kathy" },
  { x: 6, y: 8, id: "Leo" },
  { x: 7, y: 10, id: "Mia" },
  { x: 6, y: 5, id: "Noah" },
  { x: 10, y: 12, id: "Olivia" },
  { x: 11, y: 15, id: "Paul" },
  { x: 9, y: 8, id: "Quinn" },
  { x: 14, y: 12, id: "Ruby" },
  { x: 8, y: 9, id: "Sam" }
];

  return (
    <Box sx={{ p: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}>
      {/* Dashboard Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        📈 Productivity Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        An overview of employee efficiency based on workload vs time spent.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* KPI Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#e3f2fd", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Employees
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                25
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#e8f5e9", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Avg Tasks / Week
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#fff3e0", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Avg Hours / Task
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="warning.main">
                1.8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#ffebee", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                High Performers
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="error.main">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Scatter Chart Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
         Workload vs Efficiency (Scatter Analysis)
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Each point represents an employee: more tasks in fewer hours indicate
          higher efficiency.
        </Typography>

        <ScatterChart
          width={800}
          height={400}
          series={[
            {
              label: "Employees",
              data: data,
              color: palette[4],
              valueFormatter: (point) => `${point.id}: ${point.x} tasks, ${point.y} hrs`,
            },
          ]}
          xAxis={[{ label: "Tasks Completed" }]}
          yAxis={[{ label: "Hours Worked" }]}
        />
      </Paper>
    </Box>
  );
}

export default EmployeeScatterDashboard;
