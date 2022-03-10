
let openWindow = document.getElementById('openWin').addEventListener('click', onBtn);
let instructionsBtn = document.getElementById('openInfo');
let howtoOff = document.getElementById("closeInfo").addEventListener('click', offBtn)

function onBtn(){
  instructionsBtn.style.display = 'block';
}

function offBtn(){
  instructionsBtn.style.display = 'none';
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


