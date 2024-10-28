"use strict";

import { maze } from "./maze.js";

window.addEventListener("load", start);

// ****** CONTROLLER ******
// #region controller

function start() {
    console.log(`Javascript kører`);
    console.log(maze);
    
}

// #endregion controller

// ****** VIEW ******
// #region view
function createVisualBoard() {
    const grid = document.querySelector("#grid");

    grid.style.setProperty("--GRID_COLUMNS", GRID_COLS);

    for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            grid.appendChild(cell);
        }
    }
}


// #endregion view
