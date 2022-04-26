
document.addEventListener("DOMContentLoaded", function() {
//get the list from storage then clean it 
let listArray =JSON.parse( localStorage.getItem('GameList'))
// console.log(listArray)
let cleanedArray= [...new Set(listArray)]
// console.log(cleanedArray)


cleanedArray.forEach(game=>{
console.log(JSON.parse( localStorage.getItem(game)))
let gameObj = JSON.parse( localStorage.getItem(game))
let name = gameObj.name
let players = gameObj.players
let li =  document. createElement("li");
let link = document.createElement('a')
//build the link here 

link.href='www.google.com'
let htmlTest  = document.createTextNode(game)
link.appendChild(htmlTest)
li.appendChild(link)
let ul = document.getElementById('gameList')
console.log(ul)
ul.appendChild(li)

})

  })