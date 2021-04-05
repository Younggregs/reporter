function setDate(selectedDate){

        var newDate = new Date()
        switch (selectedDate) {
            case 1:
                newDate.setDate( newDate.getDate() - 1 );
                break;
            case 7:
                newDate.setDate( newDate.getDate() - 7 );
                break;
            case 14:
                newDate.setDate( newDate.getDate() - 14 );
                break;
            case 30:
                newDate.setDate( newDate.getMonth() - 1 );
                break;
            case 60:
                newDate.setDate( newDate.getMonth() - 2 );
                break;
            case 90:
                newDate.setDate( newDate.getMonth() - 3 );
                break;
            case 180:
                newDate.setDate( newDate.getMonth() - 6 );
                break;
            case 360:
                newDate.setDate( newDate.getYear() - 1 );
                break;
        
            default:
                return newDate = 999
        }


        var day = newDate.getDate()
        var month = newDate.getMonth() + 1
        var year = newDate.getFullYear()

        var dt = year + '-' + month + '-' + day
        
     
    return dt
}

export default setDate