let now = nowDate();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`);

let ms = now.getTime();
let days = Math.floor(ms / (1000 * 60 * 60 * 24));
console.log(days);