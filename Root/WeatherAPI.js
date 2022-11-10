const currentWeather = async () => {
    const API = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.58&lon=0.22&appid=c3c058b2ad45476c232048fdf0fb5380");
    const result = await API.json();
    console.log(result);
}

const chuckNorrisJoke = async () => {
    const API = await fetch("https://api.chucknorris.io/jokes/random");
    const result = await API.json();
    console.log(result);
}

currentWeather();