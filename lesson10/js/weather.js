const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3e0425f4b4feb5fd17b29e3a168f2265';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
      document.getElementById('currently').textContent = jsObject.weather[0].main;
      document.getElementById('high').textContent = jsObject.main.temp;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('wind').textContent = jsObject.wind.speed;

      let tempF = parseFloat(document.getElementById ("high").innerHTML);
      let wind = parseFloat(document.getElementById ("wind").innerHTML);

      if(tempF <=50 && speed >= 3) {
        var f=35.74+(0.6215*tempF)- 35.75*(Math.pow(speed,0.16))+(0.4275*tempF*Math.pow(wind,0.16))
        
        document.getElementById("windchill").innerHTML=f.toFixed(2);
    
    }
    
    else {
        document.getElementById("windchill").innerText="N/A"
    }
    
  }); 