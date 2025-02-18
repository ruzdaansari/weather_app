import styles from "./Input.module.css";
import { WeatherContext } from "../store/weather_context";
import { useContext, useRef, useState } from "react";
export default function Input() {
  const { inputChangeHandler, getWeatherHandler } = useContext(WeatherContext);
  const [_inputData, setInputData] = useState("");
    const inputVal = useRef()

  return (
    <>
      <input
        className={styles.inputBox}
        type="text"
        placeholder="enter your location"
        // onBlur={(e) => {
        //   console.log(e.target.value);
        //   setInputData(e.target.value);
        // }}
        ref={inputVal}
      ></input>
      <button
        className={styles.weatherBtn}
        onClick={(e) => getWeatherHandler(inputVal.current.value)}
      >
        Get Weather
      </button>
    </>
  );
}
