import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ComposedChart, XAxis, YAxis, CartesianGrid, Legend, Area, Bar, Line, } from "recharts";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material/utils';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import BasicTable from "./Table";
import { ListItem, ListItemAvatar } from "@mui/material";
import { Person } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function About() {


  const COLORS = ["#fed400ff", "#fe00cfff", "#0034c4ff", "#ff2c28ff", "#42ff68ff"];


  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };


  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );

  const PlusIcon = createSvgIcon(

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  const team = [
    { name: "Vivekananda", role: "Full Stack Developer", tasks: 3, color: "orange", status: " In Progress" },
    { name: "Pavan", role: "Cloud Architect", tasks: 2, color: "purple", status: "Pending" },
    { name: "Srini", role: "Sr. Cloud Architect", tasks: 3, color: "green", status: "Completed" },
    { name: "Praneeth", role: "Sr. Cloud Architect", tasks: 4, color: "blue", status: "In Progress" },
    { name: "Ravi", role: "Cloud Architect", tasks: 1, color: "red", status: "Completed" },
  ];

  const Status = [
    { name: "Vivekananda", des: 'Current Task status', task: 1, status: " In Progress" },
    { name: "Pavan", des: 'Current Task status', task: 3, status: "Pending" },
    { name: "Srini", des: 'Current Task status', task: 1, status: "Completed" },
    { name: "Praneeth", des: 'Current Task status', task: 3, status: "In Progress" },
    { name: "Ravi", des: 'Current Task status', task: 2, status: "Completed" },
  ];


  return (

    <div >
      <div style={{ padding: "20px", backgroundColor: "rgba(180, 176, 176, 0.1)" }}>
        <h1>About Us Page</h1>
        <p>Welcome to our About page! Here's Our team and some analytics. </p>

        <div style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "30px",
          marginTop: "30px",
          backgroundColor: "#ffffffff",
          width: "10orem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}>
          <Typography variant="h5" gutterBottom>
            Team Members Data
          </Typography>
          <Divider />
          <List>
            {team.map((member, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Tooltip title={member.name}>
                    <Avatar sx={{ bgcolor: member.color }}>{member.name[0]}</Avatar>
                  </Tooltip>

                </ListItemAvatar>
                <ListItemText
                  primary={`${member.name} - ${member.role}`}
                  secondary={`Tasks Assigned: ${member.tasks}`}
                />

                <Badge badgeContent={member.tasks} color={member.tasks > 2 ? "error" : "success"} />

              </ListItem>
            ))}

          </List>
        </div>


        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Working Status
        </Typography>
        <Divider />
        <List >
          {Status.map((Status, index) => (
            <ListItem key={index}>
              <Tooltip title={Status.name}>
                <Person color="primary" sx={{ ml: 2, mr: 3 }} />
              </Tooltip>

              <ListItemText
                primary={`${Status.name} - ${Status.des} `}

              />
              <Tooltip title={Status.task}>
                <Chip
                  label={Status.status}

                  color={Status.status === "Completed" ? "success" : Status.status === "In Progress" ? "warning" : "error"}
                  sx={{ ml: 2, mr: 3 }}
                />
              </Tooltip>


            </ListItem>
          ))}

        </List>


        <div style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "30px",
          paddingBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          width: "10orem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}><h3>Table</h3>
          <div
            style={{
              marginTop: "-10px", height: "1px",
              backgroundColor: "#191a1c2f",
              marginBottom: "15px",
              width: "10orem",
            }}
          ></div><BasicTable /></div>

      </div>
    </div>
  );
}

export default About;
