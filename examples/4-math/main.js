console.log(Math);

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.2));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

console.log(Math.random());

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
console.log(getRandom(1, 50));

console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.tan(Math.PI / 4));

console.log(Math.log(10));
console.log(Math.log10(100));
console.log(Math.exp(2));

console.log(Math.abs(-5));
console.log(Math.hypot(3, 4));
