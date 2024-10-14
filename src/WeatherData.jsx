import WeatherIcons from "./WeatherIcon";
import "./WeatherForecast.css"


const WeatherData = (props) => {
const weatherForecast = props.weatherForecast
    return (
        <div className="weather">
        <h1>{weatherForecast.day}</h1>
        <WeatherIcons 
          img = {weatherForecast.img}
          imgArg = {weatherForecast.imgArg} 
        />
        <p>Conditions: {weatherForecast.conditions}</p>
        <p>Time: {weatherForecast.time}</p>
        </div>
  )
}




export default WeatherData;
