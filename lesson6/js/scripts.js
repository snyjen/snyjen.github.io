var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
var dayofWeek = dayArray[today.getDay()];
var monthName = monthArray[today.getMonth()];
var currentDate = dayofWeek + "," + today.getDate() + "" + monthName + "" + (today.getYear() +1900);
document.getElementById("currentDate").innerHTML = currentDate;

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}