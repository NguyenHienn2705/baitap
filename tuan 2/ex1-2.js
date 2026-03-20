// Cau 1
let minutes = 42;
let seconds = 42;

let totalSeconds = minutes * 60 +seconds;
console.log(totalSeconds);

// Cau 2
let kilometers = 10;
let miles = kilometers * 0.621371;

console.log(miles);

// Cau 3
let distanceKm = 10;
let timeSeconds = totalSeconds;

let pace  = totalSeconds / distanceKm;
console.log(pace);

let speed = distanceKm / (timeSeconds / 3600);
console.log(speed);