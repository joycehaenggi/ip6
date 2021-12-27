'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



/*// Function to increase image size
function resizeNotification() {
    if (x === 0) {

        let id = null;
        let pos = 100;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos === 5) {
                clearInterval(id);
            } else {
                pos--;
                notification.style.width = pos + "%";
            }
        }

        notification.style.transition = "transform 25s ease";
        notification.style.float = "right";
        notification.style.marginBottom = "calc(40 * 0.063em)";
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        x = 1;
    } else {

        x = 0;

        let id = null;
        let pos = 5;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos === 100) {
                clearInterval(id);
                text_notification.style.display = "block";
                arrow_id.style.display = "flex";
            } else {
                pos++;
                notification.style.width = pos + "%";
            }
        }

    }
}*/


var x;
if(x === undefined){
    x = true;
}

// Get the notification object using its Id
var notification = document.getElementById("notification");
var text_notification = document.getElementById("text_notification");
var arrow_id = document.getElementById("arrow_id");

var speedAndTimout = 2500;

// Function to increase image size
function resizeNotification() {
    if (x) {
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        $("div.notification").animate({
            width: '-=95%'
        }, speedAndTimout);
        x = false;
    } else {
        $("div.notification").animate({
            width: '+=95%'
        }, speedAndTimout);
        setTimeout(myGreeting, speedAndTimout);
        function myGreeting() {
            text_notification.style.display = "block";
            arrow_id.style.display = "flex";
        }
        x = true;
    }
}




/*// Function to increase image size
function resizeNotification() {

    var id = setInterval(frame, 10);
    var pos;

    if (x) {
        pos = 100;
        notification.style.transition = "transform 25s ease";
        notification.style.float = "right";
        notification.style.marginBottom = "calc(40 * 0.063em)";
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
    } else {
        pos = 5;
    }

    function frame() {
        if (x) {
            if (pos === 5) {
                clearInterval(id);
                x = false;
            } else {
                pos--;
                notification.style.width = pos + "%";
            }
        }
        else {
            if (pos === 100) {
                clearInterval(id);
                text_notification.style.display = "block";
                arrow_id.style.display = "flex";
                x = true;
            } else {
                pos++;
                notification.style.width = pos + "%";
            }
        }
    }
}*/
