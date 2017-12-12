// This changes everything
"use strict";

function randVal(num,append){
    append = append || '';
    return (Math.random()>0.5?-1:1) * (Math.random()*num).toFixed(2) + append;
}

function randomTransform(){
  return 'translate3d(0,0,' + randVal(0,'px') + ') skewX(' + randVal(10,'deg') + ') scale3d(' + randVal(2,',') + randVal(2,',') + randVal(2) + ') rotate3d(' + randVal(1,',')  + randVal(1,',') + randVal(1) + ',10deg)';
}
function randomEndTransform(){
  return 'translate3d(0,0,' + randVal(200,'px') + ') skewX(' + randVal(10,'deg') + ') scale3d(' + randVal(4,',') + randVal(4,',') + randVal(4) + ') rotate3d(' + randVal(1,',')  + randVal(1,',') + randVal(1) + ',10deg)';
}


function init(){
  
  var _HTML = document.documentElement,
      _NAV = document.querySelector('nav'),
      _IDENTITY = _NAV.querySelector('.identity'),
      _LOGO = _NAV.querySelector('.identity>a'),
      _LOGO_SHADOW = _LOGO.querySelector('.shadow'),
      _LOGO_GRAPHIC = _LOGO.querySelector('.graphic'),
      _TAGLINE = _IDENTITY.querySelector('.tagline');

  function dockLogo(){
    var dockPosition = window.innerHeight - 100,
        navBottom = window.scrollY || document.documentElement.scrollTop,
        minScale = 0.4;

    if(window.scrollY > dockPosition){
      navBottom = dockPosition;
    }
    if(navBottom > 10){
      _HTML.classList.add('nav-docking');
    } else {
      _HTML.classList.remove('nav-docking');
    }

    _NAV.style.bottom = navBottom.toFixed(2) + 'px';
    _TAGLINE.style.opacity = (1-navBottom/dockPosition*2).toFixed(2);
    _TAGLINE.style.marginTop = -(_TAGLINE.clientHeight*navBottom/dockPosition).toFixed(2) + 'px';
    _IDENTITY.style.transform = 'scale(' + (minScale + (1-minScale)*(1-navBottom/dockPosition)).toFixed(2) + ')';
  }

  function animateLines(){
    if(window.scrollY > window.innerHeight/2){
      _HTML.classList.remove('animate');
    } else {
      _HTML.classList.add('animate');
    }
  }


    window.addEventListener('scroll',dockLogo);
    window.addEventListener('scroll',animateLines);
    window.addEventListener('resize',dockLogo);
    dockLogo();


  View('.slideshow');


}


// ================
