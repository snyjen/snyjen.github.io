const requestURL2 = 'https://snyjen.github.io/final/guides.json';

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const guides = jsonObject['guides'];

    for (let i = 0; i < guides.length; i++ ) {
        
      if (guides[i].name=="Matt Woods" || guides[i].name=="Jake Rivers" || guides[i].name=="Lisa Banks") {

        
        
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let certLevel = document.createElement('h4');
        let yearExp = document.createElement('p');
        let email = document.createElement('p');
        let bio = document.createElement('p');
        let photo = document.createElement('img');
        

        name.textContent = guides[i].name;

        certLevel.textContent = guides[i].certLevel;   
        
        yearExp.textContent = "Length:" + guides[i].yearExp;

        email.textContent = "Cost:" + guides[i].email;
      
        bio.textContent = "Services:" + guides[i].bio;

      
        let alt = guides[i].photo;
        photo.setAttribute('src', "images/" + guides[i].photo);
        photo.setAttribute('alt', alt);
        
        card.appendChild(name);
        card.appendChild(certLevel);
        card.appendChild(yearExp);
        card.appendChild(email);
        card.appendChild(bio);
        card.appendChild(photo);
       
        document.querySelector('div.cards').appendChild(card);

      } 
    }
});