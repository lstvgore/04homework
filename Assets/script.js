
let generateBtn = document.querySelector("#generate");

let chars = ["A", "a", "B", "b", "C", "c","D", "d", "E", "e", "F", "f","G", "g", "H", "h", "I", "i","J", "j", "K", "k", "L", "l","M", "m", "N", "n", "O", "o","P", "p", "Q", "q", "R", "r","S", "s", "T", "t", "U", "u","V", "v", "W", "w", "X", "x","Y", "y", "Z", "z"]
let numbs = [0,1,2,3,4,5,6,7,9]
let specialchars = ["!","@","^","$","&"]
let emoji = ["🌙","⚫️","🐚","🦄","👽"]

let passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  passwordText.value = "";



  let passwordLength = parseInt (prompt ("Please enter a number between 8 and 128"));

  if (passwordLength < 8) {
    alert ("Password length required at least 8 characters")
    return;
  };

  if (passwordLength > 128) {
    alert ("Password length required less than or equal to 128 characters")
    return;
  };

  if (isNaN(passwordLength)) {
    alert("Password generator must be a number between 8 and 128")
    return;
  };

  // Confirm the type of characters user wants to use in password generator
  
  let hasChars = confirm ("Do you want to use chracters?");
  let hasNumbs = confirm ("Do you want to use numbers?");
  let hasSpecialchars = confirm ("Do you want to use Special?");
  let hasEmoji = confirm ("Do you want to use emojis?");

  // Check if user select at least one type of character

  if (hasChars === false && hasNumbs === false && hasSpecialchars ===false &&
    hasEmoji === false ) {
      alert ("Please select at least one type of character")
    };

  // Option character types are selected

  let newPassword = [];

  if (hasChars === true) {newPassword.push(chars)};
  if (hasNumbs === true) {newPassword.push(numbs)};
  if (hasSpecialchars === true) {newPassword.push(specialchars)};
  if (hasEmoji === true) {newPassword.push(emoji)};
console.log (newPassword)

  let pwd = "";

  while (pwd.length < passwordLength) {
    for (let i = 0; i < newPassword.length; i++) {
      if (pwd.length < passwordLength) {
        let randomchars = Math.floor(Math.random() *newPassword[i].length)
        pwd += newPassword[i][randomchars]
      }
    }    
  }

console.log(pwd)
  passwordText.value = pwd;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);