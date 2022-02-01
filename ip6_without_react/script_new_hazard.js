'use strict';

//Define all variables
let ProbabilityOfOccurrenceValue = null;
let ProbabilityOfOccurrenceValue2 = null;
let severityValue = null;
let resultField1 = document.getElementById("resultRiskPriorityNumber");
let resultField2 = document.getElementById("resultRiskPriorityNumber2");

let transition = "1s";
let color1 = "white";
let color2 = "black";

// get value of the checked radio for ProbabilityOfOccurrence
function displayRadioValueOfProbabilityOfOccurrence(ProbabilityOfOccurrenceRadioButtonGroup) {
    if (ProbabilityOfOccurrenceRadioButtonGroup === 1) {
        ProbabilityOfOccurrenceValue = document.querySelector('input[name="probabilityOfOccurrence"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence").innerHTML = ProbabilityOfOccurrenceValue;
    } else {
        ProbabilityOfOccurrenceValue2 = document.querySelector('input[name="probabilityOfOccurrenceTwo"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence_two").innerHTML = ProbabilityOfOccurrenceValue2;
    }

    checkfProbabilityOfOccurrenceANDSeverity();
}

// get value of the checked radio for severity
function displayRadioValueOfSeverity() {
    severityValue = document.querySelector('input[name="severity"]:checked').value;
    checkfProbabilityOfOccurrenceANDSeverity();

    let severityValueField = document.getElementById("resultSeverity");

    severityValueField.style.animation = "changeBackground 3s 1;";
    severityValueField.innerHTML = severityValue;
    document.getElementById("resultSeverity_two").innerHTML = severityValue;
    document.getElementById("resultSeverity_three").innerHTML = severityValue;

    checkfProbabilityOfOccurrenceANDSeverity();
}

function checkfProbabilityOfOccurrenceANDSeverity() {

    if (severityValue !== null) {
        let NewSeverityValue = parseInt(severityValue, 10);

        if (ProbabilityOfOccurrenceValue !== null) {
            let result = ProbabilityOfOccurrenceValue * severityValue;

            if (result <= 6 && NewSeverityValue !== 5) {
                resultField1.style.background = "#339C74";
                resultField1.style.color = color1;
                resultField1.style.transition = transition;
            } else if ((result >= 7 && result <= 12 && NewSeverityValue !== 5) || (result === 5 && NewSeverityValue === 5)) {
                resultField1.style.background = "#FBDB34";
                resultField1.style.color = color2;
                resultField1.style.transition =  transition;
            } else {
                resultField1.style.background = "#D63837";
                resultField1.style.color = color1;
                resultField1.style.transition = transition;
            }
        }

        if (ProbabilityOfOccurrenceValue2 !== null) {
            let result2 = ProbabilityOfOccurrenceValue2 * severityValue;

            if (result2 <= 6 && NewSeverityValue !== 5) {
                resultField2.style.background = "#339C74";
                resultField2.style.color = color1;
                resultField2.style.transition = transition;
            } else if ((result2 >= 7 && result2 <= 12 && NewSeverityValue !== 5) || (result2 === 5 && NewSeverityValue === 5)) {
                resultField2.style.background = "#FBDB34";
                resultField2.style.color = color2;
                resultField2.style.transition = transition;
            } else {
                resultField2.style.background = "#D63837";
                resultField2.style.color = color1;
                resultField2.style.transition = transition;
            }
        }
    }

}

function addNewTextfield(TopicofnewTextfield) {
    var objTo = document.getElementById(TopicofnewTextfield);
    var divAdd = document.createElement("div");
    divAdd.innerHTML = '<input class="input_customized add_new_input" type="text">';
    objTo.appendChild(divAdd)
}


//Alternative Versions
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

// get value of the checked radio for ProbabilityOfOccurrence
function displayRadioValueOfProbabilityOfOccurrenceAlternative(x) {
    var ele

    if (x === 1) {
        ele = document.getElementsByName('severity');
    } else {
        ele = document.getElementsByName('severity_two');
    }

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            if (x === 1) {
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