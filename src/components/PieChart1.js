import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, Grid, Divider, Paper } from "@mui/material";

function EmployeeWorkloadPieChart() {
  const employeeTasks = [
    { id: 0, value: 120, label: "Draft", color: "#0059fedc" },
    { id: 1, value: 55, label: "Work In Progress", color: "#FFBB28" },
    { id: 2, value: 20, label: "Pending For Review", color: "#991199ff" },
    { id: 3, value: 45, label: "Completed", color: "#00C49F" },
    { id: 4, value: 10, label: "Blocked", color: "#ff4242ff" },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#f4f6f8", minHeight: "100vh" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          📊 Employee Workload Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A visual breakdown of employee tasks across different statuses,
          displayed in both Pie and Donut formats.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: "100%" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              🥧 Pie Chart - Workload Distribution
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Proportion of tasks across statuses.
            </Typography>

            <PieChart
              series={[
                {
                  data: employeeTasks,
                  arcLabel: "value",
                  highlightScope: { fade: "global", highlight: "item" },
                },
              ]}
              width={400}
              height={300}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: "100%" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              🍩 Donut Chart - Workload Distribution
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Same data shown in a donut format.
            </Typography>

            <PieChart
              series={[
                {
                  data: employeeTasks,
                  arcLabel: "value",
                  innerRadius: 70,
                  outerRadius: 130,
                  highlightScope: { fade: "global", highlight: "item" },
                },
              ]}
              width={400}
              height={300}
            />
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 9 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          📌 Quick Stats
        </Typography>
        <Grid container spacing={2}>
          {employeeTasks.map((task) => (
            <Grid item xs={6} sm={4} md={2} key={task.id}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  bgcolor: "#ffffff",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: task.color }}
                >
                  {task.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default EmployeeWorkloadPieChart;
