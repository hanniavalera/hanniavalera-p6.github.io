/* when clicking on the view work you will be redirected to the wireframe link */
function launchProjectWireframe(){
    location.href ='https://balsamiq.cloud/s33v7hr/plw9nq4';
}
/* when clicking on the view work you will be redirected to the swam project link */
function launchProjectSwarm() {
    location.href = 'https://valerahannia-a4.glitch.me/';
}

/* using JavaScript to add this class to the .dropdown-content
container when the user clicks on the Learn More button */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('#more-information-button-w')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
/* using JavaScript to add this class to the .dropdown-content-2
container when the user clicks on the Learn More button */
  function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('#more-information-button-p')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-2");

    if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
    }
      
    }
  }