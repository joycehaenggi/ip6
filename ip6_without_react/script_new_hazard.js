'use strict';
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
    var divAdd2 = document.createElement("dive");
    divAdd2.innerHTML = '<input class="input" type="text" name="fname">';
    objTo2.appendChild(divAdd2)
    // document.getElementById('form').style.height = "37rem";
}