import { USER_AGGREGATE_URL }  from '../constants'

async function userAggregate(){
      try {
        const res = await fetch(USER_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default userAggregate