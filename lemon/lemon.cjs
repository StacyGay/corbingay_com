import {animate} from "./node_modules/animejs/lib/anime"
console.log("hello world")

let score = 0;
let upgrades = 1;
let scoreboard = document.querySelector("#score");
let cps = document.querySelector("#cps");

function addScore() {
    score = score + upgrades;
    scoreboard.innerHTML = score.toString();
    cpsUpdate();
}

function cpsUpdate() {
    cps.innerHTML = "Your cps is "+upgrades.toString();
}

function addLemonade() {
    if (score < 20) return;
    score = score - 20;
    upgrades = upgrades + 1;
    cpsUpdate();
}

function addLemonBush() {
    if (score < 100) return;
    score = score - 100;
    upgrades = upgrades + 10;
    cpsUpdate();
}
function addLemonTree() {
    if (score < 1000) return;
    score = score - 1000;
    upgrades = upgrades + 100;
    cpsUpdate();
}
function addLemonCity() {
    if (score < 10000) return;
    score = score - 10000;
    upgrades = upgrades + 500;
    cpsUpdate();
}
function addLemonhenge() {
    if (score < 200000) return;
    score = score - 200000;
    upgrades = upgrades + 20000;
    cpsUpdate();
}

addScore()
setInterval(addScore, 1000);

