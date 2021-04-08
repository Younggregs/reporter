import { REPORT_URL }  from '../constants'

async function newReport(selectedDate, location, category, impact, type, description, deed, exactLocation){

      var formData = new FormData()
      formData.append('report_date', selectedDate)
      formData.append('location', location)
      formData.append('category', category)
      formData.append('impact', impact)
      formData.append('type', type)
      formData.append('description', description)
      formData.append('deed', deed)
      formData.append('exactLocation', exactLocation)

      const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(REPORT_URL, {
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

export default newReport