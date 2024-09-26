function stringToArray(string){
    return string.split(" ")
    
    }
    function bonusTime(salary, bonus) {
        return '£' + (bonus ?   salary*10 : salary)
        }