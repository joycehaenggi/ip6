'use strict';

// get value of the checked radio for ProbabilityOfOccurrence
function displayRadioValueOfProbabilityOfOccurrence(ProbabilityOfOccurrenceRadioButtonGroup){
    let ProbabilityOfOccurrenceValue;

    if(ProbabilityOfOccurrenceRadioButtonGroup === 1){
        ProbabilityOfOccurrenceValue = document.querySelector('input[name="probabilityOfOccurrence"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence").innerHTML = ProbabilityOfOccurrenceValue;
    } else {
        ProbabilityOfOccurrenceValue = document.querySelector('input[name="probabilityOfOccurrenceTwo"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence_two").innerHTML = ProbabilityOfOccurrenceValue;
    }
}

// get value of the checked radio for severity
function displayRadioValueOfRiskPriority() {
    let severityValue = document.querySelector('input[name="severity"]:checked').value;

    document.getElementById("resultSeverity").innerHTML = severityValue;
    document.getElementById("resultSeverity_two").innerHTML = severityValue;
    document.getElementById("resultSeverity_three").innerHTML = severityValue;
}

function addNewTextfield(TopicofnewTextfield){
    var objTo = document.getElementById(TopicofnewTextfield);
    var divAdd = document.createElement("div");
    divAdd.innerHTML = '<input class="input_customized add_new_input" type="text">';
    objTo.appendChild(divAdd)
}



//Long Variant for new TextFields in separated methods
function addNewDamage() {
    var objTo = document.getElementById('add_new_Damage')
    var divAdd = document.createElement("div");
    divAdd.innerHTML = '<input class="input_customized add_new_input" type="text">';
    objTo.appendChild(divAdd)
}
function addNewMeasures() {
    var objTo2 = document.getElementById('add_new_measures')
    var divAdd2 = document.createElement("div");
    divAdd2.innerHTML = '<input class="input_customized add_new_input" type="text">';
    objTo2.appendChild(divAdd2)
}


//Alternative Versions
// get value of the checked radio for ProbabilityOfOccurrence
function displayRadioValueOfProbabilityOfOccurrenceAlternative(x) {
    var ele

    if(x === 1){
        ele = document.getElementsByName('severity');
    } else {
        ele = document.getElementsByName('severity_two');
    }

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            if(x === 1){
                document.getElementById("resultSeverity").innerHTML = ele[i].value;
            } else {
                document.getElementById("resultSeverity_two").innerHTML = ele[i].value;
            }
    }
}

// get value of the checked radio for severity
function displayRadioValueOfRiskPriorityAlternative() {
    var ele = document.getElementsByName('risk_priority');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("resultSeverity").innerHTML = ele[i].value;
            document.getElementById("resultSeverity_two").innerHTML = ele[i].value;
            document.getElementById("resultSeverity_three").innerHTML = ele[i].value;
            break;
        }
    }
}