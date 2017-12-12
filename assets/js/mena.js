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

  //SVG buttons
  if('SVGButton' in window){
    new SVGButton(
      document.body.querySelectorAll('.btn'),
      '0 0 28 10',
      'M 0.108245 3.33245C 0.312457 1.80982 1.64228 0.811825 3.16355 0.597672C 7.40919 0 11.427 0 14 0L 14 0 16.573 9.0267e-34 20.5908 -1.11022e-16 24.8365 0.597672C 26.3577 0.811825 27.6875 1.80983 27.8918 3.33246C 28.0361 4.40858 28.0361 5.59142 27.8918 6.66753C 27.6875 8.19017 26.3577 9.18817 24.8364 9.40233C 20.5908 10 16.573 10 14 10L 14 10C 11.427 10 7.40919 10 3.16354 9.40233C 1.64228 9.18817 0.312457 8.19018 0.108245 6.66755C -0.0360816 5.59143 -0.0360816 4.40857 0.108245 3.33245Z'
    );
  }

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
