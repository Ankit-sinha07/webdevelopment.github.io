//alert("THIS IS JSON")

let JsonObj={
    name:"Ankit",
    hobby:"GAMES AND ANIME",
    friend:"EVERYONE",
    favoriteProgramingLanguage:"Every Language I have learned",
}
console.log(JsonObj)
//sending data JSON
let myJsonstr = JSON.stringify(JsonObj)
console.log(myJsonstr)

//Replacing Words
myJsonstr = myJsonstr.replace('GAMES AND ANIME', 'GAMES, ANIME AND PROGRAMING')
console.log(myJsonstr)

//Recieving data in JSON
newJsonObj = JSON.parse(myJsonstr)
console.log(newJsonObj)