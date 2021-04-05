import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReportItem from '../../blocks/ReportItem'
import Button1 from '../../components/Button'
import Button from '@material-ui/core/Button'
import superUserSort from '../../promises/SuperuserSort'
import setDate from '../../promises/SetDate'
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
import '../../styles/Home.css'
import reportAggregate from '../../promises/ReportAggregate';
import locationList from '../../promises/LocationList'
import categoryList from '../../promises/CategoryList'
import impactList from '../../promises/ImpactList'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

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

export default function UserAnalysis(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [errorA, setErrorA] = useState('')
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [locations, setLocations] = React.useState([])
    const [location, setLocation] = React.useState(999)
    const [openb, setOpenb] = React.useState(true);
    const [categories, setCategories] = React.useState([]);
    const [impacts, setImpacts] = React.useState([]);
    const [category, setCategory] = React.useState(999);
    const [impact, setImpact] = useState(999);
    const [selectedDate, setSelectedDate] = React.useState(999);
    const [type, setType] = useState(999)

    const handleClick = () => {
        setOpenb(!openb);
    };

    const handleChangeDate = (event) => {
      setSelectedDate(event.target.value);
    };

    const handleChangeType = async (event) => {
      setType(event.target.value);
    };

    const handleChangeLocation = async (event) => {
        setLocation(event.target.value);
    };

    const handleChangeCategory = async (event) => {
      setCategory(event.target.value);
    };

    const handleChangeImpact = async (event) => {
      setImpact(event.target.value);
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
  
      const res = await reportAggregate()
      const locations = await locationList()
      const categories = await categoryList()
      const impacts = await impactList()
      setCheck(false)
      setLocations(locations)
      setCategories(categories)
      setImpacts(impacts)
    
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

      setError('')
      setList([])
      const res = await superUserSort(setDate(selectedDate), location, category, impact, type)
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
  
    }

  return (
    <div>
        
        <DashboardNavbar title={`Report Analysis`}/> 

        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h5 style={{textAlign: 'center', margin: 10}}>Report Aggregate Analysis</h5>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        <Grid style={{width: 300, height: '100%'}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpen} style={{width: 250}} title="Sort Reports"/>
            <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="form-dialog-edit">
              <DialogTitle id="form-dialog-title">Sort Reports</DialogTitle>
              <DialogContent className={classes.root}>
                <DialogContentText>
                    Sort Reports
                </DialogContentText>

                  <Grid className={classes.formField}>
                    <FormControl className={classes.formControl}>
                      <InputLabel required id="from">Select Duration</InputLabel>
                      <Select
                        labelId="selectedDate"
                        id="selectedDate"
                        style={{minWidth: 300}}
                        required
                        value={selectedDate}
                        onChange={handleChangeDate}
                      >
                        <MenuItem key={0} value={1}>Today</MenuItem>
                        <MenuItem key={7} value={7}>Last 7 days</MenuItem>
                        <MenuItem key={14} value={14}>Last 14 days</MenuItem>
                        <MenuItem key={30} value={30}>Last month</MenuItem>
                        <MenuItem key={60} value={60}>Last 2 months</MenuItem>
                        <MenuItem key={90} value={90}>Last 3 month</MenuItem>
                        <MenuItem key={180} value={180}>Last 6 months</MenuItem>
                        <MenuItem key={360} value={360}>Last Year</MenuItem>
                        <MenuItem key={999} value={999}>All</MenuItem>
                      </Select>
                  </FormControl>
                  </Grid>

                  <Grid className={classes.formField}>
                    <FormControl className={classes.formControl}>
                      <InputLabel required id="from">Report Type</InputLabel>
                      <Select
                        labelId="types"
                        id="types"
                        style={{minWidth: 300}}
                        required
                        value={type}
                        onChange={handleChangeType}
                      >
                        <MenuItem key={0} value={1}>{`Positive`}</MenuItem>
                        <MenuItem key={1} value={2}>{`Negative`}</MenuItem>
                        <MenuItem key={999} value={999}>{`All`}</MenuItem>
                      </Select>
                  </FormControl>
                  </Grid>

                <Grid className={classes.formField}>
                  {locations.length <= '0' ? (
                    <p>Fetching Report Locations... </p>
                  ) : (
                    <FormControl className={classes.formControl}>
                      <InputLabel required id="from">Report Locations</InputLabel>
                      <Select
                        labelId="locations"
                        id="locations"
                        style={{minWidth: 300}}
                        required
                        value={location}
                        onChange={handleChangeLocation}
                      >
                      {locations.map(item =>
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      )}
                        <MenuItem key={999} value={999}>All</MenuItem>
                      </Select>
                  </FormControl>
                  )}
                </Grid>


                <Grid className={classes.formField}>
                  {categories.length <= '0' ? (
                    <p>Fetching Incident Category... </p>
                  ) : (
                    <FormControl className={classes.formControl}>
                    <InputLabel required id="from">Incident Category</InputLabel>
                    <Select
                      labelId="categories"
                      id="categories"
                      style={{minWidth: 300}}
                      required
                      value={category}
                      onChange={handleChangeCategory}
                    >
                    {categories.map(item =>
                      <MenuItem key={item.id} value={item.id} className={classes.titleCase}><span className={classes.titleCase}>{item.name}</span></MenuItem>
                    )}
                      <MenuItem key={999} value={999}>All</MenuItem>
                    </Select>
                </FormControl>
                  )}
                
                </Grid>

                <Grid className={classes.formField}>
                  {impacts.length <= '0' ? (
                      <p>Fetching Impacts... </p>
                    ) : (
                      <FormControl className={classes.formControl}>
                        <InputLabel required id="from">Impact</InputLabel>
                        <Select
                          labelId="impacts"
                          id="impacts"
                          style={{minWidth: 300}}
                          required
                          value={impact}
                          onChange={handleChangeImpact}
                        >
                        {impacts.map(item =>
                          <MenuItem key={item.id} value={item.id} className={classes.titleCase}><span className={classes.titleCase}>{item.name}</span></MenuItem>
                        )}
                          <MenuItem key={999} value={999}>All</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                </Grid>

                <p style={{color: '#ff0000'}}>{error}</p>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleSave()} color="primary">
                    Submit
                </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        </Grid>

        <Grid>
          <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>Reports ({list.length})</h4>
            <h5 style={{textAlign: 'center', margin: 10, cursor: 'pointer'}} onClick={handleClick}> {openb ? <div> Collapse List <ExpandLess /> </div> : <div> Show List <ExpandMore /></div>} </h5>
          </Box> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{errorA}</p>
          </Grid>

          <Collapse in={openb} timeout="auto" unmountOnExit>
            {list.map(item =>
                <Grid container direction="column" justify="center" alignItems="center">
                    <ReportItem item={item}/>
                </Grid>
            )}
          </Collapse>
        
        </Grid>

        <br />
        <div style={{ border: '1px solid green', marginBottom: 25}} />
        
    </div>
  );
}