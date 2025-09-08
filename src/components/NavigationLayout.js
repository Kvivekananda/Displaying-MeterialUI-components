import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {
  Box,
  Breadcrumbs,
  Link,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Paper,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  Container,
} from '@mui/material';
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  FileCopyOutlined as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FixedBottomNavigation from './bottomnavi';
import { useNavigate, useLocation } from "react-router-dom";


// Styled Paper for Cards
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 8,
}));

// SpeedDial Actions
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

// Helper function for ImageList
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function NavigationLayout() {
  // Drawer state
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (state) => () => setOpenDrawer(state);

  // Menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const pageRoutes = ["/", "/about", "/FeedbackSurfaces", "/NavigationLayout"];
  const currentPage = pageRoutes.indexOf(location.pathname) + 1
  const handleChange = (event, value) => {
    navigate(pageRoutes[value - 1]);
  }

  // Drawer List
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: 'Input', path: '/' },
          { text: 'DataDisplay', path: '/about' },
          { text: 'FeedbackSurface', path: '/FeedbackSurfaces' },
          { text: 'NavigationLayout', path: '/NavigationLayout' }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <Divider />
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
      {/* Header */}
      <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
        <Typography variant="h5" fontWeight="bold">
          NAVIGATION
        </Typography>
        <Typography variant="body2" color="text.secondary">
          HERE YOU CAN NAVIGATE THROUGH PAGES
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">Input</Link>
          <Link underline="hover" color="inherit" href="/about">DataDisplay</Link>
          <Link underline="hover" color="inherit" href="/FeedbackSurfaces">FeedbackSurface</Link>
          <Link underline="hover" color="text.primary" aria-current="page">Dashboard</Link>
        </Breadcrumbs>

        <Box>
          <Button onClick={toggleDrawer(true)} sx={{ mr: 2 }}>☰ Menu</Button>
          <Button
            id="dashboard-button"
            aria-controls={openMenu ? 'dashboard-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            Dashboard
          </Button>
          <Menu
            id="dashboard-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* Bottom Navigation */}
      <FixedBottomNavigation />


      {/* Pagination */}
      <Stack spacing={2} sx={{ display: "flex", alignItems: "center", mb: 3 ,marginTop:'60px'}}>
        <Pagination
          count={4}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Stack>

      {/* SpeedDial */}
      <Box sx={{ position: 'fixed', bottom: 80, right: 16 }}>
        <SpeedDial ariaLabel="SpeedDial" icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>

      <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1, marginTop: "100px" }}>
        <Typography variant="h5" fontWeight="bold">
          LAYOUT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          HERE YOU CAN SEE RESPONSIVE LAYOUT OF GRID
        </Typography>
      </Box>
      {/* Main Grid */}
      <Typography variant="h5">Candidate's Feedback</Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>

        <Grid item xs={12} md={4}>

          <Item>
            <Typography variant="h6">Vivekananda</Typography>
            <Typography variant="body2">I think our project is going well. I am happy with the collaboration within the team.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6"> Praneeth</Typography>
            <Typography variant="body2">I am satisfied with how the team is performing.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6"> Srini</Typography>
            <Typography variant="body2"> Managing multiple tasks has been challenging.
            </Typography>
          </Item>
        </Grid>
      </Grid>

      {/* Image Gallery */}
      <Typography variant="h5 " sx={{ mb: 2 }}>Gallery</Typography>
      <ImageList variant="quilted" cols={4} rowHeight={121} sx={{ mb: 3 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>




    </Container>
  );
}

// Sample images
const itemData = [
  { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast', rows: 2, cols: 2 },
  { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger' },
  { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera' },
  { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', cols: 2 },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', cols: 2 },
  { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', title: 'Honey', rows: 2, cols: 2 },
  { img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title: 'Basketball' },
  { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern' },
  { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms', rows: 2, cols: 2 },
  { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', title: 'Tomato basil' },
  { img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', title: 'Sea star' },
  { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Bike', cols: 2 },
];
