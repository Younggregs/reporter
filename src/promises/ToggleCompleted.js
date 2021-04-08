import { TOGGLE_COMPLETED_URL }  from '../constants'

async function toggleCompleted(id){

    const auth = await localStorage.getItem('auth')
    try {
        const res = await fetch(TOGGLE_COMPLETED_URL + id, {
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

export default toggleCompleted