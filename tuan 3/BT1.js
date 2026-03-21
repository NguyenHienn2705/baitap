class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show(){
        console.log(`(${this.x}, ${this.y})`);
    }

    distanceTo(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}

let A = new Point(3, 4);
A.show(); 

let x = Number(prompt("Nhập x cua B: "));
let y = Number(prompt("Nhập y cua B: "));
let B = new Point(x, y);

let C = new Point(-B.x, -B.y);

let O = new Point(0, 0);
console.log("B-O:", B.distanceTo(O));
console.log("A-B:", A.distanceTo(B));