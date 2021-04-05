import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyPieChart from '../../components/MyPieChart'
import DashboardNavbar from '../../partials/DashboardNavbar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import '../../styles/Home.css'
import myAggregate from '../../promises/MyAggregate';

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

export default function MyAnalytics(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [list, setList] = useState({});
    const [check, setCheck] = useState(true)
  
    const fetchGuides = async () => {
  
      const res = await myAggregate()
      setCheck(false)
    
      if(res){
        if(res.error_message){
          setError(res.error_message)
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
    

  return (
    <div style={{background: 'rgb(224, 245, 228)'}}>
        
        <DashboardNavbar title={`My Report Analytics`}/> 

        <Box>
            <h5 style={{textAlign: 'center', paddingTop: 200}}>My Report Analytics</h5>
        </Box> 

        <Grid> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{error}</p>
          </Grid>

          <Grid container direction="column" justify="center" alignItems="center">
            <Paper className="col-md-4" elevation={3} square style={{marginBottom: 10, borderBottom: '10px solid green'}}>
              <Grid container direction="column">
                  <p className={classes.name}>{`My Reports`}</p>
                  <p className={classes.linkText}>Total Number of My Reports</p>
                  <p><span className={classes.name}>{list.myReport}</span></p>
                  <p className={classes.linkText}>My Reports Contribution Percentage</p>
                  <p><span className={classes.name}>{parseInt(list.myReport / list.totalReport * 100)}%</span></p>
              </Grid>
            </Paper>

          </Grid>
        </Grid>

        <br />
        <div style={{ border: '1px solid green', marginBottom: 25}} />
        
        <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>Pie Chart</h4>
        </Box> 

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid className="col-md-6">
            <MyPieChart data={list} />
          </Grid>
        </Grid>
        
    </div>
  );
}