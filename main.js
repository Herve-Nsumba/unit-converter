let unit = document.getElementById("unit");
let convert = document.getElementById("convert");
let length = document.getElementById("conversion-one");
let volume = document.getElementById("conversion-two");
let mass = document.getElementById("conversion-three");
let toggle = document.getElementById("toggle");
let body = document.body;

convert.addEventListener("click", function () {
  let num = Number(unit.value);

  if (isNaN(num)) {
    unit.value = "NaN";
    length.innerHTML = "";
    volume.innerHTML = "";
    mass.innerHTML = "";
    return;
  }
  //Length
  let feet = num * 3.282;
  let meter = num / 3.282;
  length.innerHTML = `${num} meters = ${feet.toFixed(
    3
  )} feet| ${num} feet = ${meter.toFixed(3)} meters`;

  //Volume
  let gallon = num * 0.264;
  let liter = num / 0.264;
  volume.innerHTML = `${num} liters = ${gallon.toFixed(
    3
  )} gallons | ${num} gallons = ${liter.toFixed(3)} liters`;

  //Mass
  let kilogram = num * 2.204;
  let pound = num / 2.204;
  mass.innerHTML = `${num} kilogram = ${kilogram.toFixed(
    3
  )} pound| ${num} pound = ${pound.toFixed(3)} kilos`;
});

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
