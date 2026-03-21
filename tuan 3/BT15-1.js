class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    point_in_circle(p) {
        return this.center.distanceTo(p) <= this.radius;
    }

    rect_in_circle(rectPoints) {
        return rectPoints.every(p => this.point_in_circle(p));
    }

    rect_circle_overlap(rectPoints) {
        return rectPoints.some(p => this.point_in_circle(p));
    }
}