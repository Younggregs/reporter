import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../styles/Auth.css'
import Button from '../../components/Button'
import login from '../../promises/Login'
import signin from '../../store'
import isSuperUser from '../../promises/IsSuperUser'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState()
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [err, setErr] = useState(false)
    const [error, setError] = useState('')
    

    const onEmailChanged = e => setEmail(e.target.value)
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

        setLoading(true)
        const message = await login(email, password)
        if(message.code){
            const res = await signin(email, password)
            if(res){
                //set super use status
                await isSuperUser()
                setSuccess(true)
            } 
        }else if(message.error_message){
            setErr(true)
            setError(message.error_message)
        }else{
            setErr(true)
            setError('Sorry something broke, could not complete the process')
        }

        setLoading(false)
  
    }

    return (
        <div className="auth-background">
            <div className="auth-container">
                <h1>Incident Reporting System</h1><br /><br />
                <h3>Welcome</h3>
                <p>Proceed with login</p>
                <form onSubmit={handleSubmit}>
                    <div className="position-relative">
                        <span>Emal</span>
                        <input 
                            autoFocus 
                            type="text" 
                            name="email" 
                            id="email"
                            onChange={onEmailChanged}
                        />
                    </div>
                    <div className="position-relative">
                        <span>Password</span>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Min. 6 characters" 
                            onChange={onPasswordChanged}
                            onKeyDown={(e) => _handleKeyDownSubmit(e)}/>
                    </div>
                    <div>
                        <p className="already"><Link to="/forgotpassword" className="sign">Forgot Password</Link></p>
                    </div>
                    <div className="mt-4 mb-3">
                        <Button handleClick={() => submit()} title={loading ? "Processing..." : "Continue"} />
                    </div>
                </form>
                

            <div>
            {success ? (
                <Redirect to={'/report'} />
            ) : (
              <div />
            )}

            {err ? (
              <div>
                  <p style={{color: 'red', fontSize: 15}}>{error}</p>
              </div>
            ) : (
              <div />
            )}
        </div>
                

            </div>
        </div>
    )
}