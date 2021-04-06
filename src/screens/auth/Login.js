import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import '../../styles/Auth.css'
import Button from '../../components/Button'
import login from '../../promises/Login'
import signin from '../../store'
import isSuperUser from '../../promises/IsSuperUser'
import MainLogo from  '../../components/MainLogo'

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
        <div style={{background: 'rgb(224, 245, 228)'}} className="auth-background">
            <div style={{background: '#19461A', color: '#fff'}} className="auth-container">
                <MainLogo />
                <h1>PEF(M)B Incident Reporting System</h1><br /><br />
                <h3 style={{color: '#fff'}}>Welcome</h3>
                <p style={{color: '#fff'}}>Proceed with login</p>
                <form style={{color: '#000'}} onSubmit={handleSubmit}>
                    <div className="position-relative">
                        <span>Email</span>
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
                    {/*<div>
                        <p className="already"><Link to="/forgotpassword" className="sign">Forgot Password</Link></p>
                    </div>
                    */}
                    <div className="mt-4 mb-3">
                        <Button style={{border: '1px solid #fff'}} handleClick={() => submit()} title={loading ? "Processing..." : "Continue"} />
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