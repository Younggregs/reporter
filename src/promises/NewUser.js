import { LOGIN_URL }  from '../constants'

async function newUser(name, email, password){

      var formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)

      const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(LOGIN_URL, {
            method: 'POST',
            body : formData,
            headers : {
              'Authorization' : 'Token ' + auth,
            },
        })
        const message = await res.json();
        return message

      } catch (e) {
        console.log(e);
      }
    
      return false
}

export default newUser