const fs = require("fs")
let text = fs.readFileSync("text.txt","utf-8")
text = text.replace("used", "use")

console.log("This is important:-")
console.log(text)

console.log("Creating a new Text FILE........")
fs.writeFileSync("Text2.txt", text)


console.log("Creating the new File TXT File")
fs.writeFileSync("Text3.txt", text)