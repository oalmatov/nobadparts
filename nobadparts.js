import { Me } from './me.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const height = canvas.height = canvas.offsetHeight;
const width = canvas.width = canvas.offsetWidth;

const numParts = 6;
const partRadius = 5;
const me = new Me(numParts, width / 2, height / 2, partRadius);

const lerpFactor = 0.03;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    me.render(ctx);
}

function update() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //me.update(target, lerpFactor);

    render();
    requestAnimationFrame(update);
}

render();

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

//canvas.addEventListener("mousemove", (event) => {
//    const rect = canvas.getBoundingClientRect();
//    let mouseX = event.clientX - rect.left;
//    let mouseY = event.clientY - rect.top;
//    target.x = clamp(mouseX, 1, canvas.width - 1);
//    target.y = clamp(mouseY, 1, canvas.height - 1);
//})

