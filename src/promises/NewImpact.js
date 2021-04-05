import { IMPACT_URL }  from '../constants'

async function newImpact(name){

      var formData = new FormData()
      formData.append('name', name)

      try {
        const res = await fetch(IMPACT_URL, {
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

export default newImpact