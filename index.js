let convNumber = prompt("Pick a number.");
let metersToFeet = convNumber * 3.2808;
let feetToMeters = convNumber * .3048;
    litersToGallons = convNumber * .2641;
    gallonsToLiters = convNumber * 3.7854;
    kilosToPounds = convNumber * 2.2046;
    poundsToKilos = convNumber * .4535;

document.getElementById("input-el").textContent = convNumber
document.getElementById("length-el").textContent = convNumber + " meters = " + metersToFeet + " feet | " + convNumber + " feet = " + feetToMeters + " meters";
document.getElementById("volume-el").textContent = convNumber + " liters = " +  litersToGallons + " gallons | " + convNumber + " gallons = " + gallonsToLiters + " liters";
document.getElementById("mass-el").textContent = convNumber + " kilos = " +  kilosToPounds + " pounds | " + convNumber + " pounds = " + poundsToKilos + " kilos";
