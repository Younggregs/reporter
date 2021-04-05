import { EDIT_IMPACT_URL }  from '../constants'

async function editImpact(id, name){

      var formData = new FormData()
      formData.append('name', name)

      try {
        const res = await fetch(EDIT_IMPACT_URL + id + '/', {
            method: 'POST',
            body : formData,
        })
        const message = await res.json();
        return message

      } catch (e) {
        console.log(e);
      }
    
      return false
}

export default editImpact