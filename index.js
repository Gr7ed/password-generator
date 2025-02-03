const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1_el");
let pass2El = document.getElementById("pass2_el");

function getRandom(){
    let random = Math.floor(Math.random() * characters.length);
    return random;
}
function generatePassword() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < 15; i++) {
        password1 += characters[getRandom()];
        password2 += characters[getRandom()];
    }
    pass1El.textContent = password1;
    pass2El.textContent = password2;
}
