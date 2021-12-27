// 'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

// Get the notification object using its Id
let notification = document.getElementById("notification");
let info_icon = document.getElementById("info_icon");
let text_notification = document.getElementById("text_notification");
let arrow_id = document.getElementById("arrow_id");
let cancel = document.getElementById("cancel");

let speedAndTimoutNotification = 2500;
let speedProgressBarAnimation = 1000;

let nunmberofallCheckboxes;
let nunmberofCheckedCheckboxes;
let percentageOfCheckedCheckboxes;

let x;
let checkbox;
let item;

if(x === undefined){
    x = "true";
}

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

window.onload = function () {
    numberOfCheckedCheckboxes();
    x = localStorage.getItem("someVarKey");
    console.log(x);

    if(x === "false") {
        notification.style.width = "5%";
        text_notification.style.display = "none";
        text_notification.style.arrow_id = "none";
    }
}


// Function to increase image size
function resizeNotification() {
    if (x === "true") {
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        info_icon.style.display = "flex";

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $("div.notification").animate({
                width: '-=80%'
            }, speedAndTimoutNotification);
        } else {
            $("div.notification").animate({
                width: '-=95%'
            }, speedAndTimoutNotification);
        }
        x = "false";
    } else {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $("div.notification").animate({
                width: '+=80%'
            }, speedAndTimoutNotification);
            info_icon.style.display = "none";
        } else {
            $("div.notification").animate({
                width: '+=95%'
            }, speedAndTimoutNotification);
        }
/*        $("div.notification").animate({
            width: '+=95%'
        }, speedAndTimoutNotification);*/
        setTimeout(myGreeting, speedAndTimoutNotification);
        function myGreeting() {
            text_notification.style.display = "block";
            arrow_id.style.display = "flex";
        }
        x = "true";
    }
    localStorage.setItem("someVarKey", x);
}

function numberOfCheckedCheckboxes (){
    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    nunmberofCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;

    percentageOfCheckedCheckboxes = Math.round((nunmberofCheckedCheckboxes / nunmberofallCheckboxes) *100);

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
        cancel.style.cursor = 'pointer';
    } else {
        cancel.style.color = '#4C5A69';
        cancel.style.background = '#E1E5EB';
        cancel.style.opacity = '0.4';
        cancel.style.cursor = 'default';
    }
}

document.addEventListener("DOMContentLoaded", function(){
    checkbox = document.querySelectorAll("input[type='checkbox']");

    for(item of checkbox){
        item.addEventListener("click", function(){
            localStorage.s_item ?
                localStorage.s_item = localStorage.s_item.indexOf(this.id+",") == -1
                    ? localStorage.s_item+this.id+","
                    : localStorage.s_item.replace(this.id+",","") :
                localStorage.s_item = this.id+",";
        });
    }

    if(localStorage.s_item){ // verifico se existe localStorage
        for(item of checkbox){ // existe, percorro as checkbox
            item.checked = localStorage.s_item.indexOf(item.id+",") != -1 ? true : false;
        }
    }
});