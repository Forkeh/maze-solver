"use strict";

import { maze } from "./maze.js";

window.addEventListener("load", start);

// ****** CONTROLLER ******
// #region controller

function start() {
    console.log(`Javascript kører`);
    console.log(maze);

    createVisualBoard();
}

// #endregion controller

// ****** VIEW ******
// #region view
function createVisualBoard() {
    const grid = document.querySelector("#grid");

    grid.style.setProperty("--GRID_COLUMNS", maze.cols);

    for (let row = 0; row < maze.rows; row++) {
        for (let col = 0; col < maze.rows; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            grid.appendChild(cell);
        }
    }
}

// #endregion view
