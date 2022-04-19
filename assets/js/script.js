
let instructionOpenWindow = document.getElementById('openWin').addEventListener('click', openBtn);
let instructionsBtn = document.getElementById('openInfo');
let instructionCloseBtn = document.getElementById("closeInfo").addEventListener('click', closeBtn);
let welcomeClose = document.getElementById("welcome").addEventListener('click', closeBtn);
let congratsClose = document.getElementById("congrats").addEventListener('click', congratsCloseFN);
let hamInstruOpenWin = document.getElementById('hamInstBtn').addEventListener('click', openBtn);
const easyCards = ['fruit','parrot','bicycle','pink-house','books','rainbow'];
const easySet = [...easyCards,...easyCards]
const medCards = ['door','umbrella','hot-air-balloon','path','bowls','leaves','street','man-basket'];
const medSet = [...medCards,...medCards];
const hardCards = ['train','house','crossing','cars','railing','beach','fence','flowers','piano','stairs'];
const hardSet = [...hardCards,...hardCards];
let total;
let level;
let startTime; 
let endTime;
let score;

/* EASY GAME BUTTON */
let easyBtn = document.getElementById('easyGame').addEventListener('click', easy);
let medBtn = document.getElementById('medGame').addEventListener('click', meduim);
let hardBtn = document.getElementById('hardGame').addEventListener('click', hard);

/* INSTUCTION BUTTON */
function openBtn(){
  instructionsBtn.style.display = 'block';
  document.querySelector('#gameImages').innerHTML = '';
  document.querySelector('#gameImages').classList.remove('e-display');
  document.querySelector('#gameImages').classList.remove('m-display');
  document.querySelector('#gameImages').classList.remove('h-display');
}

function closeBtn(){
  instructionCloseBtn = document.getElementById("closeInfo")
  let welcomeClose = document.getElementById("welcome")
  instructionsBtn.style.display = 'none';
  welcomeClose.style.display = 'none';
  

}

function congratsCloseFN(){
  congratsClose = document.getElementById("congrats");
  congratsClose.style.display = 'none';
  location.reload();
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
let chosen = []

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  score = seconds;
  console.log(seconds + " seconds");
}

/** WHEN DIFFICULTY LEVEL SELECTED THE FUNCTION CALLS FOR A DUPLICATED IMAGES
 * EASY CALLS 12 CARDS
 */

function easy(){
  start();
  total = 6
  level = 'easy'
  document.querySelector('#gameImages').innerHTML = '';
  document.querySelector('#gameImages').classList.add('e-display');
  document.querySelector('#gameImages').classList.remove('h-display');
  shuffle(easySet)
    for (let i = 0; i < easySet.length; i++){
      chosen.push(easySet[i])  
      document.querySelector('.gameImages').innerHTML += `<li><img class='turn' id='${i}' src="assets/images/game-card.jpg" alt="a image of the array"></li>`
    }
}

/** THIS FUNCTIONS CALLS FOR 8 DUPLICATED IMAGES
 * MEDIUM CALLS 16 CARDS
 */
function meduim(){
  start();
  total = 8
  level = 'meduim'
  document.querySelector('#gameImages').innerHTML = '';
  document.querySelector('#gameImages').classList.add('m-display');
  document.querySelector('#gameImages').classList.remove('h-display');
  shuffle(medSet)
    for (let i =0; i < medSet.length; i++){
      chosen.push(medSet[i]) 
      document.querySelector('.gameImages').innerHTML += `<li><img class='turn' id='${i}' src="assets/images/game-card.jpg" alt="a image of the array"></li>`
    }
}
/** THIS FUNCTIONS CALLS FOR 10 DUPLICATED IMAGES
 * MEDIUM CALLS 20 CARDS
 */
