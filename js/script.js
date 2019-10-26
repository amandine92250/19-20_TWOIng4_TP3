  /*function valenter()
    {
          
       var searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
             var city=searchCity;
               searchWeather(searchCity);
            }
       
       
    }*/
/*

function searchWeather(searchTerm)
{
    var apiWeather = new API_WEATHER();
      var vi;
      var API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
   var API_URL = "https://api.openweathermap.org/data/2.5/weather";
    var searchq="q";
   fetch(`${API_URL}?q=${searchTerm}&units=metric&appid=${API_KEY}`).then(result =>
          { 
              return result.json();
      }).then(result =>{
              console.log(result);
          })
         alert(city); 
         
      apiWeather.get(`${API_URL}?q=${searchTerm}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    }).then(function(response) {
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
}
    
     */
    
     

// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
       /*document.getElementById('city-input-button').addEventListener('click',() => {
        let searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
                city=searchCity;
               
            }
           alert(city);
    })*/

	 
	
	const apiWeather = new API_WEATHER();
	
  // Appel de la fonction fetchTodayForecast
/*document.getElementById('city-input-button').addEventListener('click', () => {
        let searchCity = document.getElementById('city-input').value;
        if (searchCity)
            {
                let city=searchCity;
                alert(city);
            }
    })
    */
      
    
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
      
    })
    
    

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
/*
 function valenter()
    {  
         
       var searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
             var city=searchCity;
            }
        alert(searchCity);
        return searchCity;
    }*/


  function valenter()
    {  
         
       var searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
             var city=searchCity;
            }
        alert(searchCity);
        
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
		/*
	apiWeather.getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
alert("hsd");
      // On récupère l'information principal
      const main = data.weather[1].main;
      const description = data.weather[1].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[1].icon);

      // Modifier le DOM
      document.getElementById('demain-forecast-main').innerHTML = main;
      document.getElementById('demain-forecast-more-info').innerHTML = description;
      document.getElementById('demain-icon-weather-container').innerHTML = icon;
      document.getElementById('demain-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    
    */

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
             
}





  

