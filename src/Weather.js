import axios from "axios";
import { useEffect, useState } from "react";

const APIkey = `5fa292a2bb2585533120857b15c6d408`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=bulverde&appid=${APIkey}`;

function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const weather = await axios.get(url);
      console.log(weather.data.weather);
      setData([weather.data.weather[0].description, weather.data.main.temp]);
    };
    getData();
  }, []);

  return (
    <>
      <div className='weather-container'>
        <h1>Bulverde </h1>
        <h2>{data.length ?  Math.floor((data[1] - 273.15) * 9/5 + 32) + '° ': ""}</h2>
        <p>{data.length ? data[0] : ""}</p>
      </div>
    </>
  );
}

export default Weather;
