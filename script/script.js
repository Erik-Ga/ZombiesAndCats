drawMap()
function drawMap() {

    let table = "";
    table += "<table>"
    let nr = 0;
    const row = 5;
    const col = 5;
    let map = new Array(row); // create an empty array of length n
    for (let x = 0; x < row; x++) {
        table += "<tr>"

        for (y = 0; y < col; y++) {
            const spot = document.createElement("td")
            table += "<td>" + (map[y] = new Array(col)) + "</td>"
        }

        table += "</tr>"
    }
    table += "</table>"
    console.log(arr);
    document.getElementById("map").innerHTML = table
}

function test() {
    document.getElementById("7").innerHTML = table
    spot.setAttribute("value", "0")
}


