let array = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

var points = 0; // Poäng för att rädda katter ! :)
var currentRow = Math.floor(Math.random() * 5); // Nuvarande row
var currentCol = Math.floor(Math.random() * 5); // Nuvarande column

window.onload = displayArray; 
zombiesAnKitties(); // Kallar på funktionen för att generera kitties + zombies !



// Function för att rita upp hela arrayen!
function displayArray() {
    var table = "<table>";
    for (var i = 0; i < array.length; i++) {
        table += "<tr>";
        for (var j = 0; j < array[i].length; j++) {
            if (i === currentRow && j === currentCol) {
                table += "<td class='current-pos'>" + "X" + "</td>"; // Skapar start position för spelaren, X
                var imageName = "images/cat" + (i * array.length + j + 1) + ".jpg"; // Detta ritar upp/kopplar en unik bild till varje unik <td> 
                document.querySelector('.gameimage').src = imageName;
            } else if (array[i][j].includes("Z")) {
                table += "<td class='zombie'>" + array[i][j] + "</td>"; // Ger en class till <td> som innehåller en zombie Z
            } else if (array[i][j].includes("K")) {
                table += "<td class='kitty'>" + array[i][j] + "</td>"; // Ger en class till <td> som innehåller en kitty K
            } else {
                var imageName = "images/cat" + (i * array.length + j + 1) + ".jpg"; // Detta kopplar en unik bild för varje unik array index
                table += "<td><img src='" + imageName + "' width='50' height='50'></td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("array-container").innerHTML = table;
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1); // Skriver ut nuvarande koordinater för spelaren! :)
}


// Function to update the current row and column
function updateCurrentPos(row, col) {

    array[currentRow][currentCol] = array[currentRow][currentCol].toString().replace("X", ""); // Suddar ut förra positionen för spelaren X innan det att den flyttat sig 
    currentRow = row;
    currentCol = col;
    array[currentRow][currentCol] = "X" + array[currentRow][currentCol].toString(); // Ritar ut X på nya positionen efter att den städat gamla
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1);

    if (array[currentRow][currentCol] === "XK") { // Detta ger 1 poäng ifall X går till samma postion som ett K :)
        alert("Congratulations, you have received a cat!");
        array[currentRow][currentCol] = "X";
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === "K" && i === currentRow && j === currentCol) {
                    array[i][j] = "";
                }
            }
        }
        points++;
        if (points == 5) {
            alert("Grattis!"); // Ifall spelaren får 5 poäng "vinner" spelaren ! 
        }
        document.getElementById("points").innerHTML = "Poäng: " + points;
    }
    else if (array[currentRow][currentCol] === "XKK") { // Detta ger 2 poäng ifall X går till samma postion som två K :)
        alert("Congratulations, you have received cats!");
        array[currentRow][currentCol] = "X";
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === "KK" && i === currentRow && j === currentCol) {
                    array[i][j] = "";
                }
            }
        }
        points++;
        points++;
        if (points == 5) {
            alert("Grattis!"); // Ifall spelaren får 5 poäng "vinner" spelaren ! 
        }
        document.getElementById("points").innerHTML = "Poäng: " + points;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].includes("Z")) {
                if (Math.random() < 0.6) { // % chans att zombien rör på sig eller inte
                    continue;
                }
                if (i > currentRow) { // Detta får zombies Z att röra på sig i arrayen baserat på spelarens nuvarande koordinater! Dem äter även upp kitties K ifall dem råkar gå över dem :c !
                    if (array[i - 1][j] === "" || array[i - 1][j].includes("K")) {
                        array[i - 1][j] = "Z";
                        array[i][j] = "";
                    }
                } else if (i < currentRow) {
                    if (array[i + 1][j] === "" || array[i + 1][j].includes("K")) {
                        array[i + 1][j] = "Z";
                        array[i][j] = "";
                    }
                } else if (j > currentCol) {
                    if (array[i][j - 1] === "" || array[i - 1][j].includes("K")) {
                        array[i][j - 1] = "Z";
                        array[i][j] = "";
                    }
                } else if (j < currentCol) {
                    if (array[i][j + 1] === "" || array[i + 1][j].includes("K")) {
                        array[i][j + 1] = "Z";
                        array[i][j] = "";
                    }
                }
            }
        }
    }

    const currentSquare = array[currentRow][currentCol];
    if (currentSquare.includes("Z")) { // Ifall spelaren X går över samma position som en zombie Z blir det game over 
        alert("Game Over!");
        location.reload()
    }


    displayArray(); // Kallar på funktionen för att rita ut arrayen igen efter alla uppdateringar av koordinater !
}
function zombiesAnKitties() { // Detta är funktionen som skapar kitties K och zombies Z till arrayen med slumpmässiga positioner, dvs två Z och fem stycken K :) !
    for (let z = 0; z < 2; z++) {
        let zombieRow = Math.floor(Math.random() * 5)
        let zombieCol = Math.floor(Math.random() * 5)
        array[zombieRow][zombieCol] = "Z" + array[zombieRow][zombieCol].toString(); // Sätter in zombies Z i arrayen

    }
    for (let k = 0; k < 5; k++) {
        let kittyRow = Math.floor(Math.random() * 5)
        let kittyCol = Math.floor(Math.random() * 5)
        array[kittyRow][kittyCol] = "K" + array[kittyRow][kittyCol].toString(); // Sätter in kitties K i arrayen
    }

    displayArray();
}

// Funktion till knappen för att gå norr
function navigateUp() {
    if (currentRow > 0) {
        updateCurrentPos(currentRow - 1, currentCol);
    }
}

// Funktion till knappen för att gå syd
function navigateDown() {
    if (currentRow < array.length - 1) {
        updateCurrentPos(currentRow + 1, currentCol);
    }
}

// Funktion till knappen för att gå norr väst
function navigateLeft() {
    if (currentCol > 0) {
        updateCurrentPos(currentRow, currentCol - 1);
    }
}

// Funktion till knappen för att gå öst
function navigateRight() {
    if (currentCol < array[currentRow].length - 1) {
        updateCurrentPos(currentRow, currentCol + 1);
    }
}