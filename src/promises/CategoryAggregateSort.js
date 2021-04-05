import { CATEGORY_AGGREGATE_URL }  from '../constants'

async function categoryAggregateSort(start_date, end_date){

        var formData = new FormData()
        formData.append('start_date', start_date)
        formData.append('end_date', end_date)

        try {
            const res = await fetch(CATEGORY_AGGREGATE_URL, {
                method: 'POST',
                body : formData
            })
            const message = await res.json();
            return message
        } catch (e) {
            console.log(e);
        }
      return false
}

export default categoryAggregateSort