const removeFromArray = function(arr, arg1, arg2, arg3, arg4) {
    let arg = [arg1, arg2, arg3, arg4]

    return arr.filter((item) => !arg.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
