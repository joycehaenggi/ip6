'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

let notification = document.getElementById("notification");
let info_icon = document.getElementById("info_icon");
let text_notification = document.getElementById("text_notification");
let arrow_id = document.getElementById("arrow_id");
let nextStep = document.getElementById("nextStep");
let nextStepLink = document.getElementById("nextStep-Link");

let speedAndTimoutNotification = 900;
let speedProgressBarAnimation = 1000;

let nunmberofallCheckboxes;
let nunmberofCheckedCheckboxes;
let percentageOfCheckedCheckboxes;

let fullNotification;
let checkbox;
let item;

window.onload = function () {
    numberOfCheckedCheckboxes();
    fullNotification = localStorage.getItem("someVarKey");

    if (fullNotification === "false") {
        notification.style.width = "5%";
        text_notification.style.display = "none";
        text_notification.style.arrow_id = "none";
    }
}

if (fullNotification === undefined) {
    fullNotification = "true";
}

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


// Function to decrease notification size
function decreaseNotification() {
    var y = window.matchMedia("(max-width: 700px)")

    if (fullNotification === "true") {
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        info_icon.style.display = "flex";

        $("div.notification").animate({
            width: '-=95%'
        }, speedAndTimoutNotification
        );

        fullNotification = "false";

    } else {

        myFunction(y) // Call listener function at run time
        y.addEventListener('change', myFunction) // Attach listener function on state changes

        function myFunction(y) {
            if (y.matches) { // If media query matches
                info_icon.style.display = "none";
            } else {
                info_icon.style.display = "flex";
            }
        }

        $("div.notification").animate({
            width: '+=95%'
        }, speedAndTimoutNotification
        );

        setTimeout(myGreeting, speedAndTimoutNotification);

        function myGreeting() {
            text_notification.style.display = "block";
            arrow_id.style.display = "flex";
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                info_icon.style.display = "none";
            }
        }

        fullNotification = "true";
    }
    localStorage.setItem("someVarKey", fullNotification);
}

function numberOfCheckedCheckboxes() {
    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    nunmberofCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    percentageOfCheckedCheckboxes = Math.round((nunmberofCheckedCheckboxes / nunmberofallCheckboxes) * 100);

    $("div.progress_in_percent").animate({
        width: +percentageOfCheckedCheckboxes + '%',
        innerHTML: percentageOfCheckedCheckboxes,
    }, speedProgressBarAnimation,
    );

    document.getElementById("progress_in_percent").innerHTML = percentageOfCheckedCheckboxes + '%';
    if (percentageOfCheckedCheckboxes === 0) {
        document.getElementById("progress_in_percent").innerHTML = '';
    }

    if (percentageOfCheckedCheckboxes === 100) {
        nextStep.style.color = 'white';
        nextStep.style.background = '#687D99';
        nextStep.style.opacity = '1.0';
        nextStep.style.cursor = 'pointer';
        nextStepLink.style.pointerEvents = 'auto';
    } else {
        nextStep.style.color = '#4C5A69';
        nextStep.style.background = '#E1E5EB';
        nextStep.style.opacity = '0.4';
        nextStep.style.cursor = 'default';
        nextStepLink.style.pointerEvents = 'none';
    }
}

nextStep.onmouseover = function () {
    numberOfCheckedCheckboxes()

    if (percentageOfCheckedCheckboxes === 100) {
        nextStep.style.background = "#4C5A69";
    }
};

nextStep.onmouseout = function () {
    numberOfCheckedCheckboxes()

    if (percentageOfCheckedCheckboxes === 100) {
        nextStep.style.background = "#687D99";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    checkbox = document.querySelectorAll("input[type='checkbox']");

    for (item of checkbox) {
        item.addEventListener("click", function () {
            localStorage.s_item ?
                localStorage.s_item = localStorage.s_item.indexOf(this.id + ",") == -1
                    ? localStorage.s_item + this.id + ","
                    : localStorage.s_item.replace(this.id + ",", "") :
                localStorage.s_item = this.id + ",";
        });
    }

    if (localStorage.s_item) { // verifico se existe localStorage
        for (item of checkbox) { // existe, percorro as checkbox
            item.checked = localStorage.s_item.indexOf(item.id + ",") != -1 ? true : false;
        }
    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var arrowDownChange = this.element;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}