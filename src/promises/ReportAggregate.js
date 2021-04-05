import { REPORT_AGGREGATE_URL }  from '../constants'

async function reportAggregate(){
      try {
        const res = await fetch(REPORT_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default reportAggregate