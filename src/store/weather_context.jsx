import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({
  userInput: "",
  getWeatherHandler: () => {},
  inputChangeHandler: () => {},
  temperature: "",
  country: "",
  condition: "",
});

export default function WeatherContextProvider({ children }) {
  const [userData, setUserData] = useState("Mumbai");
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  const userInputHandler = (userValue) => {
    // setUserData(userValue)
  };

  const fetchWeatherData = async () => {
    // console.log(userD, "userData");
    try{
        const resposne = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=ef618c80404546f4ad8120945251202&q=${userData}`
        );
        const data = await resposne.json();
        setTemp(data.current.temp_c);
        setLocation(data.location.country);
        setWeatherCondition(data.current.condition.text);
    } catch(error){
        console.log(error);
        setUserData("Mumbai")
        alert("No matching location found, Please enter valid location..")
    }
  };

  const getWeatherData = (userValue) => {
    setUserData((prev) => {
      if (userValue !== "") return userValue;
      return prev;
    });
  };

  useEffect(() => {
    if (userData !== "") {
      fetchWeatherData();
    }
  }, [userData]);

  const ctxValue = {
    userInput: userData,
    getWeatherHandler: getWeatherData,
    inputChangeHandler: userInputHandler,
    temperature: temp,
    country: location,
    condition: weatherCondition,
  };

  return (
    <WeatherContext.Provider value={ctxValue}>
      {children}
    </WeatherContext.Provider>
  );
}
