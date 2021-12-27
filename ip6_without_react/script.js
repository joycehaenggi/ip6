'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


var x;
if(x === undefined){
    x = true;
}

// Get the notification object using its Id
var notification = document.getElementById("notification");
var text_notification = document.getElementById("text_notification");
var arrow_id = document.getElementById("arrow_id");
var cancel = document.getElementById("cancel");

var speedAndTimoutNotification = 2500;
var speedProgressBarAnimation = 1000;

var nunmberofallCheckboxes;
var nunmberofCheckedCheckboxes;
var percentageOfCheckedCheckboxes;

// Function to increase image size
function resizeNotification() {
    if (x) {
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        $("div.notification").animate({
            width: '-=95%'
        }, speedAndTimoutNotification);
        x = false;
    } else {
        $("div.notification").animate({
            width: '+=95%'
        }, speedAndTimoutNotification);
        setTimeout(myGreeting, speedAndTimoutNotification);
        function myGreeting() {
            text_notification.style.display = "block";
            arrow_id.style.display = "flex";
        }
        x = true;
    }
}

function numberOfCheckedCheckboxes (){
    // console.log(document.querySelectorAll('input[type="checkbox"]:checked').length);

    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    nunmberofCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;

    percentageOfCheckedCheckboxes = (nunmberofCheckedCheckboxes / nunmberofallCheckboxes) *100;

    console.log(percentageOfCheckedCheckboxes);

    $("div.progress_in_percent").animate({
        width: +percentageOfCheckedCheckboxes+'%'
    }, speedProgressBarAnimation);

    document.getElementById("progress_in_percent").innerHTML = percentageOfCheckedCheckboxes+'%';
    if(percentageOfCheckedCheckboxes === 0){
        document.getElementById("progress_in_percent").innerHTML = '';
    }

    if(percentageOfCheckedCheckboxes === 100){
        cancel.style.color = 'white';
        cancel.style.background = '#687D99';
        cancel.style.opacity = '1.0';
    } else {
        cancel.style.color = '#4C5A69';
        cancel.style.background = '#E1E5EB';
        cancel.style.opacity = '0.4';
    }


}
let name = "Nathan";



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
