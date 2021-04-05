import { SORT_URL }  from '../constants'

async function reportSort(selectedDate, location, category, impact, type){

      var formData = new FormData()
      formData.append('date', selectedDate)
      formData.append('location', location)
      formData.append('category', category)
      formData.append('impact', impact)
      formData.append('type', type)

      const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(SORT_URL, {
            method: 'POST',
            body : formData,
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

export default reportSort