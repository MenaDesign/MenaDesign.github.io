var html = document.querySelector('html');
var switcher = document.querySelector('#switcher');
var rays = document.querySelectorAll('.noRays');
var logo = document.querySelector("#logo");
var timeless = document.querySelector('span.timeless');
var closeContactBtn = document.querySelector('.close'); 
var contactBtn = document.querySelector('.contact-me');
var popup = document.querySelectorAll('#contactPopup');

function toggleClass(el, _class) {

  if (el && el.classList.contains(_class)) {

    el.classList.remove(_class);
  }
  else if (el){

    el.classList.add(_class);
  }
  else {

    console.log("Element not found");
  }
}

function toggleMultipleEl(el, _class){
  for (var i = 0; i < el.length; i++){
    toggleClass(el[i], _class);
  }
}

//on click toggle some classes
switcher.addEventListener("click", function(){
  toggleClass(html, 'darkMode');
  toggleClass(html, 'lightMode');
  toggleClass(switcher, 'darkLogo');
  toggleClass(switcher, 'lightLogo');
  toggleMultipleEl(rays, 'noRays');
  toggleMultipleEl(rays, 'lightRays');
  logo.title = logo.title === "Turn on the light..." ? "Turn off the light..." : "Turn on the light...";
});

closeContactBtn.addEventListener("click", function(e){
  toggleMultipleEl(popup, 'hide');
});


contactBtn.addEventListener("click", function(){
  toggleMultipleEl(popup, 'hide');

});

