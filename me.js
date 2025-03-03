export class Me {
    constructor(numParts, startX, startY, radius) {
        const roles = [
            "#deb2d2",
            "#aca3ce",
            "#e5cf9b",
            "#f0d6ce",
        ];

        this.parts = [];

        let angle = 0;

        for (let i = 0; i < numParts; i++) {
            const randRole = Math.floor(Math.random() * roles.length);
            angle += Math.PI / 3;
            //const currRadius = i * (radius + 10);
            const currRadius = 2 * radius;
            const part = {
                role: roles[randRole],
                x: startX + currRadius * Math.cos(angle),
                y: startY + currRadius * Math.sin(angle),
                strength: radius,
                shadow: 30,
            }
            this.parts.push(part)
        }
    }

    render(ctx) {
        this.parts.forEach((part) => {
            ctx.shadowBlur = part.shadow;
            ctx.shadowColor = part.role;

            ctx.beginPath();
            ctx.arc(part.x, part.y, part.strength, 0, Math.PI * 2);
            ctx.fillStyle = part.role;
            ctx.fill();

            //ctx.lineWidth = 3;
            //ctx.strokeStyle = part.color;
            //ctx.stroke();
        })
    }

    update(target, lerpFactor) {
        parts.forEach((part, index) => {
            part.x += (target[index].x - part.x) * lerpFactor;
            part.y += (target[index].y - part.y) * lerpFactor;
        })
    }
}
