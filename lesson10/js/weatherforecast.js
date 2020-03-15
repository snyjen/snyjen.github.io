const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3e0425f4b4feb5fd17b29e3a168f2265';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i=0; i<fiveday.length; i++) {
      let d = new Date(fiveday[i].dt_txt);
      let dayName = days[d.getDay()];
      document.getElementById("day" + i).textContent = dayName;
      document.getElementById("temp" + i).innerHTML = parseFloat(fiveday[i].main.temp).toFixed(0) + "&#8457;";
      document.getElementById("icon" + i).setAttribute("src", `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`);
      document.getElementById("icon" + i).setAttribute("alt", fiveday[i].weather[0].description);
    }
  });