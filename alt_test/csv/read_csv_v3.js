$(document).ready(function() {
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