import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Paper from '@material-ui/core/Paper';
import { ReactComponent as Pen } from '../assets/svg/Pen.svg';
import { ReactComponent as Bin } from '../assets/svg/Bin.svg';
import TextField from '@material-ui/core/TextField'
import editGuide from '../promises/EditGuide'
import deleteGuide from '../promises/DeleteGuide'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linksView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  links: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    lineHeight: 0.5,
    background: '#FFFFF9',
    width: 300,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    display: 'flex'
  },
  linkText: {
    padding: 5, 
    fontSize: 15,
    fontWeight: 'bold',
    color:  '#000',
  },
  linkTextColored: {
    padding: 5, 
    fontSize: 15,
    fontWeight: 'bold',
    color:  'green',
  },
  iconButton: {
    height: 35,
    width: 35,
    margin: 2,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex'
  },
  avatar: {
    backgroundColor: 'white',
    colore: 'white',
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    margin: 10, 
    display: 'flex',
    flexDirection: 'column'
  },
  formField: {
    margin: 5
  },
  signatureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: '100%',
    padding: 10,
    margin: 10, 
    textAlign: 'center'
  },
  logoI: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 23
  },
  logoII: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 23
  },
  linkStyle: {
      padding: 5,
      fontSize: 12,
  },
  text: {
    fontWeight: 'normal',
    padding: 5, 
    fontSize: 15,
    color:  '#000',
    lineHeight: 1.5
  },
  dateText: {
    fontWeight: 'bold',
    padding: 5, 
    fontSize: 15,
    fontStyle: 'italic',
    color:  '#000',
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 5, 
    fontSize: 20,
    color:  '#000',
  },
  moreStyle: {
    fontSize: 15,
    fontStyle: 'italic',
    fontColor: 'gray',
    fontWeight: 'bold',
  }
}));

export default function ReportItem(props) {
  const classes = useStyles();

  const [guide, setGuide] = useState(props.item.guide);
  const [ttc, setTtc] = useState(props.item.total_travel_cost);
  const [ttt, setTtt] = useState(props.item.total_travel_time);
  const [openalert, setOpenalert] = useState(false);
  const [openedit, setOpenedit] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [alertmsg, setAlertmsg] = useState();
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const [brick, setBrick] = useState({});
  const [readMore, setReadMore]=useState(false);
  const [readMoreB, setReadMoreB]=useState(false);


  const convertdate = (date) => {
    var d = new Date(date)
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var day = d.getDate()
    var dt = year + '-' + month + '-' + day

    var hour = d.getHours()
    var minute = d.getMinutes()
    
    var time = hour + '.' + minute

    var res = time + ' ' + dt

    return res.toString()
  }


  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenalert(false);
  };


  const handleClickOpenEdit = () => {
    setOpenedit(true);
  };

  const handleCloseEdit = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenedit(false);
  };


  const handleClickOpenDelete = () => {
    setOpendelete(true);
  };

  const handleCloseDelete = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpendelete(false);
  };

  const handleChangeGuide = (event) => {
    setGuide(event.target.value);
  };

  const handleChangeTtc = (event) => {
    setTtc(event.target.value);
  };

  const handleChangeTtt = (event) => {
    setTtt(event.target.value);
  };



const handleEdit = async (id) => {

  setOpenedit(false)
  setOpenalert(true)
  setAlertmsg('Submitting Guide')

  const message = await editGuide(id, guide, ttc, ttt)
  setOpenalert(true)
  if(message.error_message){
    setAlertmsg(message.error_message)
  }else{
    setEdited(true);
    setBrick(message);
    setAlertmsg('Guide edited succesfully')
    //setLink(message)
  }
        
}

const handleDelete = async (id) => {

  setOpendelete(false)
  setOpenalert(true)
  setAlertmsg('Deleting Guide')

  const message = await deleteGuide(id)

  setOpenalert(true)
  if(message.error_message){
    setAlertmsg(message.error_message)
  }else{
    setDeleted(true)
    setAlertmsg('Guide deleted succesfully')
  }

}


  const trimText = (text) => {
    var t = text
    if(text.length <= '99'){
    }else{
      t = text.slice(0, 99) + '... ' 
    }

    return t
  } 

  const linkName= readMore?'Less':'Read More '
  const linkNameB= readMoreB?'Less':'Read More '





