var tempF=parseInt(document.getElementById("tempF").innerText);
var speed=parseInt(document.getElementById("speed").innerText);


if(tempF <=50 && speed >= 3) {
    var f=35.74+(0.6215*tempF)- 35.75*(Math.pow(speed,0.16))+(0.4275*tempF*Math.pow(speed,0.16))
    
    document.getElementById("tempF").innerHTML=f.toFixed(2) + "&#8457;";

}

else {
    document.getElementById("tempF").innerText="N/A"
}


	
	