'use strict';
let nextStep = document.getElementById("nextStep");
let nextStepLink = document.getElementById("nextStep-Link");
let postProcessingBlock = document.getElementById("post-processing-block");
let panel = document.getElementById("panel");

let speedProgressBarAnimation = 1000;

let nunmberofallCheckboxes;
let nunmberofCheckedCheckboxes;
let percentageOfCheckedCheckboxes;

let checkbox;
let item;

window.onload = function () {
    numberOfCheckedCheckboxes();
    names();

    localStorage.getItem('dropdownWasOpen')
}

function names(){
    document.getElementById("actualStep").innerHTML = step_arr[step];
    document.getElementById("titleName").innerHTML = step_arr[step];
    document.getElementById("titleProgressBar").innerHTML = "Fortschrittsübersicht - "+step_arr[step];
}

if (fullNotification === undefined) {
    fullNotification = "true";
}

function numberOfCheckedCheckboxes() {
    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    nunmberofCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    percentageOfCheckedCheckboxes = Math.round((nunmberofCheckedCheckboxes / nunmberofallCheckboxes) * 100);

    $("div#progress_in_percent").animate({
            width: +percentageOfCheckedCheckboxes + '%',
            // innerHTML: percentageOfCheckedCheckboxes,
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

function evaluationYes(x) {
    var y = document.getElementsByClassName("pP"+x).nextElementSibling;

    postProcessingBlock.style.display = 'block';
    postProcessingBlock.style.height =  "70px";
    panel.style.maxHeight = panel.scrollHeight + "px";
    // console.log(y);
}

function evaluationNo(x){
    postProcessingBlock.style.display = 'none';
    postProcessingBlock.style.height =  "0";
}

function nextStepCounter(){
    if(step !== step_arr.length-1){
        step++;
    } else {
        step = 0;
    }


    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    let i = 0;
    for (i = 0; i < nunmberofallCheckboxes; i++) {
        document.getElementById("confirm" + i).checked = false;
    }
    // numberOfCheckedCheckboxes()

    names();
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
            panel.style.borderBottom = "none"
            // localStorage.setItem('dropdownWasOpen', 'true');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.borderBottom = "1px solid #E1E5EB"
        }
    });
}