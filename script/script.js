drawMap()
function drawMap() 
{
    let arraymap = [,]
    let table = "";
    table += "<table>"
    let nr = 0;

    for (let x = 0; x < 5; x++) {
        table += "<tr>"

        for (y = 0; y < 5; y++) {
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

function test() 
{
    document.getElementById("7").innerHTML = table
    spot.setAttribute("value", "0")
}


