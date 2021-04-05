import { TYPE_AGGREGATE_URL }  from '../constants'

async function typeAggregate(){
      try {
        const res = await fetch(TYPE_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default typeAggregate