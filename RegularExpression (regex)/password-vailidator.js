// password vailidator

const passwords = [
  "A1b@cD3e",    
  "Zx9#Lm7q",    
  "hello123",   
  "password",    
  "A1b2c3d4",   
  "QWER1234",    
  "short1!",     
  "gH%9Lp7a",    
  "only@Spec",  
  "Qq7$Jk0r"     
];

let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$&!*#%])[A-Za-z\d@$&!*#%]{8,}$/;
let passwordIndex = Math.floor(Math.random() *passwords.length)
let password = passwords[passwordIndex]
console.log(password , regex.test(password));
let checker = regex.test(password) ? true : false
if(checker === true){
    console.log(`Your password ${password} is Correct`);
}
else {
     console.log(`Your password ${password} is INCorrect`)
}