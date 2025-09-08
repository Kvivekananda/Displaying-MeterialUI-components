import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// Team and Status data
const team = [
  { name: "Vivekananda", role: "Full Stack Developer", tasks: 3, color: "orange", status: "In Progress" },
  { name: "Pavan", role: "Cloud Architect", tasks: 2, color: "purple", status: "Pending" },
  { name: "Srini", role: "Sr. Cloud Architect", tasks: 3, color: "green", status: "Completed" },
  { name: "Praneeth", role: "Sr. Cloud Architect", tasks: 4, color: "blue", status: "In Progress" },
  { name: "Ravi", role: "Cloud Architect", tasks: 1, color: "red", status: "Completed" },
];

const Status = [
  { name: "Vivekananda", des: 'Current Task status', task: 1, status: "In Progress" },
  { name: "Pavan", des: 'Current Task status', task: 3, status: "Pending" },
  { name: "Srini", des: 'Current Task status', task: 1, status: "Completed" },
  { name: "Praneeth", des: 'Current Task status', task: 3, status: "In Progress" },
  { name: "Ravi", des: 'Current Task status', task: 2, status: "Completed" },
];

// Merge team and Status by name
const mergedData = team.map((member) => {
  const statusInfo = Status.find((s) => s.name === member.name);
  return {
    ...member,
    taskStatus: statusInfo ? statusInfo.status : member.status,
    taskCount: statusInfo ? statusInfo.task : member.tasks,
    taskDescription: statusInfo ? statusInfo.des : "",
    person: `https://ui-avatars.com/api/?name=${member.name}&background=${member.color}&color=fff`
  };
});

// Helper function for status colors
function getStatusColor(status) {
  switch (status) {
    case "In Progress": return "#1976d2"; // Blue
    case "Pending": return "#ff9800"; // Orange
    case "Completed": return "#4caf50"; // Green
    default: return "#9e9e9e"; // Grey
  }
}

export default function TeamDashboard() {
  const [value, setValue] = React.useState(0);

  // Filter data based on tab
  const getFilteredData = () => {
    switch (value) {
      case 0: // Recents -> all
        return mergedData;
      case 1: // Favorites -> Completed
        return mergedData.filter(m => m.taskStatus === "Completed");
      case 2: // Archive -> Pending or In Progress
        return mergedData.filter(m => m.taskStatus === "Pending" || m.taskStatus === "In Progress");
      default:
        return mergedData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <Box sx={{ pb: 7 }}>
      <Typography variant="h5" sx={{ mt: 2, ml: 2 }}>
        Team Dashboard
      </Typography>

      <List>
        {filteredData.map((member, index) => (
          <ListItemButton key={index + member.name}>
            <ListItemAvatar>
              <Avatar alt={member.name} src={member.person} />
            </ListItemAvatar>
            <ListItemText
              primary={`${member.name} - ${member.role}`}
              secondary={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">{member.taskDescription}</Typography>
                  <Chip label={`${member.taskCount} Task(s)`} size="small" color="primary" />
                  <Chip label={member.taskStatus} size="small" 
                    sx={{ backgroundColor: getStatusColor(member.taskStatus), color: "#fff" }}
                  />
                </Stack>
              }
            />
          </ListItemButton>
        ))}
      </List>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Completed" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Pending/In Progress" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
