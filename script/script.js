let array = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
var points = 0;
var currentRow = Math.floor(Math.random() * 5); // Current row
var currentCol = Math.floor(Math.random() * 5); // Current column

window.onload = displayArray;
zombiesAnKitties();



// Function to display the array in HTML
function displayArray() {
    var table = "<table>";
    for (var i = 0; i < array.length; i++) {
        table += "<tr>";
        for (var j = 0; j < array[i].length; j++) {
            if (i === currentRow && j === currentCol) {
                table += "<td class='current-pos'>" + "X" + "</td>";
                var imageName = "cat" + (i * array.length + j + 1) + ".jpg"; // Example naming convention for image files
                document.querySelector('.gameimage').src = imageName; // Change image source of element with class "gameimage"
            } else if (array[i][j].includes("Z")) {
                table += "<td class='zombie'>" + array[i][j] + "</td>";
            } else if (array[i][j].includes("K")) {
                table += "<td class='kitty'>" + array[i][j] + "</td>";
            } else {
                var imageName = "cat" + (i * array.length + j + 1) + ".jpg"; // Example naming convention for image files
                table += "<td><img src='" + imageName + "'></td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("array-container").innerHTML = table;
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1);
    document.getElementById("zombie-pos").innerHTML = "Zombie Position: Row " + (zombieRow + 1) + ", Column " + (zombieCol + 1);
    document.getElementById("kitty-pos").innerHTML = "Kitty Position: Row " + (kittyRow + 1) + ", Column " + (kittyCol + 1);
}


// Function to update the current row and column
function updateCurrentPos(row, col) {

    array[currentRow][currentCol] = array[currentRow][currentCol].toString().replace("X", ""); // Revert last position marker
    currentRow = row;
    currentCol = col;
    array[currentRow][currentCol] = "X" + array[currentRow][currentCol].toString(); // Update new position with marker
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1);

    if (array[currentRow][currentCol] === "XK") {
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
        document.getElementById("points").innerHTML = "Poäng: " + points;
    }
    else if( array[currentRow][currentCol] === "XKK")
    {
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
        document.getElementById("points").innerHTML = "Poäng: " + points;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].charAt(0) === "Z") {
                if (Math.random() < 0.6) { // 90% chance of NOT moving
                    continue;
                }
                if (i > currentRow) {
                    if (array[i - 1][j] === "") {
                        array[i - 1][j] = "Z";
                        array[i][j] = "";
                    }
                } else if (i < currentRow) {
                    if (array[i + 1][j] === "") {
                        array[i + 1][j] = "Z";
                        array[i][j] = "";
                    }
                } else if (j > currentCol) {
                    if (array[i][j - 1] === "") {
                        array[i][j - 1] = "Z";
                        array[i][j] = "";
                    }
                } else if (j < currentCol) {
                    if (array[i][j + 1] === "") {
                        array[i][j + 1] = "Z";
                        array[i][j] = "";
                    }
                }
            }
        }
    }

    const currentSquare = array[currentRow][currentCol];
    if (currentSquare.includes("Z")) 
    {
        alert("Game Over!");
        location.reload()
    }


    displayArray(); // Redraw the array with the new current position
}
function zombiesAnKitties() {
    for (let z = 0; z < 2; z++) {
        array[currentRow][currentCol] = array[currentRow][currentCol].toString().replace("X", "");
        let zombieRow = Math.floor(Math.random() * 5)
        let zombieCol = Math.floor(Math.random() * 5)
        array[zombieRow][zombieCol] = "Z" + array[zombieRow][zombieCol].toString(); // Update new position with marker

    }
    for (let k = 0; k < 5; k++) {
        let kittyRow = Math.floor(Math.random() * 5)
        let kittyCol = Math.floor(Math.random() * 5)
        array[kittyRow][kittyCol] = "K" + array[kittyRow][kittyCol].toString(); // Update new position with marker
    }

    document.getElementById("zombie-pos").innerHTML = "Zombie Position: Row " + (zombieRow + 1) + ", Column " + (zombieCol + 1);
    document.getElementById("kitty-pos").innerHTML = "Kitty Position: Row " + (kittyRow + 1) + ", Column " + (kittyCol + 1);
    displayArray();
}

// Function to navigate up in the array
function navigateUp() {
    if (currentRow > 0) {
        updateCurrentPos(currentRow - 1, currentCol);
    }
}

// Function to navigate down in the array
function navigateDown() {
    if (currentRow < array.length - 1) {
        updateCurrentPos(currentRow + 1, currentCol);
    }
}

// Function to navigate left in the array
function navigateLeft() {
    if (currentCol > 0) {
        updateCurrentPos(currentRow, currentCol - 1);
    }
}

// Function to navigate right in the array
function navigateRight() {
    if (currentCol < array[currentRow].length - 1) {
        updateCurrentPos(currentRow, currentCol + 1);
    }
}

