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
    console.log("test");
}