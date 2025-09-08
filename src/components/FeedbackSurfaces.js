import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  Stack,
  Backdrop,
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Paper,
  TextField,
  Rating,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import BasicTable from "./Table"; // ✅ keep this if you have Table.js
import Snackbar from '@mui/material/Snackbar';
import { columnGap } from "@mui/system";
import Skeleton from '@mui/material/Skeleton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

export default function FeedbackPage() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [alert, setAlert] = useState(null);
  const [overallRating, setOverallRating] = useState(0);
  const [recommend, setRecommend] = useState("");
  const [improvement, setImprovement] = useState("");
 const [openn, setOpenn] = useState(false); 

  const handleClickk = () => setOpenn(true);
  const handleClosee = () => setOpenn(false);

   const [opened, setOpened] = React.useState(false);

 const handleClickOpen = () => setOpened(true);
  const handleClosed = () => setOpened(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const [comment, setComment] = useState("");
  const [alertType, setAlertType] = useState(null);

  const handleSubmit = () => {
    if (comment.trim() === "") {
      setAlertType("warning");
    } else {
      setAlertType("success");
      console.log("Feedback submitted:", comment);
      setComment(""); // clear input
    }
  };

  const handleSubmitt = () => {
    if (!overallRating || !recommend || !improvement) {
      setAlert(<Alert severity="warning">⚠️ Please fill all sections!</Alert>);
    } else {
      setAlert(<Alert severity="success">✅ Thank you! Your Experience has been submitted.</Alert>);
      setOverallRating(0);
      setRecommend("");
      setImprovement("");
    }
  };
  // Show loader first
  if (loading) {
    return (
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >

        <CircularProgress size="4rem" />
      </Stack>
    );
  }



  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" style={{marginBottom:'10px'}}>
        We value your feedback 💬
      </Typography>
        <Divider />

<Box sx={{ mt: 2 }}> 
      <React.Fragment >
      <Button variant="outlined" onClick={handleClickOpen}>
         Open  Feedback Alert
      </Button>
      <Dialog
        open={opened}
        onClose={handleClosed}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Team Task Overview"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Before submitting your feedback, you can review the team’s task status. 
        Check which tasks are in draft, ready to deploy, completed, or blocked. 
        This helps you provide more informed feedback about team collaboration 
        and performance.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosed}>Cancel</Button>
          <Button onClick={handleClosed} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </Box>
      <Stack spacing={3} my={2}>
        {alertType === "success" && (
          <Alert severity="success">✅ Your feedback has been submitted!</Alert>
        )}
        {alertType === "warning" && (
          <Alert severity="warning">⚠️ You didn’t give your feedback.</Alert>
        )}

        {/* Comment box */}
        <Paper elevation={3} sx={{ bgcolor: "#f9f9f9", borderRadius: 3 }}>
          <TextField
            label="What We Can Improve?"
            multiline
            rows={10}
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ bgcolor: "#e8f0fe" }}
          />
        </Paper>

        {/* Submit button */}
        <Button
          variant="contained"
    onClick={() => {
    handleSubmit();
  }}
          sx={{
            width: "15%",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#154bc0ff" },
            borderRadius: 2,
            px: 1.5,
            py: 1.5
          }}
        >
          Submit Feedback
        </Button>
      </Stack>

<Stack spacing={2}  >
  
<Box style={{ marginTop: '60px' ,marginBottom:'10px'}}>  <Typography variant="h5" gutterBottom >Team Members Task Status</Typography>     <Divider />
        </Box>
<Typography variant="body">You can view each team member’s task status before submitting your feedback by pressing the button below.</Typography>

      <Button onClick={() => {
    handleOpen();
    handleClickk();
  }} 
  sx={{color:"white",
            width: "15%",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#154bc0ff" },
            borderRadius: 2,
            px: 1.5,
            py: 1.5
          }}>
        View Team Tasks
      </Button>
      <Backdrop
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "30px",
            paddingBottom: "20px",
            marginTop: "30px",
            backgroundColor: "white",

            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3> Team Stack</h3>
          <div
            style={{
              marginTop: "-10px",
              height: "1px",
              backgroundColor: "#191a1c2f",
              marginBottom: "15px",
              width: "100%"
            }}
          ></div>
          <BasicTable />
        </div>
      </Backdrop>
</Stack>
      {/* Example card */}

<Box style={{ marginTop: '60px' ,marginBottom:'30px'}}>  <Typography variant="h5" gutterBottom >Other's Team Members Feedback</Typography>     <Divider />
        </Box>
   
      <Stack direction="row" spacing={2}>
       
      <Card sx={{ maxWidth: 345, mt: 3 }}>
        <Skeleton variant="rectangular" width={'100%'} height={150} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vivekananda
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
        I think our project is going well. I am happy with the collaboration within the team, but I feel we can improve our task tracking so nothing gets delayed. Personally, I am learning a lot and want to contribute more to optimize our development process
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Comment</Button>
        </CardActions>
      </Card>
<Card sx={{ maxWidth: 345, mt: 3 }}>
  <Skeleton variant="rectangular" width={'100%'} height={150} />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Praneeth
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
         I am satisfied with how the team is performing. Everyone is supportive, and the tasks are clear. I believe we can improve by sharing knowledge more openly, especially for new members.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Comment</Button>
        </CardActions>
      </Card><Card sx={{ maxWidth: 345, mt: 3 }}>
       <Skeleton variant="rectangular" width={'100%'} height={150} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Srini
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
           Managing multiple tasks has been challenging, but I enjoy working on complex problems. I think the team could benefit from more planning upfront to avoid last-minute rushes.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Comment</Button>
        </CardActions>
      </Card>
      <Typography>....others</Typography>
      </Stack>




 <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openn}
        onClose={handleClosee}
        message="Here Our Team Task Info"
        autoHideDuration={3000} // optional: auto hide after 3 seconds
      />



      
        <Box style={{ marginTop: '60px' }}>  <Typography variant="h5" gutterBottom >Share your experience</Typography>     <Divider />
        </Box>
      <div style={{ width: "100%", marginTop: "20px " }}>

        {/* Accordion 1: Overall Experience */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Overall Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Rating
              value={overallRating}
              onChange={(e, newValue) => setOverallRating(newValue)}
              size="large"
            />
            <Typography variant="body2">Rate your overall experience with our service.</Typography>
          </AccordionDetails>
        </Accordion>



        {/* Accordion 3: Would You Recommend? */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Recommendation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              value={recommend}
              onChange={(e) => setRecommend(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <Typography variant="body2">Would you recommend us to others?</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 4: Suggestions */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Suggestions for Improvement</Typography>
            
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Your suggestions"
              multiline
              fullWidth
              rows={4}
              value={improvement}
              onChange={(e) => setImprovement(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>

        <div style={{ marginTop: "15px" }}>
          <Button variant="contained" color="primary" onClick={handleSubmitt}>
            Submit
          </Button>
        </div>

        {alert && <div style={{ marginTop: "10px" }}>{alert}</div>}
      </div>



    </div>
  );
}



