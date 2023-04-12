drawMap()
function drawMap() {
    const row = 5;
    const col = 5;
    let map = new Array(row); // create an empty array of length n
    for (var i = 0; i < row; i++) {
        map[i] = new Array(col); // make each element an array
    }
    console.log(arr); //  Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]
    
    let table = "";
    table += "<table>"
    let nr = 0;

    for (let x = 0; x < row; x++) {
        table += "<tr>"

        for (y = 0; y < col; y++) {
            nr++
            const spot = document.createElement("td")
            table += "<td>" + (nr) + "</td>"
            spot.setAttribute("id", nr)

        }

        table += "</tr>"
    }
    table += "</table>"

    document.getElementById("map").innerHTML = table
}

function test() {
    document.getElementById("7").innerHTML = table
    spot.setAttribute("value", "0")
}


