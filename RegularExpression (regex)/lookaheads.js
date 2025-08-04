// lookaheads
// simple syntax of lookaheads = (?=condition)

// case - 1 
// ^(?=.*\d).+$ - means that string me atleast ek number hona chahiye phr chahe or kuch bhi ho 
let regex1 = /^(?=.*\d).+$/
let str1 = "Heyoooooo"
console.log(regex1.test(str1));

// case - 2 
let regex = /^.\d{6}.+$/
let str  = "A21234xv"
console.log(regex.test(str));
