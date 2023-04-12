let map = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];

function drawMap() {
    let table = "";
    table += "<table>"

    console.log(map); //  Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]

    for (let x = 0; x < 5; x++) {
        table += "<tr>"

        for (y = 0; y < 5; y++) {
            table += "<td>" + (map[x][y]) + "</td>"
        }
        table += "</tr>"
    }

    
    table += "</table>"

    document.getElementById("map").innerHTML = table
}


drawMap()


