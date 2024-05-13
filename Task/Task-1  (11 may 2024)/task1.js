function changeColor(boxId) {
         let box = document.getElementById(boxId);
         box.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
         let letters = '0123456789ABCDEF';
         let color = '#';
         for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
}


//  SECOND BOX
function changeCaptcha(boxId) {
         let box = document.getElementById(boxId);
         box.innerText = getCaptcha();
}

function getCaptcha() {
         let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
         let word = '';
         for (let i = 0; i < 6; i++) {
                  word += letters[Math.floor(Math.random()*62)];
         }
         return word;
}



// third text

function printIt() {
         let name = document.getElementById("name").value;
         document.getElementById("myName").innerText = name;

         let Password = document.getElementById("Password").value;
         document.getElementById("myPassword").innerText = Password;
     }
