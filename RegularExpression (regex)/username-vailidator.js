// username vailidator

const usernames = [
  "Dev_123",      
  "devan",        
  "_devu123",     
  "dev",          
  "123dev",       
  "Devansh_2004", 
  "dev@ns",        
  "devansh__123", 
  "devansh!king", 
  "My_User123"    
];
usernames.forEach(name => {
  const isValid = /^[A-Za-z][A-Za-z0-9_]{4,14}$/.test(name);
  console.log(`${name} → ${isValid ? "✅ Valid" : "❌ Invalid"}`);
});