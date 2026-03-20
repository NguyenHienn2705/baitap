// Cau 1
let r = 5;
let volume = (4/3)* Math.PI * Math.pow(r, 3);
console .log(volume);

// Cau 2
let totalBook = 60;
let pricePerBook = 24.95 * 0.6;
let totalPriceBook = totalBook * pricePerBook;
let shippingCost = 3 + (totalBook - 1) * 0.75;
let totalCost = totalPriceBook + shippingCost;
console.log(totalCost);

// Cau 3
let easyPace = 8 + 15/60;
let tempoPace = 7 + 12/60;

let totalTime = easyPace + 3 * tempoPace + easyPace;
console.log(totalTime);
