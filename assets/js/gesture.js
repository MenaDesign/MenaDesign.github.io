let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
gestureZone = document.querySelectorAll('.gestureZone');
WebGestureZone = gestureZone[0];
designGestureZone = gestureZone[1];
illustrationGestureZone = gestureZone[2];

WebGestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }

    , false);
WebGestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleWebGesture();
    }

    , false);
designGestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }

    , false);
designGestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleDesignGesture('design');
    }

    , false);
illustrationGestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }

    , false);
illustrationGestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleDesignGesture('illustration');
}, false);

function middleGestureLeft(first, second, third) {
    second.classList.remove('current');
    second.classList.add('prev');
    second.classList.add('previous');
    third.classList.add('current');
    third.classList.remove('next');
    first.classList.remove('prev');
    first.classList.remove('previous');
    second.classList.remove('prev');
}

function middleGestureRight(first, second, third) {
    first.classList.add("current");
    second.classList.add("next");
    first.classList.remove("prev");
    first.classList.remove("previous");
    second.classList.remove("current");
    third.classList.remove("next");
}

function firstGestureLeft(current, next) {
    current.classList.add('previous');
    current.classList.remove('current');
    next.classList.add('current');
    next.classList.remove('next');
}

function lastGestureRight(second, third) {
    second.classList.add("current");
    third.classList.add("next");
    third.classList.remove("current");
    second.classList.remove('previous');
}

function handleDesignGesture(title) {
    var first = document.querySelector('.' + title + '-first');
    var second = document.querySelector('.' + title + '-second');
    // swipe to left
    if (touchendX <= touchstartX) {
        if (first.classList.contains("current")) {
            firstGestureLeft(first, second);
        }
    }
    // swipe to right
    if (touchendX >= touchstartX) {
        if (second.classList.contains("current")) {
            lastGestureRight(first, second);
        }
    }
}

function handleWebGesture() {
    var prev = document.querySelector('.previous');
    var current = document.querySelector('.current');
    var next = document.querySelector('.next');
    var first = document.querySelector('.first');
    var second = document.querySelector('.second');
    var third = document.querySelector('.third');
    // swipe to left
    if (touchendX <= touchstartX) {
        if (current === second) {
            middleGestureLeft(first, second, third)
        } else if (current == first) {
            current.classList.add('prev');
            firstGestureLeft(current, next);
            third.classList.add('next');
        }
    }
    // swipe to right
    if (touchendX >= touchstartX) {
        if (current === second) {
            middleGestureRight(first, second, third)
        }
        if (current === third) {
            lastGestureRight(second, third);
            second.classList.remove("prev");
            first.classList.add("prev");
            first.classList.add("previous");
        }
    }
}