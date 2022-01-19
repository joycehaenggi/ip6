/*
$.ajax({
    url: 'csv_data.csv',
    dataType: 'text',
    success: function(data) {
        let lines = data.split('\n');
        let fields = lines[0].split(',');

        var output = [];

        for(let i = 1; i < lines.length; i++){
            let current = lines[i].split(',');
            let doc = {};
            for(let j = 0; j < fields.length; j++){
                doc[fields[j]] = current[j];
            }
            output.push(doc);
        }

        console.log(output[1].heading1);
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
}).done(successFunction);

function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        if (singleRow === 0) {
            table += '<thead>';
            table += '<tr>';
        } else {
            table += '<tr>';
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
            if (singleRow === 0) {
                table += '<th>';
                table += rowCells[rowCell];
                table += '</th>';
            } else {
                table += '<td>';
                table += rowCells[rowCell];
                table += '</td>';
            }
        }
        if (singleRow === 0) {
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
        } else {
            table += '</tr>';
        }
    }
    table += '</tbody>';
    table += '</table>';
    $('body').append(table);
}



function CSVToArray( strData, strDelimiter ){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
        ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
            );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );

}

function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);

        let lines = data.split('\n');
        let fields = lines[0].split(',');

        var output = [];

        for(let i = 1; i < lines.length; i++){
            let current = lines[i].split(',');
            let doc = {};
            for(let j = 0; j < fields.length; j++){
                doc[fields[j]] = current[j];
            }
            output.push(doc);
            console.log(output);
        }
}

$('document').ready(function(){
    console.log(successFunction("csv_data.csv"));
});
*/

$(document).ready(function() {
/*    $.ajax({
        type: "GET",
        url: "csv_data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });*/
    var House = new Array();
    House = processData("heading1,heading2,heading3,heading4,heading5\n" +
        "value1_1,value2_1,value3_1,value4_1,value5_1\n" +
        "value1_2,value2_2,value3_2,value4_2,value5_2");
    console.log(House[1][2]);
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    return lines;
}

/*
function asyncCsv2Array(fileName, separator, callback) {
    // Datei einlesen (benötigt JQuery oder Zepto (bei AppFurnace automatisch enthalten))
    $.get(fileName, function(fileContent){
        // Array für Ergebnis
        var result = [];
        // Eingelesenen Text in ein Array splitten (\r\n, \n und\r sind die Trennzeichen für verschiedene Betriebssysteme wie Windows, Linux, OS X)
        var textArray = fileContent.split(/(\r\n|\n|\r)/gm);
        // Über alle Zeilen iterieren
        for (var i = 0; i < textArray.length; i++) {
            // Nur wenn die Größe einer Zeile > 1 ist (sonst ist in der Zeile nur das Zeilenumbruch Zeichen drin)
            if (textArray[i].length > 1) {
                // Zeile am Trennzeichen trennen
                var elementArray = textArray[i].split(separator);
                // überflüssiges Element am Ende entfernen - nur notwendig wenn die Zeile mit dem Separator endet
                elementArray.splice(elementArray.length - 1, 1);
                // Array der Zeile dem Ergebnis hinzufügen
                result.push(elementArray);
            } // Ende if
        } // Ende for
        callback(result);
    }); // Ende von $.get Aufruf
} // Ende function asyncCsv2Array

asyncCsv2Array("csv_data.csv", ",", function(result) {
    console.log(result);
    // Ausgabe von "Dracula"
    console.log(result[0][0]);
    // Ausgabe von "51.23424"
    console.log(result[0][1]);
});*/
