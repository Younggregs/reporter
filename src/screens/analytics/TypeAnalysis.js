import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button1 from '../../components/Button'
import PieChart from '../../components/PieChart'
import Button from '@material-ui/core/Button'
import DashboardNavbar from '../../partials/DashboardNavbar'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import '../../styles/Home.css'
import typeAggregate from '../../promises/TypeAggregate';
import typeAggregateSort from '../../promises/TypeAggregateSort';
import prepDate from '../../promises/PrepDate'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgb(224, 245, 228)'
  },
  editView:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 5
  },
  msgView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    margin: 5
  },
  signatureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    padding: 10,
    margin: 10, 
    textAlign: 'center'
  },
  linkStyle: {
      padding: 5,
      fontSize: 12,
  },
  titleCase: {
    textTransform: 'capitalize'
  },
  formField: {
    background: '#FFFFF9',
    margin: 10,
    padding: 5,
    borderRadius: 5
  },
  layer: {
      background: 'rgb(224, 245, 228)', 
      border: '1px solid green', 
      width: 400, 
      borderRadius: 5, 
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 5, 
    fontSize: 20,
    color:  '#000',
  },
  linkText: {
    padding: 5, 
    fontSize: 15,
    fontWeight: 'bold',
    color:  'green',
    lineHeight: 0.5
  },
}));

export default function TypeAnalysis(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [errorA, setErrorA] = useState('')
    const [list, setList] = useState({});
    const [check, setCheck] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [openb, setOpenb] = React.useState(true);
    const [endDate, setEndDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(new Date());

    const handleClick = () => {
        setOpenb(!openb);
    };

    const handleDateChangeStart = (date) => {
      setStartDate(date);
    };

    const handleDateChangeEnd = (date) => {
      setEndDate(date);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const fetchGuides = async () => {
  
      const res = await typeAggregate()
      setCheck(false)
    
      if(res){
        if(res.error_message){
          setErrorA(res.error_message)
        }else{
          setList(res)
        }
        
     }else{
      setError('')
     }
      
    }

    if(check){
      fetchGuides()
    }
    
    const handleSave = async() => {
  
    if (canSave) {

        setError('')
        setList([])
        const res = await typeAggregateSort(prepDate(startDate), prepDate(endDate))
        if(res){
            if(res.error_message){
              setError(res.error_message)
            }else{
              setList(res)
              setOpen(false)
            }
            
        }else{
          setError('Oops something broke, refresh and try again')
        }

    }else{
      setError('All required fields must be filled')
    }
  
  }

  const canSave = [startDate, endDate].every(Boolean)

  return (
    <div>
        
        <DashboardNavbar title={`Report Type Analysis`}/> 

        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h5 style={{textAlign: 'center', margin: 10}}>Report Type Analytics</h5>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        
        <Grid style={{width: 300, height: '100%'}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpen} style={{width: 250}} title="Sort by Date"/>
          <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="form-dialog-edit">
            <DialogTitle id="form-dialog-title">Sort Report Type By Date</DialogTitle>
            <DialogContent className={classes.root}>
            <DialogContentText>
                Sort by Date
            </DialogContentText>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid className={classes.formField}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="start_date"
                  label="Start Date"
                  value={startDate}
                  onChange={handleDateChangeStart}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid className={classes.formField}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="end_date"
                  label="End Date"
                  value={endDate}
                  onChange={handleDateChangeEnd}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <p style={{color: '#ff0000'}}>{error}</p>

          </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => handleSave()} disabled={!canSave} color="primary">
                Submit
            </Button>
        </DialogActions>
        </Dialog>
        </Grid>
        </Grid>

        <Grid>
          <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>Report Types (2)</h4>
            <h5 style={{textAlign: 'center', margin: 10, cursor: 'pointer'}} onClick={handleClick}> {openb ? <div> Collapse List <ExpandLess /> </div> : <div> Show List <ExpandMore /></div>} </h5>
          </Box> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{errorA}</p>
          </Grid>

          <Collapse in={openb} timeout="auto" unmountOnExit>
            <Grid container direction="column" justify="center" alignItems="center">

              <Paper className="col-md-4" elevation={3} square style={{marginBottom: 10, borderBottom: '10px solid green'}}>
                <Grid container direction="column">
                    <p className={classes.name}>{`Positive`}</p>
                    <p className={classes.linkText}>Number of Reports = <span className={classes.name}>{list.positive}</span></p>
                </Grid>
              </Paper>
              <Paper className="col-md-4" elevation={3} square style={{marginBottom: 10, borderBottom: '10px solid green'}}>
                <Grid container direction="column">
                  <p className={classes.name}>{`Negative`}</p>
                  <p className={classes.linkText}>Number of Reports = <span className={classes.name}>{list.negative}</span></p>
                </Grid>
              </Paper>

            </Grid>
          </Collapse>
        
        </Grid>

        <br />
        <div style={{ border: '1px solid green', marginBottom: 25}} />
        
        <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>Pie Chart</h4>
        </Box> 

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid className="col-md-6">
            <PieChart data={list} />
          </Grid>
        </Grid>
        
    </div>
  );
}