import { DELETE_IMPACT_URL }  from '../constants'

async function deleteImpact(id){
      try {
        const res = await fetch(DELETE_IMPACT_URL + id)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default deleteImpact