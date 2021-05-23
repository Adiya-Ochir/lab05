import React from 'react'
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



const useStyles = makeStyles((theme) => ({
  applol: { 
    backgroundColor: "#AD4AF7",
    height: "150px",
    width: "100%",
    
  },

  titlelol: {
    marginTop: "50px",
    fontSize: '1.4rem',
      '@media (min-width:600px)': {
      fontSize: '1.9rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
      },
  },

  textMadelol: {
      fontSize: '0.5rem',
      '@media (min-width:600px)': {
      fontSize: '0.7rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      },
  },
  menu: {
    backgroundColor: "#48027B",
    height: "50px",
    position: "relative",
    display:"flex",
    
  },

  buttonShapegg: {
    
    color : "#D8B7F1",
    margin: theme.spacing(0),
    
  },
  fitlolButton: {
    position: "relative",
    display:"flex",
    marginTop: "-16px",
    marginRight: "20px",
    justifyContent: "flex-end",
  },
  
  fitlolBox: {
    position: "relative",
    marginLeft : "19%",
    width : "60%",
    height: "20%",
    
  },

  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(0),

  },

  avatarEdit: {
    margin: "5px"
  },
  
  iconVert: {
    marginLeft: "80%",
    marginTop: "-18%",
  },

  titleText: {
    padding: theme.spacing(0),
    marginTop: "5%",
    marginLeft: "-40%",
  }, 

  root: {
    position: "relative",
    maxWidth : "60%",
    margin : "3%",
    marginLeft : "19%"
  },
  
  root1: {

      display: "flex",
      position: "relative",
      maxWidth : "60%",
      margin : "3%",
      marginLeft : "19%",
      backgroundColor: "#A59CA8 "
  },

  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
  },


  content: {
    flex: "1 0 auto",
    backgroundColor: "white"
  },

  playIcon: {
    margin: "10%",
    marginTop : "8%",
  }
}));


const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
 
function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <AppBar className={classes.applol} position="static">
        <Toolbar>
          <Typography className = {classes.titlelol} variant="h6" color = "white" >
          Adiya & Corozan
          </Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Box className = {classes.menu}>
          <Button className = {classes.buttonShapegg}>
              <Typography className = {classes.textMadelol}>
              OVERVIEW
              </Typography>
          </Button>
          <Button className = {classes.buttonShapegg}>
              <Typography className = {classes.textMadelol}>
              FEATURES
              </Typography>
          </Button>
          <Button className = {classes.buttonShapegg}>
              <Typography className = {classes.textMadelol}>
              DETAILS
              </Typography>
          </Button>
          <Button className = {classes.buttonShapegg}>
              <Typography className = {classes.textMadelol}>
              TECHNOLOGY
              </Typography>
          </Button>
          <Button className = {classes.buttonShapegg}>
                <Typography className = {classes.textMadelol}>
                FAQ
                </Typography>
          </Button >
          </Box>
          
      </Box>
          <Box className = {classes.fitlolButton}>
          <Fab size="small" color = "primary" edge="start">
            <AddIcon />
          </Fab>
      </Box >
    
      <Card className={classes.root1}>
            <Fab className = {classes.playIcon}>
              <PlayArrowIcon />
            </Fab>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Features
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {message}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" color="primary">
          READ OUR FEATURES
        </Button>
        
      </CardActions>
      </div>
    </Card>
      

      
        <Box className ={classes.fitlolBox} border = {1} borderRadius={16} boxShadow = "0 5px 7px 2px rgba(147, 7, 188 , .3)">

            <Typography variant = "h4" className = {classes.titleText}>Details</Typography><br></br>
            
                <IconButton className = {classes.iconVert}>
                  <MoreVertIcon />
                </IconButton>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit} >W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit} >W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit} >W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Box>
    
          
          <Box className = {classes.fitlolButton}>
              <Button variant = "contained" color = "primary">
                  View Source
              </Button>
          </Box >
      

    </div>
  );
}

export default App;
