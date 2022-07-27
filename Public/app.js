/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("whole-nav").style.top = "0";
  } else {
    document.getElementById("whole-nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
} 

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


function navBarFunct() {
  var x = document.getElementById("mySidenav");
  if (x.className === "mySidenav") {
    x.className += " responsive";
  } else {
    x.className = "mySidenav";
  }
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}


function darkModeFunk() {
  var element = document.body;
  element.classList.toggle("dark");
  
}

function swapImage() {
  if (document.getElementById("light-theme").src.endsWith("Images/CA3.png") == true)//Comparison

  {
    document.getElementById("light-theme").src = "Images/CAinverrt.png";//assignment  
  }
  else if (document.getElementById("light-theme").src.endsWith("Images/CAinverrt.png") == true)
  {
    document.getElementById("light-theme").src = "Images/CA3.png";
  }
}

//Need to sort out sessionStorage this one sort of works but becomes troublesome when refreshing page as it won't remmeber log invert or the switch 

let darkMode = sessionStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".slider", ".title");

const enableDarkMode = () => {
  document.body.classList.add("dark",);
  sessionStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  sessionStorage.setItem("darkMode", "null");
};

if (darkMode === "enabled") {
  enableDarkMode();  
};

darkModeToggle.addEventListener("click", () => {
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});

function showError() {
  alert("Sorry, this is currently not working. Please get in touch via Instagram for the time being.");
  location.reload();
  return false;
}



