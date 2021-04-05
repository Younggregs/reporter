import { LOCATION_AGGREGATE_URL }  from '../constants'

async function locationAggregate(){
      try {
        const res = await fetch(LOCATION_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default locationAggregate