let array = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

var currentRow = Math.floor(Math.random() * 5); // Current row
var currentCol = Math.floor(Math.random() * 5); // Current column
window.onload = displayArray;


// Function to display the array in HTML
function displayArray() {
    var table = "<table>";
    for (var i = 0; i < array.length; i++) {
        table += "<tr>";
        for (var j = 0; j < array[i].length; j++) {
            if (i === currentRow && j === currentCol) {
                table += "<td class='current-pos'>" + "X" + "</td>";
            } else {
                table += "<td>" + array[i][j] + "</td>";
            }
        }
        table += "</tr>";
        document.getElementById("array-container").innerHTML = table;
    }
    table += "</table>";
    document.getElementById("array-container").innerHTML = table;
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1);
}

// Function to update the current row and column
function updateCurrentPos(row, col) {
    array[currentRow][currentCol] = array[currentRow][currentCol].toString().replace("X", ""); // Revert last position marker
    currentRow = row;
    currentCol = col;
    array[currentRow][currentCol] = "X" + array[currentRow][currentCol].toString(); // Update new position with marker
    document.getElementById("current-pos").innerHTML = "Current Position: Row " + (currentRow + 1) + ", Column " + (currentCol + 1);
    displayArray(); // Redraw the array with the new current position
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

