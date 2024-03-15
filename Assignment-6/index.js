let obj = {
    name : "Akash",
    age : 28,
    hairColor : "Black",
    like : "Food",
}

function invertKeysAndValues(obj){
    let targetObj = {};
    for(let [key, value] of Object.entries(obj)){
        targetObj[value] = key;
    }
    return targetObj;
}

console.log(invertKeysAndValues(obj))