return (
    <div className={classes.root}>

        <Paper elevation={3} square style={{marginBottom: 10, borderBottom: '10px solid green'}}>
        {deleted ? (
            <Grid />
        ) : (
        <Grid>
            {edited ? (
                <Grid className={classes.linksView}>
                <Grid className={classes.links}>
                
                <Grid className={classes.linkText}>
                    <p>Reporter: {props.item.reporter_name}</p>
                    <p>Vehicle: {props.item.vehicle}</p>
                </Grid>
                <Grid className={classes.iconButton}>
                <Button onClick={handleClickOpenEdit}>
                    <Pen />
                </Button>
                  <Dialog fullWidth={true} maxWidth={'sm'} open={openedit} onClose={handleCloseEdit} aria-labelledby="form-dialog-edit">
                      <DialogTitle id="form-dialog-title">Edit Guide</DialogTitle>
                      <DialogContent>
                      <DialogContentText>
                          It's all about the network.
                      </DialogContentText>
    
                      <Grid className={classes.formField}>  
                          <TextField 
                            autoFocus 
                            id="guide" 
                            label="Guide" 
                            multiline        
                            rows={4}
                            cols={100}
                            style={{width: 300}}
                            defaultValue={brick.guide} 
                            onChange={handleChangeGuide} 
                            required fullWidth/>
                      </Grid>

                      <Grid className={classes.formField}>  
                          <TextField id="ttt" label="Total Travel Time" defaultValue={brick.total_travel_time} onChange={handleChangeTtt} required fullWidth/>
                      </Grid>

                      <Grid className={classes.formField}>  
                          <TextField id="ttc" label="Total Travel Cost" defaultValue={brick.total_travel_cost} onChange={handleChangeTtc} required fullWidth/>
                      </Grid>
    
                      </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEdit} color="primary">
                          Cancel
                      </Button>
                      <Button onClick={() => handleEdit(brick.id)} color="primary">
                          Submit
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
                <Grid className={classes.iconButton}>
                <Button onClick={handleClickOpenDelete}>
                      <Bin />
                </Button>
                <Dialog fullWidth={true} maxWidth={'sm'} open={opendelete} onClose={handleCloseDelete} aria-labelledby="form-dialog-delete">
                    <DialogTitle id="form-dialog-title">Are you sure you want to delete this Guide? {brick.name}</DialogTitle>
                    <DialogActions>
                      <Button onClick={handleCloseDelete} color="primary">
                          Cancel
                      </Button>
                      <Button onClick={() => handleDelete(brick.id)} color="primary">
                          Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Grid>

            ): (

            <Grid className={classes.linksView}>
            <Grid className={classes.links}>
            <Grid container direction="column">
                    <p className={classes.name}>{props.item.reporter_name}</p>
                    <p className={classes.dateText}>{convertdate(props.item.report_date)}</p>
                    <br />

                    <p className={classes.linkTextColored}>Report Act</p>
                    <p className={classes.text}>
                      {readMore ? (props.item.report_deed) : (trimText(props.item.report_deed))}
                      <p>{readMore}</p>
                      <span className={classes.moreStyle} onClick={()=>{setReadMore(!readMore)}}>{linkName}</span>
                    </p>

                    <p className={classes.linkTextColored}>Report Description</p>
                    <p className={classes.text}>
                      {readMoreB ? (props.item.incident_description) : (trimText(props.item.incident_description))}
                      <p>{readMoreB}</p>
                      <span className={classes.moreStyle} onClick={()=>{setReadMoreB(!readMoreB)}}>{linkNameB}</span>
                    </p>

                    <br />
                    <div style={{ border: '1px solid green', marginBottom: 25}} />
                    <p className={classes.linkTextColored}>Report Type</p>
                    <p className={classes.text}>{props.item.report_type}</p>
                    <p className={classes.linkTextColored}>Report Location</p>
                    <p className={classes.text}>{props.item.report_location}</p>
                    <p className={classes.linkTextColored}>Report Category</p>
                    <p className={classes.text}>{props.item.incident_category}</p>
                    <p className={classes.linkTextColored}>Report Impact</p>
                    <p className={classes.text}>{props.item.report_impact}</p>
            </Grid>
            {/*
            <Grid className={classes.iconButton}>
            <Button onClick={handleClickOpenEdit}>
                  <Pen />
            </Button>
              <Dialog fullWidth={true} maxWidth={'sm'} open={openedit} onClose={handleCloseEdit} aria-labelledby="form-dialog-edit">
                  <DialogTitle id="form-dialog-title">Edit Guide</DialogTitle>
                  <DialogContent>
                  <DialogContentText>
                      It's all about the network.
                  </DialogContentText>

                  <Grid className={classes.formField}>  
                      <TextField 
                        autoFocus 
                        id="guide" 
                        label="Guide"
                        multiline        
                        rows={4}
                        cols={20}
                        defaultValue={props.item.guide} 
                        onChange={handleChangeGuide} 
                        required 
                        fullWidth/>
                  </Grid>

                  <Grid className={classes.formField}>  
                      <TextField id="ttt" label="Total Travel Time" defaultValue={props.item.total_travel_time} onChange={handleChangeTtt} required fullWidth/>
                  </Grid>

                  <Grid className={classes.formField}>  
                      <TextField id="ttc" label="Total Travel Cost" defaultValue={props.item.total_travel_cost} onChange={handleChangeTtc} required fullWidth/>
                  </Grid>

                  </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseEdit} color="primary">
                      Cancel
                  </Button>
                  <Button onClick={() => handleEdit(props.item.id)} color="primary">
                      Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid className={classes.iconButton}>
            <Button onClick={handleClickOpenDelete}>
                  <Bin />
            </Button>
            <Dialog fullWidth={true} maxWidth={'sm'} open={opendelete} onClose={handleCloseDelete} aria-labelledby="form-dialog-delete">
                <DialogTitle id="form-dialog-title">Are you sure you want to delete this Guide? {props.item.name}</DialogTitle>
                <DialogActions>
                  <Button onClick={handleCloseDelete} color="primary">
                      Cancel
                  </Button>
                  <Button onClick={() => handleDelete(props.item.id)} color="primary">
                      Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            */}
          </Grid>
        </Grid>

            )}
        </Grid>

        )}

        

    </Paper>

      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openalert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          {alertmsg}
        </Alert>
      </Snackbar>
      
    </div>
  );
}