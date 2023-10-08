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
    isPalindrome('i nun i')