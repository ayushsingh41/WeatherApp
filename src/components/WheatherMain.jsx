import { useEffect, useState } from "react";
import Input from "../Input/Input";
import ButtonCom from "../ButtonCom/ButtonCom";
import WheatherBox from "../WheatherBox/WheatherBox";

const WheatherMain = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "b5a2bf771149db704fc0424060558d54";

  const btnClickHandler = () => {
    fetchWeatherByCity(city);
    setCity("");
  };

  const fetchWeatherByCity = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLocationPermission(true);

          // Fetch weather data using obtained coordinates
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLocationPermission(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);

  return (
    <>
      <div>
        <Input
          inputHandler={(data) => {
            setCity(data);
          }}
          val={city}
          keyHandler={btnClickHandler}
        />
        <ButtonCom clickHandler={btnClickHandler} />
      </div>

      <WheatherBox weather={weather} />
    </>
  );
};

export default WheatherMain;
