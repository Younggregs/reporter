function prepDate(newDate){

    var day = newDate.getDate()
    var month = newDate.getMonth() + 1
    var year = newDate.getFullYear()

    var dt = year + '-' + month + '-' + day
    
 
return dt
}

export default prepDate