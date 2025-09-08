import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {FormatBold as FormatBoldIcon,FormatItalic as FormatItalicIcon,Navigation as NavigationIcon} from "@mui/icons-material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Rating from '@mui/material/Rating';
import {  Slider  } from "@mui/material";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

function Card({ title, description }) {
    const [Exp, setExp] = React.useState("");

    const handleChange = (event) => {
        setExp(event.target.value);
    };
    const [comment, setComment] = useState("");
    const [formats, setFormats] = useState([]);

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [sliderValue, setSliderValue] = useState(50);
const handleScrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });



    return (
        <div style={{}}>
            <h3>Hii, {title} !</h3>
            <p>{description}</p>
            <div style={{ paddingBottom: '30px' }}>
                <Box sx={{ minWidth: 10 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Experiance Level</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Exp}
                            onChange={handleChange}
                            
                        >
                            <MenuItem value={0}>Fresher</MenuItem>
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>One +</MenuItem>
                            <MenuItem value={5}>Five +</MenuItem>
                            <MenuItem value={10}>Ten +</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <FormControl>
                <Typography variant="h6"
                    sx={{ marginTop: "40px", marginBottom: "-5px", fontWeight: "bold" }}
                >
                    Your Position:
                </Typography>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Full Stack Developer and Cloud Architect" control={<Radio />} label="Full Stack Developer and Cloud Architect" />
                    <FormControlLabel value="Cloud Architect" control={<Radio />} label="Cloud Architect" />
                    <FormControlLabel value="Sr Cloud Architect" control={<Radio />} label="Sr Cloud Architect" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>


            <div>
                <Typography
                    variant="h6"
                    sx={{ marginTop: "40px", marginBottom: "-20px", fontWeight: "bold" }}
                >
                    Please Provide Your Key Skills, {title}:
                </Typography>
                <h3 ></h3>
                <FormGroup >
                    <FormControlLabel control={<Checkbox />} label=" React" />
                    <FormControlLabel control={<Checkbox />} label="NodeJS" />
                    <FormControlLabel control={<Checkbox />} label="AWS" />
                    <FormControlLabel control={<Checkbox />} label="Python" />
                    <FormControlLabel control={<Checkbox />} label="Other" />
                </FormGroup>
            </div>

            {/* Comment */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6"
                    sx={{ marginTop: "40px", marginBottom: "10px", fontWeight: "bold" }}
                >
                    Provide Any Additional Information:
                </Typography>
               
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    InputProps={{
                        style: {
                            fontWeight: formats.includes("bold") ? "bold" : "normal",
                            fontStyle: formats.includes("italic") ? "italic" : "normal",
                        },
                    }}
                />
                <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                    <ToggleButtonGroup
                        value={formats}
                        onChange={(e, newFormats) => setFormats(newFormats)}
                        aria-label="text formatting"
                    ><Typography variant="subtitle1"
                    sx={{ marginTop: "10px", marginBottom: "10px" }}
                >
                   You can update the text to use italic or bold styling for better emphasis  ? 
                </Typography>
                        <ToggleButton value="bold" aria-label="bold">
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <FormatItalicIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>


{/* Rating */}

<Typography variant="h6"
                    sx={{ marginTop: "40px", marginBottom: "10px", fontWeight: "bold" }}
                >
                    Share Your Rating:
                </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <Rating
            name="dashboard-rating"
            value={rating}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(e, newValue) => setRating(newValue)}
            onChangeActive={(e, newHover) => setHover(newHover)}
            size="large"
          />
          <Box sx={{ ml: 2 }}>
            {rating !== null && labels[hover !== -1 ? hover : rating]}
          </Box>
        </Box>

        {/* Slider */}
        <Box sx={{ marginTop: 3, width: 300 }}>
          <Typography gutterBottom>How much value you can give yourself out of 100:</Typography>
          <Slider
            value={sliderValue}
            onChange={(e, newValue) => setSliderValue(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={100}
          />
          <Typography>Current Value: {sliderValue}</Typography>
        </Box>
        
 <Box >
      <Typography variant="h6"
                    sx={{ marginTop: "40px", marginBottom: "10px", fontWeight: "bold" }}
                >
                    Page Navigation:
                </Typography>
      <ButtonGroup variant="contained"  size="small" aria-label="section navigation">
      
        <Button size="small">   <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                   <h4> DataDisplay Page</h4>
                  </Link>
        </Button>
        <Button size="small"> <Link to="/FeedbackSurfaces" style={{ color: "white", textDecoration: "none" }}>
                    <h4>Feedback</h4>
                  </Link>
        </Button>
      
      </ButtonGroup>
       </Box>



 {/* Floating Button */}
        <Fab
          color="primary"
          variant="extended"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          onClick={handleScrollTop}
        >
          <NavigationIcon sx={{ mr: 1 }} /> Go to Top
        </Fab>
        </div>
    );
}

export default Card;
