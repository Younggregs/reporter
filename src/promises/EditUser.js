import { USER_URL }  from '../constants'

async function editUser(id, password){

      var formData = new FormData()
      formData.append('password', password)

      try {
        const res = await fetch(USER_URL + id + '/', {
            method: 'POST',
            body : formData,
        })
        const message = await res.json();
        return message

      } catch (e) {
        console.log(e);
      }
    
      return false
}

export default editUser