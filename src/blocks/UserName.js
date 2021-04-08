import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'

const UserName = () => {

    const [stop, setStop] = useState(true)
    const [name, setName] = useState(false)
    const [status, setStatus] = useState(false)

    const isSuper = async () => {
        var userName = await localStorage.getItem('name')

        if(userName === null || userName === '' || userName === false){setStatus(false)}
        else{
            setStatus(true)
            setName(userName)
        }
        setStop(false)
    }

    if(stop){
        isSuper()
    } 
    

    return (
        <div style={{border: '2px solid green', width:350, fontSize: 15, borderRadius: 5}}>
            <Grid justify='center' alignItems='center' direction='row'>
            {status && (
                <div>
                    <span style={{background: 'green', color: 'white', padding: 5}}>User Account: </span>
                    <span style={{paddingLeft: 5}}>{name}</span>
                </div> 
            )}
            </Grid>
        </div>
    )
};

export default UserName;