let value = "    I    am    a    Web   Developer";
let result = "";
for(let i = 0; i < value.length; i++){
    if(value.charAt(i) != " "){
        result += value.charAt(i);
    }
}
console.log(result);