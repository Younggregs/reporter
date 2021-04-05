import { LOGIN_URL }  from '../constants'

async function login(email, password){

    var formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('name', 'name')

    try {
        const res = await fetch(LOGIN_URL, {
            body : formData,
            method: 'POST',
        })
        const message = await res.json();
        console.log('res', message)
        return message
              
    } catch (e) {
        console.log(e);
    }
}

export default login