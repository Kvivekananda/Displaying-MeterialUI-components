import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

const dataset = [
  { month: "Jan", london: 18, paris: 20, newYork: 25, seoul: 21 },
  { month: "Feb", london: 20, paris: 22, newYork: 27, seoul: 23 },
  { month: "Mar", london: 25, paris: 26, newYork: 30, seoul: 28 },
  { month: "Apr", london: 28, paris: 30, newYork: 35, seoul: 32 },
  { month: "May", london: 30, paris: 32, newYork: 38, seoul: 35 },
  { month: "Jun", london: 32, paris: 34, newYork: 40, seoul: 37 },
  { month: "Jul", london: 33, paris: 35, newYork: 42, seoul: 39 },
  { month: "Aug", london: 31, paris: 33, newYork: 41, seoul: 36 },
  { month: "Sep", london: 28, paris: 30, newYork: 37, seoul: 33 },
  { month: "Oct", london: 24, paris: 26, newYork: 33, seoul: 28 },
  { month: "Nov", london: 20, paris: 22, newYork: 28, seoul: 24 },
  { month: "Dec", london: 18, paris: 20, newYork: 25, seoul: 21 },
];

const valueFormatter = (value) => `${value} mm`;

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60,
    },
  ],
  height: 300,
};

const ageGroups = [
  "100+ yrs",
  "95-99 yrs",
  "90-94 yrs",
  "85-89 yrs",
  "80-84 yrs",
  "75-79 yrs",
  "70-74 yrs",
  "65-69 yrs",
  "60-64 yrs",
  "55-59 yrs",
  "50-54 yrs",
  "45-49 yrs",
  "40-44 yrs",
  "35-39 yrs",
  "30-34 yrs",
  "25-29 yrs",
  "20-24 yrs",
  "15-19 yrs",
  "10-14 yrs",
  "5-9 yrs",
  "0-4 yrs",
];

const male = [
  1139, 8291, 50323, 201240, 476263, 696606, 1012668, 1478069, 2042614, 2068112,
  2258061, 2061862, 2067075, 1808706, 1796779, 1933726, 1620461, 1183580,
  1189663, 1097221, 766227,
];

const female = [
  5770, 36739, 168603, 445118, 762492, 899933, 1152098, 1585781, 2105499,
  2045845, 2231491, 2000130, 1967944, 1673805, 1593655, 1695058, 1484776,
  1104293, 1122176, 1044863, 727814,
];

const numberFormatter = Intl.NumberFormat("en-US", {
  useGrouping: true,
});
const numberWithSuffixFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
});
const valueFormatter1 = (population) =>
  population ? `${numberFormatter.format(Math.abs(population))}` : "";

export default function BarsDataset() {
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
      <div style={{ padding: "30px" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Weather Data Chart
        </Typography>

        <BarChart
          dataset={dataset}
          xAxis={[{ dataKey: "month" }]}
          series={[
            { dataKey: "london", label: "London", valueFormatter },
            { dataKey: "paris", label: "Paris", valueFormatter },
            { dataKey: "newYork", label: "New York", valueFormatter },
            { dataKey: "seoul", label: "Seoul", valueFormatter },
          ]}
          {...chartSetting}
        />
      </div>

      <Stack width="100%" sx={{ mx: [0, 4] }}>
        <Typography variant="h6" component="span" textAlign="center">
          South Korea Population Pyramid - 2022
        </Typography>
        <BarChart
          height={500}
          layout="horizontal"
          margin={{ right: 0, left: 0 }}
          series={[
            {
              data: male.map((population) => -population),
              label: "Male",
              type: "bar",
              valueFormatter1,
              stack: "stack",
            },
            {
              data: female,
              label: "Female",
              type: "bar",
              valueFormatter1,
              stack: "stack",
            },
          ]}
          yAxis={[
            {
              data: ageGroups,
              width: 60,
              disableLine: true,
              disableTicks: true,
            },
          ]}
          xAxis={[
            {
              valueFormatter1: (population) =>
                numberWithSuffixFormatter.format(Math.abs(population)),
              disableLine: true,
              disableTicks: true,
              domainLimit(min, max) {
                const extremum = Math.max(-min, max);
                const roundedExtremum = Math.ceil(extremum / 100_000) * 100_000;
                return { min: -roundedExtremum, max: roundedExtremum };
              },
            },
          ]}
          grid={{ vertical: true }}
        />
        <Typography variant="caption">Source: KOSIS</Typography>
      </Stack>
    </div>
  );
}
