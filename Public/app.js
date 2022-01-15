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
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

/* Gets the elements with class="gallaryColumn" 
var elements = document.getElementsByClassName("gallaryColumn");

// Decalre "loop" variable
var i;

// Full width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "33%";
  }
}*/

function darkModeFunk() {
  var element = document.body;
  element.classList.toggle("darkMode");

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

