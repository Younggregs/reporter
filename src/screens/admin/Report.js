import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReportItem from '../../blocks/ReportItem'
import Button1 from '../../components/Button'
import Button from '@material-ui/core/Button'
import newReport from '../../promises/NewReport'
import setDate from '../../promises/SetDate'
import reportList from '../../promises/ReportList'
import locationList from '../../promises/LocationList'
import categoryList from '../../promises/CategoryList'
import reportSort from '../../promises/ReportSort'
import impactList from '../../promises/ImpactList'
import InnerNavbar from '../../partials/InnerNavbar'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import '../../styles/Home.css'
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
  }
}));

export default function User(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [errorA, setErrorA] = useState('')
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [opensort, setOpensort] = React.useState(false);
    const [categories, setCategories] = React.useState([]);
    const [impacts, setImpacts] = React.useState([]);
    const [category, setCategory] = React.useState(999);
    const [impact, setImpact] = useState(999);
    const [deed, setDeed] = React.useState(false)
    const [description, setDescription] = React.useState(false)
    const [locations, setLocations] = React.useState([])
    const [location, setLocation] = React.useState(999)
    const [type, setType] = useState(999)
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [sortDate, setSortDate] = React.useState(999);

    const onDescriptionChanged = e => setDescription(e.target.value)
    const onDeedChanged = e => setDeed(e.target.value)

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleSortDateChange = (event) => {
      setSortDate(event.target.value);
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


    const handleClickOpenSort = () => {
      setOpensort(true);
      };
      
    const handleCloseSort = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpensort(false);
    };

  
    const fetchGuides = async () => {
  
      const res = await reportList()
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
  
    if (canSave) {
        setError('')
        setList([])
        const res = await newReport(selectedDate, location, category, impact, type, description, deed)
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

    setLocation(999)
    setCategory(999)
    setImpact(999)
    setType(999)
  
  }


  const handleSort = async() => {

    setError('')
    setList([])
    const res = await reportSort(setDate(sortDate), location, category, impact, type)
    if(res){
        if(res.error_message){
          setError(res.error_message)
        }else{
          setList(res)
          setOpensort(false)
        }
        
    }else{
      setError('Oops something broke, refresh and try again')
    }

  }

  const canSave = [selectedDate, location, category, impact, type, description, deed].every(Boolean)


  return (
    <div style={{background: 'rgb(224, 245, 228)', minHeight: '100vh'}}>
      <div style={{ margin: 0, paddingBottom: 200}}>
        <InnerNavbar report={true}/> 
      </div>
        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h3 style={{textAlign: 'center', margin: 10}}>Incident Reports</h3>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        <Grid style={{width: 300, height: '100%'}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpen} style={{width: 250}} title="Make New Report"/>
          <Dialog maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="form-dialog-edit">
            <DialogTitle id="form-dialog-title">Make New Report</DialogTitle>
            <DialogContent className={classes.root}>
            <DialogContentText>
              PEF(M)B Incident Reporting System
            </DialogContentText>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className={classes.formField}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            </MuiPickersUtilsProvider>

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
                    </Select>
                </FormControl>
                )}
            </Grid>

            

            <Grid className={classes.formField}>  
                <TextField 
                  id="description" 
                  label="Incident Description" 
                  multiline
                  onChange={onDescriptionChanged}
                  rows={4}
                  fullWidth/>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                  id="deed" 
                  label="What did you do"
                  multiline
                  rows={4}
                  onChange={onDeedChanged}
                  fullWidth/>
            </Grid>

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

        {/* Sort Dialog */}

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        <Grid style={{width: 300, height: '100%'}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpenSort} style={{width: 250}} title="Sort Reports"/>
            <Dialog fullWidth={true} maxWidth={'sm'} open={opensort} onClose={handleCloseSort} aria-labelledby="form-dialog-edit">
              <DialogTitle id="form-dialog-title">Sort Reports</DialogTitle>
              <DialogContent className={classes.root}>
                <DialogContentText>
                    Sort Reports
                </DialogContentText>

                  <Grid className={classes.formField}>
                    <FormControl className={classes.formControl}>
                      <InputLabel required id="from">Select Duration</InputLabel>
                      <Select
                        labelId="types"
                        id="types"
                        style={{minWidth: 300}}
                        required
                        value={sortDate}
                        onChange={handleSortDateChange}
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
                <Button onClick={handleCloseSort} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleSort()} color="primary">
                    Submit
                </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        </Grid>

        <Grid>
          <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>My Reports ({list.length})</h4>
          </Box> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{errorA}</p>
          </Grid>

          {list.map(item =>
          <Grid container direction="column" justify="center" alignItems="center">
            <ReportItem item={item}/>
          </Grid>
          )} 
        
        </Grid>
        
    </div>
  );
}