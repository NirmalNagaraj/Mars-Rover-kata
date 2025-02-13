

const Plateau = require("./plateau");

const grid = [5, 5];
const obstacles = [[1, 1], [2, 2]];
const count = 2;
const roverPos = [[0, 1, "N"], [0, 4, "N"]];
const commands = ["LLFB", "LLFB"];

const plat = new Plateau(grid, obstacles, count, roverPos, commands);