import { REPORT_URL }  from '../constants'

async function reportList(){

    const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(REPORT_URL, {
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

export default reportList