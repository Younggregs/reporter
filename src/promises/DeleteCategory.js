import { DELETE_CATEGORY_URL }  from '../constants'

async function deleteCategory(id){
      try {
        const res = await fetch(DELETE_CATEGORY_URL + id)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default deleteCategory