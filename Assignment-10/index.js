let email = "akash1204@gmail.com";
function protectEmail(email){
    let secureEmail = "";
    let arr = email.split("@");
    return secureEmail = arr[0].substring(0, arr[0].length / 2) + "...@" + arr[1];
}
console.log(protectEmail(email));