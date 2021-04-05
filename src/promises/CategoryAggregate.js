import { CATEGORY_AGGREGATE_URL }  from '../constants'

async function categoryAggregate(){
      try {
        const res = await fetch(CATEGORY_AGGREGATE_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default categoryAggregate