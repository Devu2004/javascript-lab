console.log("Regex");
let str = "I have a cat and a dog";
let regex = /cat/;
console.log(regex.test(str));


// \d matches any digit from 0-9
let str1 = "My number is 3";
let regex1 = /\d/   
console.log(regex1.test(str1));

// [aeiou] - matching vowel
let str2 = "Sky or sea?";
let regex2 = /[aeiou]/;
console.log(regex2.test(str2));

// [a-z] : check any lower case present or not 
let str3 = "HELLO123";
let regex3 = /[a-z]/
console.log(regex3.test(str3));

// ^ caret symbol - means if in the bracket then except those words all are accepted in string 
let str4 = "apple";
let regex4 = /[^aeiou]/;
console.log(regex4.test(str4));

// \d{3} - Exactly 3 digits in a row
let str5 = "My code is 9993";
let regex5 = /\d{3}/
console.log(regex5.test(str5));


// /\d{2,}/ - checks at least 2 digits
// /\d{2,4}/ - checks number digtis are between 2 and 4 
// \d+ === /\d{1,}/ - at least one digit
// /\d*/ - 0 or more digits
let strr = "Price:233  rupees";
let regexx = /\d{1,}/
console.log(regexx.test(strr));

let arr = [1234,1453,2345,32]
let regx = /\d{3,4}/g
arr.forEach(num =>{
    let stri = String(num);
    let match = stri.match(regx)
    console.log(match);
})


// postal code vailidator

let string = "My PIN is 226021";
let rgex = /^\d{6}$/
console.log(rgex.test(string));
