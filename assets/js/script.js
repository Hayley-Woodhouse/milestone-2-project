/** Global variables */
let instructionsBtn = document.getElementById('openInfo');
let welcomeScreen = document.getElementById('welcome');
let scoreBoard = document.getElementById('scores');
let gameboard = document.getElementById('game');
let menu = document.getElementById('menu');
let final = document.getElementById('score');
let playagain = document.getElementById('playagain');
let soundControler = document.getElementById("soundControl");

/** Event listeners */
let instructionOpenWindow = document.getElementById('openWin').addEventListener('click', openBtn);
let instructionCloseBtn = document.getElementById("closeInfo").addEventListener('click', closeBtn);
let welcomeClose = document.getElementById("welcome").addEventListener('click', closeBtn);
let soundControl = document.getElementById("soundControl").addEventListener('click', soundOnOff);
let playagainbut = document.getElementById('playagain').addEventListener('click', playAgin)
let easyGameStart = document.getElementById("easyGameStart").addEventListener('click', easy);
let medGameStart = document.getElementById("medGameStart").addEventListener('click', meduim);
let hardGameStart = document.getElementById("hardGameStart").addEventListener('click', hard);

/** Array for images */
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
let chosen = []
let myname = ''
let array1 =[]
let onscreen = []
let current;

/** Event listeners */
let easyBtn = document.getElementById('easyGame').addEventListener('click', easy);
let medBtn = document.getElementById('medGame').addEventListener('click', meduim);
let hardBtn = document.getElementById('hardGame').addEventListener('click', hard);

let totalScores = new Map();
let congrationsmenu;

/** Open button function, clears page when message window opens */
function openBtn(){
  welcomeScreen.style.display = 'none';
  menu.style.display = 'none';
  scoreBoard.style.display = 'none';
  gameboard.style.display = 'block';
  instructionsBtn.style.display = 'block';
  document.querySelector('#gameImages').innerHTML = '';
  document.querySelector('#gameImages').classList.remove('e-display');
  document.querySelector('#gameImages').classList.remove('m-display');
  document.querySelector('#gameImages').classList.remove('h-display');
}

/** Close button on windows */
function closeBtn(){
  menu.style.display = 'block';
  instructionCloseBtn = document.getElementById("closeInfo")
  let welcomeClose = document.getElementById("welcome")
  instructionsBtn.style.display = 'none';
  welcomeClose.style.display = 'none';
}

/** Close button on congrats windows to show score */
function congratsCloseFN(){
  congratsClose = document.getElementById("congrats");
  congratsClose.style.display = 'none';
  location.reload();
}

/* Shuffle cards, code used from http://stackoverflow.com/a/2450976*/
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

/** Time function that displays length of time to complete game to congrats message and scoreboard */
function start() {
  menu.style.display = 'none';
  myname = document.getElementById("myText").value;
  startTime = new Date();
};

/** End timer, the start and end times take a date stamp and the start is taken off the end */
function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;
  // get seconds 
  var seconds = Math.round(timeDiff);
  score = seconds;
  // //set scoreboard
  totalScores.set(myname, score);
}

/** Easy function that calls 6 dupliacted cards, clears screen and adds matched totals.
*/
function easy(){
  current = 0
  score = []
  chosen = []
  instructionsBtn.style.display = 'none';
  scoreBoard.style.display = 'none';
  playagain.style.display = 'none';
  final.style.display = 'none'
  gameboard.style.display = 'block';
  welcomeScreen.style.display = 'none'
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

/** Medium function that calls 8 dupliacted cards, clears screen and adds matched totals.
*/
function meduim(){
  current = 0
  score = []
  chosen = []
  instructionsBtn.style.display = 'none';
  scoreBoard.style.display = 'none';
  playagain.style.display = 'none';
  final.style.display = 'none';
  gameboard.style.display = 'block';
  welcomeScreen.style.display = 'none';
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
/** Hard function that calls 10 dupliacted cards, clears screen and adds matched totals.
*/
function hard(){
  current = 0
  score = []
  chosen = []
  instructionsBtn.style.display = 'none';
  scoreBoard.style.display = 'none';
  playagain.style.display = 'none';
  final.style.display = 'none'
  gameboard.style.display = 'block';
  welcomeScreen.style.display = 'none'
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

/* Sound functions */
function play() {
  var ting = document.getElementById("ting");
  ting.play();
  }

function sound() {
  var fire = document.getElementById("fireworks");
  fire.play();
}

var ting = document.getElementById("ting");
var fire = document.getElementById("fireworks");

function enableMute() { 
  ting.muted = true;
  fire.muted = true;
} 

function disableMute() { 
  ting.muted = false;
  fire.muted = false;
}

/* Sound function that toggles font awesome image and enables and disables the sound */
function soundOnOff(){
  if(soundControler.classList != "fa-volume-xmark"){
    soundControler.classList.toggle("fa-volume-xmark");
   } 
   if (soundControler.classList == "fa-volume-high"){
     disableMute()
   }
   else {
     enableMute();
  }
}

/** GAME LOGIC */
/* START:  1st FUNCTION : Excepts to variables, the image (card) and the Images picture (cardSec)*/
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
    final.style.display = 'block';
    document.getElementById('score').innerHTML = `matched ${current} / ${total}`;
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
/* Congrats functions that passes the name the level played and the time taken to the inner html */
function congMessage() {
   if(current === total) {
    end();
    sound();
    congrationsmenu = document.getElementById('congrats')
    document.getElementById('congrats').style.display = 'block';
    document.getElementById('congrats').innerHTML = `
    <h1>Congratulations!!</h1>
    <h2>You're a winner</h2>
    <p>${myname} You completed the ${level} level in ${score} seconds.</p>
    <button id="seeScores" onclick=showscores()>See Scores</button>`;
  }
}

/* Score functions that displays the name, level and time the player has played */
function showscores(){
  if(scoreBoard.style.display == 'none'){
      scoreBoard.style.display = 'block';
      playagain.style.display = 'block';
      congrationsmenu.style.display = 'none';
      gameboard.style.display = 'none';
      totalScores.forEach( (value, key, map) => {
         scoreBoard.innerHTML = `${key} , ${value} , ${level} `
      });
  }
}

/* Reloads page on play again button */
function playAgin(){
  location.reload();
}

/* Card flip functions, flips the unmatched card back to orginal src */
function close(indicard){
  if(indicard.target.className === 'turn animate__animated animate__flipInY')
  {
    setTimeout(function()  { 
    //turns card back
    indicard.target.className = 'turn'
    indicard.target.src="assets/images/game-card.jpg"; }, 1000);
  } else {
  return null;
  }
}

document.addEventListener('click', (card) => {
  if(card.target.className == 'turn'){
    card.target.classList.add('animate__animated', 'animate__flipInY');
    //as we now have an array of random images with a index and all the grey images have an id, we can just marry the two together
    card.target.src=`assets/images/${chosen[card.target.id]}.jpg`
    match(`${chosen[card.target.id]}`,card)
  }
});

/**  When the user clicks on the button, 
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
