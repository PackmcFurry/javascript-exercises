const sumAll = function(min, max) {
    if(min < 0 || max < 0){
        return "ERROR"
    }
    if(min>max){
        let extra = min
        min = max
        max = extra
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    let sum = 0
    for(min; min <= max; min++){
        sum += min
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
