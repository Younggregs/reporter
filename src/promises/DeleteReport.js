import { DELETE_REPORT_URL }  from '../constants'

async function deleteReport(id){

  const auth = await localStorage.getItem('auth')

  try {
    const res = await fetch(DELETE_REPORT_URL + id, {
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

export default deleteReport