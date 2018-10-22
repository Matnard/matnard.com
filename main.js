import "normalize.css";
import "./components/root/root";
import "./components/header/header";
import "./components/menu/menu";
import "./components/wrapper/wrapper";
import "./sun-tzu/src/components/layout/layout";
import "./components/sombrero/sombrero";
import BaselineGrid from "./sun-tzu/src/components/baselinegrid/baselinegrid";

const grid = new BaselineGrid(document.querySelector('body'));
global.grid = grid;
grid.displayVerticalGrid();
// grid.displayMargins();

console.log('💩');
