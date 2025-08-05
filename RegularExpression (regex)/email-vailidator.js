// RULES
/*
Must start with a letter
Can contain letters, digits, dots (.) and underscores (_)
Must have @ after the name part
Then a domain name (letters only)
Then a dot .
Then a domain extension with 2 to 4 letters (like .com, .in, .org)
 */

const emails = [
  "dev.an.sh123@gmail.com",   // ✅ valid
  "123dev@code.in",         // ❌ starts with number
  "dev_ansh@google.org",    // ✅ valid
  "dev.ansh@domain",        // ❌ no extension
  "dev@.com",               // ❌ domain name missing
  "dev@domain.c",           // ❌ extension too short
  "devansh@domain.comm",    // ✅ valid
  "dev-ansh@web.dev",       // ❌ contains dash in name (not allowed here)
  "Dev_ansh@site.io",       // ✅ valid
  "dev@domain.toolongext"   // ❌ extension too long
];
let regex = /^[A-Za-z](?!.*[._]{2})[A-Za-z0-9._]{2,13}[A-Za-z0-9]@[A-Za-z]+\.[A-Za-z]{2,4}$/


emails.forEach(email=>{
    console.log(`${email} -> ${ regex.test(email) ? "valid": "Invalid"}`);
    
})
// ^                     → Anchors the regex to the **start** of the string.
// [A-Za-z]              → First character **must be a letter** (uppercase or lowercase).
// (?!.*[._]{2})         → Negative lookahead: **no double dots or underscores** allowed anywhere.
// [A-Za-z0-9._]{2,13}   → Allows 2 to 13 characters that can be **letters, digits, dot or underscore**.
// [A-Za-z0-9]           → The last character **before @** must be a **letter or digit** (not dot/underscore).
// @                     → Matches the **@** symbol (required in every email).
// [A-Za-z]+             → Domain name must have **at least one letter** (no digits/dashes).
// \.                    → Matches the **dot (.)** literally before extension.
// [A-Za-z]{2,4}         → Domain extension must be **2 to 4 letters** (like com, in, org, info).
// $                     → Anchors the regex to the **end** of the string.
 
