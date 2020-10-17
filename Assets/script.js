var chars = ["q", "w", "e", "r", "t", "y"]
var numbs = [0,1,2,3,4,5,6,7,9]
var specialchars = ["!","@","^","$","&"]
var emoji = ["🌙","⚫️","🐚","🦄","👽"]


function generate(){

  var possible = []

  var length = parseInt (prompt("How long does this password need to be?"))
  
  if (length < 8 || length > 128) {
    alert ("The password needs 8 characters or More")
   } else {
  
    var charsTrue = confirm("Do you want Charters?")
    var numbsTrue = confirm("Do you want Numbers?")
    var specialcharsTrue = confirm("Do you want Special Charter's?")
    var emojiTrue = confirm("Do you want Emojis?")
  
  
    if (charsTrue) { possible.push(chars)}
    if (numbsTrue) { possible.push(numbs)}
    if (specialcharsTrue) { possible.push(specialchars)}
    if (emojiTrue) { possible.push(emoji)}

  var passwordOptions ={
    chars:chars,
    numbs:numbs,
    specialchars:specialchars,
    emoji:emoji 
  }
return passwordOptions
   
  }
   }
function random() {
  var pw = ""
  while(pw.length < length ){
  
    for(let i = 0; i < possible.length; i++){
      if (pw.length < length){
      let rand = Math.floor(Math.random() * possible[i].length)
     
      pw += possible[i][rand]
      }
  
      console.log(pw, `password length: ${pw.length}`)
  
    }
}

document.querySelector("#generate"),addEventListener("click", generate)
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);