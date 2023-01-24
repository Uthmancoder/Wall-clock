let hoursEl = document.querySelector(".hours")
let minEl = document.querySelector(".minutes")
let secEl = document.querySelector(".seconds")

let date = new Date;
console.log(date);
let secDeg = date.getHours()/60 * 360;
let minDeg = date.getMinutes()/60 * 360;
let hoursDeg = date.getMinutes()/12 * 360;

secEl.style.transform = `rotate(10deg)`
minEl.style.transform = `rotate(10deg)`
hoursEl.style.transform = `rotate(10deg)`