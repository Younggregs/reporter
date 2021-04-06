import React, {useState} from 'react'
import '../../styles/Auth.css'
import Button from '../../components/Button'
import DashboardNavbar from '../../partials/DashboardNavbar'
import editPassword from '../../promises/EditPassword'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState()
    const [oldPassword, setOldPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [success, setSuccess] = useState(false)
    const [err, setErr] = useState(false)
    const [error, setError] = useState('')
    

    const onOldPasswordChanged = e => setOldPassword(e.target.value)
    const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const _handleKeyDownSubmit = (e) => {
        if (e.key === 'Enter') {
          submit()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const submit = async () => {

        if(canSave){

            if(password === confirmPassword){
                setLoading(true)
                const message = await editPassword(oldPassword, password)
                if(message.code){
                    setSuccess(true)
                }else if(message.error_message){
                    setErr(true)
                    setError(message.error_message)
                }else{
                    setErr(true)
                    setError('Sorry something broke, could not complete the process')
                }
            }else{
                setErr(true)
                setError('New passwords do not match')
            }

            

        }else{
            setErr(true)
            setError('All required fields must be filled')
        }
        
        setLoading(false)
  
    }


    const canSave = [oldPassword, password, confirmPassword].every(Boolean)

    return (
        <div style={{background: 'rgb(224, 245, 228)'}}>
            <DashboardNavbar title={`Edit Password`}/> 
       
        <div style={{paddingTop: 200}} className="auth-background">
            
            <div className="auth-container">
                <h1>Update Password</h1><br /><br />
                <p>Set a new password</p>
                <form onSubmit={handleSubmit}>
                    <Grid>  
                        <TextField 
                            autoFocus 
                            type="password" 
                            name="old_password" 
                            id="old_password"
                            label="Old Password" 
                            onChange={onOldPasswordChanged}
                        />
                    </Grid>
                    <Grid>  
                        <TextField 
                            type="password" 
                            name="password" 
                            id="password"
                            label="New Password" 
                            placeholder="Min. 6 characters" 
                            onChange={onPasswordChanged}
                        />
                    </Grid>
                    <Grid>  
                        <TextField  
                            type="password" 
                            name="confirm_password" 
                            id="confirm_password"
                            label="Confirm Password" 
                            placeholder="Min. 6 characters" 
                            onChange={onConfirmPasswordChanged}
                            onKeyDown={(e) => _handleKeyDownSubmit(e)}
                        />
                    </Grid>
                    {err ? (
                        <div>
                            <p style={{color: 'red', fontSize: 15}}>{error}</p>
                        </div>
                        ) : (
                        <div />
                    )}

                    <div>
                        {success ? (
                            <div>
                                <p style={{color: '#000', fontSize: 15}}>Successfully Updated Password!</p>
                            </div>
                        ) : (
                        <div />
                        )}  
                    </div>
                    <div className="mt-4 mb-3">
                        <Button handleClick={() => submit()} disabled={!canSave} title={loading ? "Processing..." : "Continue"} />
                    </div>
                </form>
                

            </div>
        </div>
    </div>
    )
}