// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL2="https://api.openweathermap.org/data/2.5/forecast/daily"
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";



class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    
    this.city = city;
    
  }
/*
  valenter()
    {  
       var searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
             var city=searchCity;
            }
        alert(searchCity);
             
}
  
   document.getElementById('city-input-button').addEventListener('click',() => {
        let searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
                city=searchCity;
               
            }
    })
         alert(city);
    
    }
    
inputCity()
    {
        document.getElementById('city-input-button').addEventListener('click',() => {
        let searchCity=document.getElementById('city-input').value;
        if (searchCity)
            {
                city=searchCity;
               
            }
    })
         alert(city);
    
    }
      
    searchWeather(city)
    {
          fetch(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`).then(result =>
          { 
              return result.json();
      }).then(result =>{
              console.log(result);
          })
    }
    */
    

  // Faire la requete à l'API openweathermap
  // Retourne une promise
	
	
  fetchTodayForecast(){
       
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
	
	
	
ThreeDayForecast(){
	return axios
    .get(`${API_URL2}?q=${this.city}&units=metric&appid=${API_KEY}&metric&cnt=3`, {
      crossdomain: true
    })
 }
	/*
https://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=units=metric&appid=4081444b7b90198136fefe6ed4ccf35b&metric&cnt=3
  */
// Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }


}
