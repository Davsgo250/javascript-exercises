const sumAll = function(a, b) {
    let larger;
    let smaller;
    let sum = 0;
    if(a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number" || a % 1 !== 0 || a % 1 !== 0){
        return "ERROR";
    }
    else if(a > b){
        larger = a;
        smaller = b;
    }else{
        smaller = a;
        larger = b;
    }

    for (let i = smaller; i <= larger; i++) {
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
