// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  
	const apiWeather = new API_WEATHER();
	
  // Appel de la fonction fetchTodayForecast     
    
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
	  // Ville initiale est Paris
	  let ville="paris";
	  getThreeDayForecast(ville);

      
    })

    

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

// Fonction qui est lancé lors du click sur le bouton de soumission de ville
  function valenter()
    {  
         //On récupre la valeur de l'input
       var searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
             var city=searchCity;
            }
       
        //on récupere les données de la nouvelle ville
const apiWeather = new API_WEATHER(searchCity);
        apiWeather.fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
			
			
			
      
    })
		
	//Appel de la fonciton qui reoturne les données météo des trois prochain jours de la ville voulue
		getThreeDayForecast(searchCity)
		
   
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
             
}

//Fonction qui va permettre d'afficher les données des trois prochains jours de la ville
function getThreeDayForecast(city)
{  
	const apiWeather = new API_WEATHER(city);

     apiWeather.ThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
		
//demain
      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
     const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
	 
			
      // Modifier le DOM
      document.getElementById('demain-forecast-main').innerHTML = main;
      document.getElementById('demain-forecast-more-info').innerHTML = description;
     document.getElementById('demain-icon-weather-container').innerHTML = icon;
      document.getElementById('demain-forecast-temp').innerHTML = `${temp}°C`;
			
//Apres demain
				
      // On récupère l'information principal
      const main2 = data.list[1].weather[0].main;
       const description2 = data.list[1].weather[0].description;
     const temp2 = data.list[1].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
	 
	
      // Modifier le DOM
      document.getElementById('apres-demain-forecast-main').innerHTML = main2;
     document.getElementById('apres-demain-forecast-more-info').innerHTML = description2;
     document.getElementById('apres-demain-icon-weather-container').innerHTML = icon2;
      document.getElementById('apres-demain-forecast-temp').innerHTML = `${temp2}°C`;
			
			
	
      //encore apres demain
	  
      // On récupère l'information principal
      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
     const temp3 = data.list[2].temp.day;
     const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
	 
			
      // Modifier le DOM
      document.getElementById('encore-apres-demain-forecast-main').innerHTML = main3;
      document.getElementById('encore-apres-demain-forecast-more-info').innerHTML = description3;
     document.getElementById('encore-apres-demain-icon-weather-container').innerHTML = icon3;
      document.getElementById('encore-apres-demain-forecast-temp').innerHTML =`${temp3}°C`;
    })
	
	
	  .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

	
}
	
		  




  

