//For normally wirting a string
var str ="This is string "
console.log(str);

// For First Occurance of a subString we use 'indexOf'
var position = str.indexOf('is')
console.log(position);

//For last Occurance of a subString we use 'lastIndexOf'
var position = str.lastIndexOf('is')
console.log(position) 

//substring form string we use :-
var substr1 = str.slice(1,6)
console.log(substr1)

// For Replacing a word in our string we use 'replace'
var replaced = str.replace('string','Ankit')
console.log(replaced)

//For Making a string a UpperCase(captial-Letter) we use 'toUppercase()' and for LowerCase(Small-Letter) we use 'toLowercase()'.
console.log(str.toUpperCase())
console.log(str.toLowerCase()) 

//For Combining a new string in the old string we use 'Concat'
var newStr = str.concat(' HELLO')
console.log(newStr)

//For directly combing we use '+' sign
var str2 ="This is string "+"Hello"
console.log(str2);

//For Triming White Spaces in a String we use 'trim()' But it will not Change the WhiteSpace IN-Between the string 
var WhiteSpaces = "         this          is            a String          "
console.log(WhiteSpaces)
console.log(WhiteSpaces.trim())


//For Finding the paricular character in a String we use charAt()
var char2 = str.charAt(2)
console.log(char2)

//For Finding the paricular character code in a String we use charCodeAt()
var char3 = str.charCodeAt(2)
console.log(char3)

alert("This JavaScript is of indexOf,lastIndexOf,replace,toUppercase(),toLowercase(),Concat,trim(),charAt(),charCodeAt()")