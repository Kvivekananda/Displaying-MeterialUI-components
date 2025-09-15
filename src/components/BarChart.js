import * as React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from '@mui/material/Stack';


const employeeTasks = [
  { id: 1, TeamMembers: "Vivekananda", DraftTask: 5, Ready_To_Deploy: 8, Complete: 5, Blocked: 4 },
  { id: 2, TeamMembers: "Pavan", DraftTask: 6, Ready_To_Deploy: 8, Complete: 5, Blocked: 1 },
  { id: 3, TeamMembers: "Srini", DraftTask: 8, Ready_To_Deploy: 8, Complete: 1, Blocked: 3 },
  { id: 4, TeamMembers: "Praneeth", DraftTask: 4, Ready_To_Deploy: 8, Complete: 2, Blocked: 2 },
  { id: 5, TeamMembers: "Ravi", DraftTask: 7, Ready_To_Deploy: 8, Complete: 5, Blocked: 3 },
  { id: 6, TeamMembers: "Nikhil", DraftTask: 5, Ready_To_Deploy: 5, Complete: 4, Blocked: 1 },
  { id: 7, TeamMembers: "Bala", DraftTask: 6, Ready_To_Deploy: 4, Complete: 5, Blocked: 3 },
];

const totals = employeeTasks.reduce(
  (acc, curr) => {
    acc.DraftTask += curr.DraftTask;
    acc.Ready_To_Deploy += curr.Ready_To_Deploy;
    acc.Complete += curr.Complete;
    acc.Blocked += curr.Blocked;
    return acc;
  },
  { DraftTask: 0, Ready_To_Deploy: 0, Complete: 0, Blocked:0 }
);







  const dataset = [
    { department: "Engineering" },
    { department: "HR" },
    { department: "Marketing" },
    { department: "Sales" },
    { department: "Finance"},
    { department: "Cloud"},
  ];
  const male = [
 60,50,44,98,65,24
];

const female = [
 45,54,87,65,50,19
];

const numberFormatter = Intl.NumberFormat('en-US', {
  useGrouping: true,
});
const numberWithSuffixFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});
const valueFormatter = (population) =>
  population ? `${numberFormatter.format(Math.abs(population))}` : '';






export default function EmployeeDashboard() {
  return (
    <div>
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
          Charts - Bars
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bar charts express quantities through a bar's length, using a common
          baseline.
        </Typography>
      </Box>
    <Box sx={{ p: 4,  minHeight: "100vh" }}>

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        📊 Employee Task Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Overview of task distribution across team members
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6">Draft Tasks</Typography>
              <Typography variant="h4" fontWeight="bold">{totals.DraftTask}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#fff3e0" }}>
            <CardContent>
              <Typography variant="h6">Ready to Deploy</Typography>
              <Typography variant="h4" fontWeight="bold">{totals.Ready_To_Deploy}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#adeeb2ff" }}>
            <CardContent>
              <Typography variant="h6">Completed</Typography>
              <Typography variant="h4" fontWeight="bold">{totals.Complete}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#eda3aeff" }}>
            <CardContent>
              <Typography variant="h6">Blocked</Typography>
              <Typography variant="h4" fontWeight="bold">{totals.Blocked}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Team Member Task Distribution
          </Typography>
          <BarChart
            dataset={employeeTasks}
            xAxis={[{ dataKey: "TeamMembers" }]}
            series={[
              { dataKey: "DraftTask", label: "Draft" },
              { dataKey: "Ready_To_Deploy", label: "Ready To Deploy" },
              { dataKey: "Complete", label: "Completed" },
              { dataKey: "Blocked", label: "Blocked" },
            ]}
            height={400}
          />
        </CardContent>
      </Card>
    


<Box sx={{ p: 3,my:12 }}>
  <Box sx={{mb:5}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Employee Distribution by Department (Male vs Female)
      </Typography>
       <Typography variant="body1" color="text.secondary" gutterBottom>
        Below shows Pyramid BarChart Of Male and Female of Each Department</Typography>
        </Box>
 <Card>
   <CardContent>
    
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "department" }]}
        series={[
          {  data: male.map((population) => -population),
            label: 'Male',
            type: 'bar',
            valueFormatter,},
          {  data: female,
            label: 'Female',
            type: 'bar',
            valueFormatter,},
        ]}
        layout="horizontal"
         xAxis={[
          {
            valueFormatter: (population) =>
              numberWithSuffixFormatter.format(Math.abs(population)),
            disableLine: true,
            disableTicks: true,
            domainLimit(min, max) {
              const extremum = Math.max(-min, max);
              const roundedExtremum = Math.ceil(extremum / 10_0) * 10_0;
              return { min: -roundedExtremum, max: roundedExtremum };
            },
            label: "Number of Employees"
          },
        ]}
        grid={{ vertical: true }}
       
        height={400}
        margin={{ left: 0, right: 0 }}
      />
      </CardContent>
      </Card>
    </Box>


    </Box>


   
    </div>
  );
}











