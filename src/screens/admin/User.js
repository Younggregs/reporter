import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserItem from '../../blocks/UserItem'
import Button1 from '../../components/Button'
import Button from '@material-ui/core/Button'
import newUser from '../../promises/NewUser'
import userList from '../../promises/UserList'
import InnerNavbar from '../../partials/InnerNavbar'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import '../../styles/Home.css'

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
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [name, setName] = useState('')

    const onPasswordChanged = e => setPassword(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)

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
  
      const res = await userList()
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
        const res = await newUser(name, email, password)
        if(res){
            if(res.error_message){
              setError(res.error_message)
            }else{
              const r = await userList()
              setList(r)
              setOpen(false)
            }
            
        }else{
          setError('Oops something broke, refresh and try again')
        }

    }else{
      setError('All required fields must be filled')
    }
  
  }

  const canSave = [name, email, password].every(Boolean)

  return (
    <div style={{background: 'rgb(224, 245, 228)', minHeight: '100vh'}}>
      <div style={{ margin: 0, paddingBottom: 200}}>
        <InnerNavbar user={true}/> 
      </div>
        <Box style={{background: 'rgb(224, 245, 228)'}}>
            <h3 style={{textAlign: 'center', margin: 10}}>Manage users</h3>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        
        <Grid style={{width: 300, height: '100%'}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpen} style={{width: 250}} title="Add New User"/>
          <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="form-dialog-edit">
            <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
            <DialogContent className={classes.root}>
            <DialogContentText>
              PEF(M)B Incident Reporting System
            </DialogContentText>

            <Grid className={classes.formField}>  
                <TextField 
                id="name" 
                label="Full Name" 
                onChange={onNameChanged}
                required fullWidth/>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                id="email" 
                label="Email" 
                onChange={onEmailChanged}
                required fullWidth/>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                  id="password" 
                  label="Password" 
                  onChange={onPasswordChanged}
                  required fullWidth/>
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

        <Grid>
          <Box>
            <h4 style={{textAlign: 'center', margin: 10}}>Users ({list.length})</h4>
          </Box> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{errorA}</p>
          </Grid>

          {list.map(item =>
          <Grid container direction="column" justify="center" alignItems="center">
            <UserItem item={item}/>
          </Grid>
          )} 
        
        </Grid>
        
    </div>
  );
}