var today = new Date();
var day = today.getDay();
var disp = "none";

if (day == 5) {
    disp = "block";
}

document.getElementById("friday").style.display = disp;