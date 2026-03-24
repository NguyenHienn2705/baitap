class Point {
    #x;
    #y;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
    }

    clone() {
        return new Point(this.#x, this.#y);
    }

    inTT() {
        console.log(`(${this.#x}, ${this.#y})`);
    }
}

class LineSegment {
    #d1;
    #d2;

    constructor(d1 = new Point(), d2 = new Point()) {
        this.#d1 = d1.clone();
        this.#d2 = d2.clone();
    }

    inTT() {
        console.log("Diem 1:");
        this.#d1.inTT();

        console.log("Diem 2:");
        this.#d2.inTT();
    }
}