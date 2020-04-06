const requestURL = 'https://snyjen.github.io/final/adventure.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const adventures = jsonObject['adventures'];

    for (let i = 0; i < adventures.length; i++ ) {
        
      if (adventures[i].name=="Weekends" || adventures[i].name=="Week" || adventures[i].name=="One Day") {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let skillLevel = document.createElement('h4');
        let dayLength = document.createElement('p');
        let costTotal = document.createElement('p');
        let services = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = adventures[i].name;

        skillLevel.textContent = adventures[i].skillLevel;   
        
        dayLength.textContent = "Length:" + adventures[i].dayLength;

        costTotal.textContent = "Cost:" + adventures[i].costTotal;
      
        services.textContent = "Services:" + adventures[i].services;

      
        let alt = adventures[i].photo;
        photo.setAttribute('src', "images/" + adventures[i].photo);
        photo.setAttribute('alt', alt);
        
        card.appendChild(name);
        card.appendChild(skillLevel);
        card.appendChild(dayLength);
        card.appendChild(costTotal);
        card.appendChild(services);
        card.appendChild(photo);
       
        document.querySelector('div.cards').appendChild(card);

      } 
    }
});