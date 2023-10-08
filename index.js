
//case 1
// function isPalindrome(str) {
//   let rts = "";

//   for (let i = 0; i <= str.length - 1; i++) {
//     console.log(str[i]);
//   }
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//     rts += str[i];
    
//   }
//   console.log(rts);
//   console.log(str)
//   if (str === rts) {
//     console.log('ispalindrome')
    
//   } else {
//     console.log('isNOTpalindrome')
//       return false;
// }
// isPalindrome("hello");


/* 
  Add your pseudocode here
  convert string into array
  compare letters one by one first against the last
  conditional  - if equal
  
*/

/*
  Add written explanation of your solution here
*/
function isPalindrome(str){
  //need to split string
  console.log(str)
  // let rts = str.split('')
  // console.log(rts)
  // rts.reverse()
  // console.log(rts)
  // let joined = rts.join('')
  let rts=str.split('').reverse().join('')
  //console.log(joined)
   if (str === rts) {
          console.log(str + ' ispalindrome')
          
        } else {
          console.log(str +' isNOTpalindrome')
            return false;
      }
  }
  isPalindrome('nunu')


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
