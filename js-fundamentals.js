// why we put <script> tag in the end of HTML file?
//* We can insert <script> tag almost anywhere into an HTML file. The JavaScript code inside the <script> tag execute automatically when the browser process the tag. So if we use an HTML element in the script then the script cant access that element if that is below the <script> tag

// How to run Js code
//* in nodejs use the command "node filename.js", we can ommit .js extension as node.js by default search file with .js extension
//* in browser we can insert JavaScript code into an HTML file using <script> tag

/* 
    In JS nested multiple line comment isn't supported
*/

//=======================================================
// if we don't use use-strict at top it won't active
// "use strict";
// console.log("hello world!");

// abc = 10; // throw error
//=======================================================

//=======================================================
// if we don't use use-strict at top it won't active
console.log("hello world!");

("use strict");
abc = 10; //* don't throw error
//=======================================================

//* in $ _ symbol allowed in variable
//* first character can't be digit
//* JS reserved name can't be used as variable name
let camelCase = "variable";
const birthDate = "09/4/97";
// any known value that is hard to remember we can use all UPPERCASE
const PRIMARY_COLOR = "#000";
