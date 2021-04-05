import { LOGIN_URL }  from '../constants'

async function userList(){
      try {
        const res = await fetch(LOGIN_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default userList