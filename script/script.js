drawMap()
function drawMap() {
    let table = "";
    table += "<table>"
    let nr = 0;

    const row = 5;
    const col = 5;
    let map = new Array(row); // create an empty array of length n
    for (var i = 0; i < row; i++) {
        map[i] = new Array(col); // make each element an array
    }
    console.log(map); //  Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]

    for (let x = 0; x < 5; x++) {
        table += "<tr>"

        for (y = 0; y < 5; y++) {
            table += "<td>" + (map[i] = new Array(col)) + "</td>"
            map[1,1] = "X"
        }

        table += "</tr>"
    }
    table += "</table>"

    document.getElementById("map").innerHTML = table
}


