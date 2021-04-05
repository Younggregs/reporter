import { SUPERUSER_SORT_URL }  from '../constants'

async function superUserSort(selectedDate, location, category, impact, type){

      var formData = new FormData()
      formData.append('date', selectedDate)
      formData.append('location', location)
      formData.append('category', category)
      formData.append('impact', impact)
      formData.append('type', type)

      try {
        const res = await fetch(SUPERUSER_SORT_URL, {
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

export default superUserSort