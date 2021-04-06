import { USER_URL }  from '../constants'

async function deleteUser(id){
      try {
        const res = await fetch(USER_URL + id)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default deleteUser