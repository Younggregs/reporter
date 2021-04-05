import { IMPACT_AGGREGATE_URL }  from '../constants'

async function impactAggregate(){
      try {
        const res = await fetch(IMPACT_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default impactAggregate