function hard(){
  start();
  total = 10
  level = 'hard'
  document.querySelector('#gameImages').innerHTML = '';
  document.querySelector('#gameImages').classList.add('h-display');
  shuffle(hardSet)
    for (let i =0; i < hardSet.length; i++){
      chosen.push(hardSet[i]) 
    document.querySelector('.gameImages').innerHTML += `<li><img class='turn' id='${i}' src="assets/images/game-card.jpg" alt="a image of the array"></li>`
  }
}

function play() {
  var ting = document.getElementById("ting");
  ting.play();
  }

function sound() {
  var fire = document.getElementById("fireworks");
  fire.play();
  // var ting = document.getElementById("ting");
  // ting.sound();
}
/////** GAME LOGIC */////////

// //declaring global variables so they can be used throughout code
let array1 =[]
let onscreen = []

//score 

let current = ''

// START:  1st FUNCTION : Excepts to variables, the image (card) and the Images picture (cardSec)
function match(cardSrc, card) {

  //this is used to tell the algorithm what is displayed on the screen, used to find what cards to flip back
  onscreen.push(card)
  
  //these lines of code are used as the comparision (next if statement below)
  array1.push(card.target.src)
  let array2 = []
  array2.push(card.target.src)
  //creates new array of the card source
  let gotit = array1.filter(element => array2.includes(element));
  
  //MATCHED: If matched there are images in the new array that have the same src
  if(gotit[0] === gotit[1]){

    card.target.classList.remove('turn','animate__animated','animate__flipInY');
    play()
    gotit = []
    array1 = []
    array2 = []
    onscreen = []

    //adding score
    current++;

    //added score to page

    document.getElementById('score').innerHTML = "You have matched"  + `${current}` + " / " + `${total}`;
    congMessage()

  } else {
  //UNMATCHED: Two images in the array but do not match
    if(array1.length == 2 && array2.length == 1)  {
      array1 = []
      array2 = []

      //send the unmatched cards to the function (close) that flips them back
      for (x in onscreen){
        close(onscreen[x])
      };
  }
}
}

function congMessage() {
   if(current === total) {
    end();
    sound();
    document.getElementById('congrats').style.display = 'block';
    document.getElementById('congrats').innerHTML = `
    <button id="closeWel"><i class="fa-solid fa-xmark"></i></button>
    <h1>Congratulations!!</h1>
    <h2>Your a winner</h2>
    <p>You completed the ${level} level in ${score} seconds.</p>`;

  } else {
    console.log('no')
  }
}

// Second FUNCTION: Flips the unmatched card back to orginal src

function close(indicard){

  if(indicard.target.className === 'turn animate__animated animate__flipInY')
  {
    setTimeout(function()  { 
    //im just changing the CSS class back so they can be seleted again 
    indicard.target.className = 'turn'
    //and then switching the image back
    indicard.target.src="assets/images/game-card.jpg"; }, 1000);
    
  } else {

    //console.log('did match')

  return null;

  }
  
}

document.addEventListener('click', (card) => {
  if(card.target.className == 'turn'){
    //console.log(card.target.src)
    card.target.classList.add('animate__animated', 'animate__flipInY');
    //as we now have an array of random images with a index and all the grey images have an id, we can just marry the two together
    card.target.src=`assets/images/${chosen[card.target.id]}.jpg`
    match(`${chosen[card.target.id]}`,card)
  }
});



/////** END OF GAME LOGIC */////////



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function diffFunction() {
    document.getElementById("diffDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click' , 
  function(event) {
    if (!event.target.matches('.dropbtn')) {
      var drop = document.getElementsByClassName("diff-dropdown-content");
      var i;
      for (i = 0; i < drop.length; i++) {
        
        var openDropdowns = drop[i];
        
        if (openDropdowns.classList.contains('show')) {
          openDropdowns.classList.remove('show');
        }
      }
    }
  })


  function hamFunction() {
    document.getElementById("hamDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hamDropbtn')) {
      var dropdowns = document.getElementsByClassName("ham-dropdown-content");
      var a;
      for (a = 0; a < dropdowns.length; a++) {
        var openDropdown = dropdowns[a];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }