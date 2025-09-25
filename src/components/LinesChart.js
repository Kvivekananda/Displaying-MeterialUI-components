import * as React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { LineChart } from "@mui/x-charts";

// ✅ Example Employee Task Progress Data
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const employeeProgress = {
  Vivekananda: [5, 8, 10, 12, 15, 18, 20],
  Harry: [4, 6, 7, 9, 11, 14, 16],
  Jack: [3, 5, 8, 10, 13, 15, 18],
};

function LinesChart() {
  return (
    <div>

      <Box
        sx={{
          p: 4,
          bgcolor: "#f5f5f5",
          mb: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          📈 Employee Trends - Line Charts
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Line charts help track progress, trends, and comparisons of employee
          performance.
        </Typography>
      </Box>

      <Box sx={{ p: 4, minHeight: "100vh" }}>
        {/* Chart 1: Overall Task Completion Trend */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Team Task Completion Over Time
            </Typography>
            <LineChart
              xAxis={[{ data: months, scaleType: "point" }]}
              series={[
                { data: employeeProgress.Vivekananda, label: "Vivekananda" },
                { data: employeeProgress.Harry, label: "Harry" },
                { data: employeeProgress.Jack, label: "Jack" },
              ]}
              height={300}
            />
          </CardContent>
        </Card>

        {/* Chart 2: Productivity Patterns */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Productivity Comparison (Curve Styles)
            </Typography>
            <LineChart
              xAxis={[{ data: months, scaleType: "point" }]}
              series={[
                {
                  curve: "monotoneX",
                  data: [5, 6, 7, 8, 10, 12, 14],
                  label: "Team Avg",
                },
                {
                  curve: "step",
                  data: [3, 5, 6, 7, 9, 10, 12],
                  label: "Harry",
                },
                {
                  curve: "bump",
                  data: [4, 5, 8, 10, 11, 13, 15],
                  label: "Jack",
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>

        {/* Chart 3: Workload Fluctuation */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Workload Fluctuation (Positive vs Negative Tasks)
            </Typography>
            <LineChart
              xAxis={[{ data: months, scaleType: "point" }]}
              series={[
                {
                  data: [5, -3, 6, -4, 8, -2, 10],
                  label: "Task Changes",
                  area: true,
                  baseline: "zero",
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default LinesChart;
