// Declare the weatherIcons Data
const weatherIcons = {
    sunny: {
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
    },
    clear: {
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
    },
    stormy: {
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
    },
    overcast: {
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
    },
    cloudy: {
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
    },
  };


  const WeatherIcons = (props) => {
    // Save the value gotten from "props.condition" into a variable.
    const condition = props.condition
   
    return (
      <>
      {/* render each icon with its respective condition */}
      <img src={weatherIcons[condition].img} alt={weatherIcons[condition].imgAlt} />
      </>
    )
  }




  export default WeatherIcons;