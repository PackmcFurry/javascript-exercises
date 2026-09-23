const leapYears = function(year) {
    let divBy4 = 0
    if (year % 4 == 0){
        divBy4 = year
    } else {
        return false
    }
    if (divBy4 % 100 == 0 && divBy4%400 != 0){
        return false
    } else{
        return true
    }
};

// Do not edit below this line
module.exports = leapYears;
