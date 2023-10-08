//declare a finction
//takes in one parameter
function isPalindrome(str){
//test out str vs rts

//return tru if str===rts
//return false if not the same
//reverse the string str to rts(write it backwards)
//case 1:
/**
 * using a for loop
 */
//consider loop counting forward

for(let i=0;i<=str.length-1;i++){
    console.log(str[i])
}
//consider loop running bacwards
let rts=''
//Need the contents of the loop running backwards loaded into a new string
for(let i=str.length-1;i>=0;i--){
    console.log(str[i])
    rts +=str[i]
}


if(str===rts){
    return true;
}else{
    return false
}



}
isPalindrome('hello')