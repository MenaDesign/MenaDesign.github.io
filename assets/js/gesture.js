
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

gestureZone = document.querySelector('.gestureZone');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 


function handleGesture() {
    if (touchendX >= touchstartX) {

        var prev = document.querySelector('.previous');
        var current = document.querySelector('.current');
        var next = document.querySelector('.next');


          if(prev){
            current.classList.add('next');
            current.classList.remove('current');
            prev.classList.remove("previous");
            prev.classList.remove("prev");
            prev.classList.add("current");
            if(next){
               next.classList.remove('next'); 
            }
            
          }


    }
    
    if (touchendX <= touchstartX) {

        var prev = document.querySelector('.previous');
        var current = document.querySelector('.current');
        var next = document.querySelector('.next');


          if(next){
            current.classList.add('prev');
            current.classList.add('previous');
            current.classList.remove('current');
            next.classList.remove("next");
            next.classList.add("current");
            if(prev){
               prev.classList.remove('prev'); 
               prev.classList.remove('previous'); 
            }

          }

    }
    
}