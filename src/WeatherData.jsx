import WeatherIcons from "./WeatherIcon";

const weatherForecasts = [
  {
    day: 'Mon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const WeatherForecasts = () => {
  const weather = weatherForecasts.map((weatherForecast, index) => {
    return (
      <div className="weather" key={index}>
      <h1>{weatherForecast.day}</h1>
      <WeatherIcons  condition = {weatherForecast.conditions} />
      <p>Conditions: {weatherForecast.conditions}</p>
      <p>Time: {weatherForecast.time}</p>
  </div>
  )
  })

  return (
    <>
    <section>
        {weather}
    </section>
    </>
)

}




export default WeatherForecasts;
