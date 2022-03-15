
let instructionOpenWindow = document.getElementById('openWin').addEventListener('click', openBtn);
let instructionsBtn = document.getElementById('openInfo');
let instructionClossBtn = document.getElementById("closeInfo").addEventListener('click', closeBtn);
let hamInstruOpenWin = document.getElementById('hamInstBtn').addEventListener('click', openBtn);
//const cards = ['beach','bicycle','boat','books','bowls','cars','crossing','door','fence','flowers','fruit','hot-air-balloon','house','leaves','man-basket','parrot','path','piano','pink-house','railing','rainbow','stairs','street','train','umbrella'];
const easyCards = ['fruit','parrot','bicycle','pink-house','books','rainbow'];
const easyGame = [...easyCards,...easyCards]
const medCards = ['door','umbrella','hot-air-balloon','path','bowls','leaves','street','man-basket'];
const hardCards = ['train','house','crossing','cars','railing','beach','fence','flowers','piano','stairs'];
let pairs;

//const gameCards = document.getElementById('gameImages');
let easyBtn = document.getElementById('easyGame').addEventListener('click', easy);

let pictureArray = []


function openBtn(){
  instructionsBtn.style.display = 'block';
}

function closeBtn(){
  instructionsBtn.style.display = 'none';
}

function easy(){
  for (let i = easyGame.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = easyGame[i]
    easyGame[i] = easyGame[j]
    easyGame[j] = k
    document.querySelector('.gameImages').innerHTML += `<li><img src="assets/images/${easyGame[i]}.jpg" alt="a image of the array"></li>`
  }
  document.getElementById('gameImages').childElementCount;
  console.log()
}







/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function diffFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function hamFunction() {
    document.getElementById("hamDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hamDropbtn')) {
      let dropdowns = document.getElementsByClassName("ham-dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


