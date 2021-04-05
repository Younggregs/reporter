import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ManageLocation from './ManageLocation'
import ManageCategory from './ManageCategory'
import ManageImpact from './ManageImpact'
import InnerNavbar from '../../partials/InnerNavbar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import '../../styles/Home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgb(224, 245, 228)', 
    minHeight: '100vh'
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

export default function Manager(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ margin: 0, paddingBottom: 200}}>
        <InnerNavbar manager={true}/> 
      </div>
        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h3 style={{textAlign: 'center', margin: 10}}>Manage Report Classifications</h3>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
         

          <ManageLocation />

          <br />
          <div style={{ border: '1px solid green', marginBottom: 25}} />

          <ManageCategory />

          <br />
          <div style={{ border: '1px solid green', marginBottom: 25}} />

          <ManageImpact />

          <br />
          <div style={{ border: '1px solid green', marginBottom: 25}} />

          
        </Grid>
    </div>
  );
}