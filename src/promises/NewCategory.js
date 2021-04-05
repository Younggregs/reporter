import { CATEGORY_URL }  from '../constants'

async function newCategory(name){

      var formData = new FormData()
      formData.append('name', name)

      try {
        const res = await fetch(CATEGORY_URL, {
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

export default newCategory