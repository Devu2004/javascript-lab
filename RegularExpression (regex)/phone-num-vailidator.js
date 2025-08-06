const numbers = [
  "9876543210",   // ✅ valid
  "1234567890",   // ❌ starts with 1
  "98765abc10",   // ❌ contains letters
  "0987654321",   // ❌ starts with 0
  "987654321",    // ❌ only 9 digits
  "7894561230",   // ✅ valid
  "+91-6789012345",   // ✅ valid
  "91234567890",  // ❌ too long
];
let regex = /^(?:\+91[\s-]?|0)?[6-9][0-9]{9}$/
numbers.forEach(num=>{
    console.log(`Your Mobile ${num} is :${regex.test(num)?"Vailid":"Invailid"}`);
})