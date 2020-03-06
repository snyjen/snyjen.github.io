const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name=="Fish Haven" || towns[i].name=="Preston" || towns[i].name=="Soda Springs") {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = towns[i].name;
        card.appendChild(name);

        motto.textContent = towns[i].motto;
        card.appendChild(motto);

        yearFounded.textContent = "Year Founded:" + towns[i].yearFounded;
        card.appendChild(yearFounded);

        currentPopulation.textContent = "Population:" + towns[i].currentPopulation;
        card.appendChild(currentPopulation);

        averageRainfall.textContent = "Annual Rainfall:" + towns[i].averageRainfall;
        card.appendChild(averageRainfall);

        
        image.setAttribute('src', "images/" + towns[i].photo);

        image.setAttribute('alt', towns[i].name);
        card.appendChild(photo);
       
        document.querySelector('div.cards').appendChild(card);

        }
    };
});