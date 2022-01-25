'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

let notification = document.getElementById("notification");
let info_icon = document.getElementById("info_icon");
let text_notification = document.getElementById("text_notification");
let arrow_id = document.getElementById("arrow_id");
let cancel = document.getElementById("cancel");

let speedAndTimoutNotification = 900;
let speedProgressBarAnimation = 1000;

let nunmberofallCheckboxes;
let nunmberofCheckedCheckboxes;
let percentageOfCheckedCheckboxes;

let fullNotification;
let checkbox;
let item;

if (fullNotification === undefined) {
    fullNotification = "true";
}

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

window.onload = function () {
    numberOfCheckedCheckboxes();
    fullNotification = localStorage.getItem("someVarKey");

    if (fullNotification === "false") {
        notification.style.width = "5%";
        text_notification.style.display = "none";
        text_notification.style.arrow_id = "none";
    }
}


// Function to decrease notification size
function decreaseNotification() {
    var y = window.matchMedia("(max-width: 700px)")

    if (fullNotification === "true") {
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        info_icon.style.display = "flex";

        $("div.notification").animate({
            width: '-=95%'
        }, speedAndTimoutNotification);

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
        }, speedAndTimoutNotification);

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
        width: +percentageOfCheckedCheckboxes + '%'
    }, speedProgressBarAnimation);

    document.getElementById("progress_in_percent").innerHTML = percentageOfCheckedCheckboxes + '%';
    if (percentageOfCheckedCheckboxes === 0) {
        document.getElementById("progress_in_percent").innerHTML = '';
    }

    if (percentageOfCheckedCheckboxes === 100) {
        cancel.style.color = 'white';
        cancel.style.background = '#687D99';
        cancel.style.opacity = '1.0';
        cancel.style.cursor = 'pointer';
    } else {
        cancel.style.color = '#4C5A69';
        cancel.style.background = '#E1E5EB';
        cancel.style.opacity = '0.4';
        cancel.style.cursor = 'default';
    }
}

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
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// get value of the checked radio for Severity
function displayRadioValueOfSeverity() {
    var ele = document.getElementsByName('severity');


    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            document.getElementById("resultSeverity").innerHTML
                = ele[i].value ;
    }
}

// get value of the checked radio for Severity_two
function displayRadioValueOfSeverityTwo() {
    var ele = document.getElementsByName('severity_two');


    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            document.getElementById("resultSeverity_two").innerHTML
                = ele[i].value ;
    }
}


// get value of the checked radio for risk_priority
function displayRadioValueOfRiskPriority() {
    var ele = document.getElementsByName('risk_priority');

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            document.getElementById("resultRiskPriority").innerHTML
                = ele[i].value;
    }
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            document.getElementById("resultRiskPriority_two").innerHTML
                = ele[i].value;
    }
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            document.getElementById("resultRiskPriority_three").innerHTML
                =  ele[i].value;
    }
}