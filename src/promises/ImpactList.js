import { IMPACT_URL }  from '../constants'

async function impactList(){
      try {
        const res = await fetch(IMPACT_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default impactList