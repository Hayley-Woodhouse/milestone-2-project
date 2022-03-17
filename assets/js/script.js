
let instructionOpenWindow = document.getElementById('openWin').addEventListener('click', openBtn);
let instructionsBtn = document.getElementById('openInfo');
let instructionClossBtn = document.getElementById("closeInfo").addEventListener('click', closeBtn);
let hamInstruOpenWin = document.getElementById('hamInstBtn').addEventListener('click', openBtn);
const easyCards = ['fruit','parrot','bicycle','pink-house','books','rainbow'];
const easySet = [...easyCards,...easyCards]
const medCards = ['door','umbrella','hot-air-balloon','path','bowls','leaves','street','man-basket'];
const medSet = [...medCards,...medCards];
const hardCards = ['train','house','crossing','cars','railing','beach','fence','flowers','piano','stairs'];
const hardSet = [...hardCards,...hardCards];


/* EASY GAME BUTTON */
let easyBtn = document.getElementById('easyGame').addEventListener('click', easy);
let medBtn = document.getElementById('medGame').addEventListener('click', meduim);
let hardBtn = document.getElementById('hardGame').addEventListener('click', hard);


/* INSTUCTION BUTTON */
function openBtn(){
  instructionsBtn.style.display = 'block';
}

function closeBtn(){
  instructionsBtn.style.display = 'none';
}

/* SHUFFLE CARDS */
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

/** WHEN DIFFICULTY LEVEL SELECTED THE FUNCTION CALLS FOR A DUPLICATED IMAGES
 * EASY CALLS 12 CARDS
 */
function easy(){
  document.querySelector('#gameImages').classList.add('e-display');
  shuffle(easySet)
    for (let i = 0; i < easySet.length; i++){
      document.querySelector('.gameImages').innerHTML += `<li><img src="assets/images/${easySet[i]}.jpg" alt="a image of the array"></li>`
    }
  document.getElementById('gameImages').childElementCount;
}
/** THIS FUNCTIONS CALLS FOR 8 DUPLICATED IMAGES
 * MEDIUM CALLS 16 CARDS
 */
function meduim(){
  document.querySelector('#gameImages').classList.add('m-display');
  shuffle(medSet)
    for (let i =0; i < medSet.length; i++){
    document.querySelector('.gameImages').innerHTML += `<li><img src="assets/images/${medSet[i]}.jpg" alt="a image of the array"></li>`
  }
  document.getElementById('gameImages').childElementCount;
}
/** THIS FUNCTIONS CALLS FOR 10 DUPLICATED IMAGES
 * MEDIUM CALLS 20 CARDS
 */
function hard(){
  document.querySelector('#gameImages').classList.add('h-display');
  shuffle(hardSet)
    for (let i =0; i < hardSet.length; i++){
    document.querySelector('.gameImages').innerHTML += `<li><img src="assets/images/${hardSet[i]}.jpg" alt="a image of the array"></li>`
  }
  document.getElementById('gameImages').childElementCount;
}



//var amountToGrab = 12
// var chosen

// function easy(){
//   var chosen = []
// do {
//   var random = Math.floor(Math.random() * easyCards.length);
//   var value = easyCards[random];
 
// if (chosen.includes(value)){
//   console.log('doesexists');
//     } else {
//       chosen.push(value);
//       chosen.push(value);
//       }
//       shuffle(chosen)
    
// } while (chosen.length < 12);


// for (var x = 0; x < chosen.length; ++x) {
// console.log(chosen[x]);
// }
// }







/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function diffFunction() {
    document.getElementById("diffDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("diff-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
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
      var dropdowns = document.getElementsByClassName("ham-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


