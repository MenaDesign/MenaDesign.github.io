
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
        console.log('right');
        var prev = document.querySelector('.previous');
        console.log(prev);
        var current = document.querySelector('.current');
        console.log(current);
        var next = document.querySelector('.next');
        console.log(next);

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
                console.log('left');
        var prev = document.querySelector('.previous');
        console.log(prev);
        var current = document.querySelector('.current');
        console.log(current);
        var next = document.querySelector('.next');
        console.log(next);

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