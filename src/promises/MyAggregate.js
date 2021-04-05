import { MY_REPORT_AGGREGATE_URL }  from '../constants'

async function myAggregate(){
  const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(MY_REPORT_AGGREGATE_URL, {
          headers : {
            'Authorization' : 'Token ' + auth,
          },
        })
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default myAggregate