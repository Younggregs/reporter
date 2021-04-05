import { CATEGORY_URL }  from '../constants'

async function categoryList(){
      try {
        const res = await fetch(CATEGORY_URL)
        const message = await res.json();
        return message
      } catch (e) {
        console.log(e);
      }
      return false
}

export default categoryList