let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById ('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById( 'pressure');
let form = document. querySelector('form');
let main=document.querySelector('main')
form.addEventListener('submit',search)

function search(e){
     e.preventDefault();
     if(valueSearch.value !=''){
        searchWeather();
     }
}


let id='cfde0efd265281d61423dc3e6d37f3fa';  //place your Api Key here and everything is fine
let url= 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid='+id;


const searchWeather= () =>{
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive=>responsive.json())
    .then(data=>{
        console.log(data);

        if(data.cod==200){
        city.querySelector('figcaption').innerText=data.city.name;
        city.querySelector('img').src='https://flagsapi.com/'+data.city.country+'/shiny/64.png';

        temperature.querySelector('img').src='https://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png';
       temperature.querySelector('figcaption span').innerText=(data.list[0].main.temp-273.15).toFixed(2);
        description.innerText=data.list[0].weather[0].description;
        clouds.innerText=data.list[0].clouds.all;
        humidity.innerText=data.list[0].main.humidity;
        pressure.innerText=data.list[0].main.pressure;

    }
    else{
        main.classList.add('error')
        setTimeout(() =>{
            main.classList.remove('error');
        },1000)
    }
    valueSearch.value=' ';

    })
}

const initApp=() =>{
    valueSearch.value='jaipur';
    searchWeather();
}
initApp();