import { EDIT_PASSWORD_URL }  from '../constants'

async function editPassword(oldPassword, password){

      var formData = new FormData()
      formData.append('oldPassword', oldPassword)
      formData.append('password', password)

      const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(EDIT_PASSWORD_URL, {
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

export default editPassword