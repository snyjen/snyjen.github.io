const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = towns[i].name;

        motto.textContent = towns[i].motto;       

        yearFounded.textContent = "Year Founded:" + towns[i].yearFounded;
      
        currentPopulation.textContent = "Population:" + towns[i].currentPopulation;

        averageRainfall.textContent = "Annual Rainfall:" + towns[i].averageRainfall;
      
        let alt = towns[i].photo;
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', alt);
        
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);
       
        document.querySelector('div.cards').appendChild(card);

        
    }
});