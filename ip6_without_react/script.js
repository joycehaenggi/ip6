'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

let notification = document.getElementById("notification");
let info_icon = document.getElementById("info_icon");
let text_notification = document.getElementById("text_notification");
let arrow_id = document.getElementById("arrow_id");
let nextStep = document.getElementById("nextStep");
let nextStepLink = document.getElementById("nextStep-Link");
let postProcessingBlock = document.getElementById("post-processing-block");
let panel = document.getElementById("panel");

let speedAndTimoutNotification = 900;
let speedProgressBarAnimation = 1000;

let nunmberofallCheckboxes;
let nunmberofCheckedCheckboxes;
let percentageOfCheckedCheckboxes;

let fullNotification;
let checkbox;
let item;

var step = 0;
let step_arr = ['CT-Scan Orbita Rekon', 'CT-Daten Segmentierung Orbita', '3D Patientenanatomie', 'Implantatdesign Matching', 'Pre-Processing for SLM Titan Orbita',
                'SLM_Titan', 'Wärmebehandlung SLM Titan', 'Deburring SLM Titan', 'Sand-Blasting SLM Titan', 'Machining SLM Titan Structures'];

window.onload = function () {
    numberOfCheckedCheckboxes();
    names();
    hazardChecklist();
    fullNotification = localStorage.getItem("someVarKey");

    if (fullNotification === "false") {
        notification.style.width = "5%";
        text_notification.style.display = "none";
        text_notification.style.arrow_id = "none";
    }
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
    postProcessingBlock.style.height =  "48px";
    panel.style.maxHeight = panel.scrollHeight + "px";
    // console.log(y);
}

function evaluationNo(x){
    postProcessingBlock.style.display = 'none';
    postProcessingBlock.style.height =  "0";
}

function nextStepCounter(){
    step++;

    nunmberofallCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    let i = 0;
    for (i = 0; i < nunmberofallCheckboxes; i++) {
        document.getElementById("confirm" + i).checked = false;
    }
    // numberOfCheckedCheckboxes()

    names();
    hazardChecklist();
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
//
// function addNewDamage(){
//     var new_input="<input class='testtest' type='text'>";
//     $('#new_damage').append(new_input);
//
// }
//
// function addNewHazard(){
//     var new_div="<div class='testtesttest'></div>";
//     var new_input="<input class='testtest'  type='text'>";
//     $('#test').append(new_div);
//     $('#new_hazard').append(new_input);
//
//     $('#mouseenter .testtesttest').css('margin-bottom', '220px');
//
// }
//
// function moveDiv(getDiv, getValue)
// {
//     var curMargin = parseInt(document.getElementById(getDiv).style.marginLeft);
//     document.getElementById(getDiv).style.marginLeft = curMargin + getValue + "px";
// }


function addNewDamage() {
    var objTo = document.getElementById('add_new_Damage')
    var divAdd = document.createElement("div");
    divAdd.innerHTML = '<input class="input" type="text" name="fname">';
    objTo.appendChild(divAdd)
    document.getElementById('form').style.height = "37rem";

}

function addNewMeasures() {

    var objTo2 = document.getElementById('add_new_measures')
    var divAdd2 = document.createElement("div");
    divAdd2.innerHTML = '<input class="input" type="text" name="fname">';
    objTo2.appendChild(divAdd2)
     document.getElementById('form').style.height = "37rem";


}