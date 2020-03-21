const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (let i = 0; i < 6; i++) {
      if (towns[i].name == "Fish Haven") {

        let card = document.createElement('section');
        let info = document.createElement('div');
        let name = document.createElement('p');
        let test = document.createElement('p');
        let nametest = document.createElement('p');

        name.textContent = towns[i].events[0];
        test.textContent = towns[i].events[1];
        nametest.textContent = towns[i].events[2];

        info.appendChild(name);
        info.appendChild(test);
        info.appendChild(nametest);
        card.appendChild(info);

        document.querySelector('div.events').appendChild(card);
      
      }
      }
  });
