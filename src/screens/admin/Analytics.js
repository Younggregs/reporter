import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button1 from '../../components/Button'
import InnerNavbar from '../../partials/InnerNavbar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

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
  buttonStyle: {
    marginBottom: 10,
    width: 300,
    minHeight: 50,
    padding: 5
  }
}));

export default function Analytics(props) {
    const classes = useStyles();


  return (
    <div style={{background: 'rgb(224, 245, 228)', minHeight: '100vh'}}>
      <div style={{ margin: 0, paddingBottom: 200}}>
        <InnerNavbar analytics={true}/> 
      </div>
        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h3 style={{textAlign: 'center', margin: 10}}>Analytics</h3>
        </Box> 

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid style={{ width: 300, minHeight: '100%', margin: 5}} direction="column" justify="center" alignItems="center">

          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/report_analysis'}>
              <Button1 title="General Report Analysis"/>
            </Grid>
          </Grid>

          <br />
          <div style={{ border: '1px solid green', marginBottom: 25}} />

          <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h3 style={{textAlign: 'center', margin: 10}}>Analyse Reports</h3>
          </Box> 

          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/user_analysis'}>
              <Button1 className={classes.buttonStyle} title="By User"/>
            </Grid>
          </Grid>
          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/type_analysis'}>
              <Button1 className={classes.buttonStyle} title="By Report Type"/>
            </Grid>
          </Grid>
          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/location_analysis'}>
              <Button1 className={classes.buttonStyle} title="By Report Location"/>
            </Grid>
          </Grid>
          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/category_analysis'}>
              <Button1 className={classes.buttonStyle} title="By Incident Category"/>
            </Grid>
          </Grid>
          <Grid className={classes.buttonStyle}>
            <Grid component={Link} to={'/impact_analysis'}>
              <Button1 className={classes.buttonStyle} title="By Impact"/>
            </Grid>
          </Grid>

          <br />
          <div style={{ border: '1px solid green', marginBottom: 50}} />
          
          </Grid>
        </Grid>
    </div>
  );
}