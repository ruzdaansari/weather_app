import { WeatherContext } from "../store/weather_context"
import { useContext } from "react"
export default function DisplayWeather(){

    const { temperature, country, condition ,userInput} = useContext(WeatherContext)
    return(
        <div style={{fontFamily: "Arial"}}>
        <p><b>Location</b>: {userInput}, {country}</p>
        <p><b>Temp</b>: {temperature} &#176;C</p>
        <p><b>Condition</b>: {condition}</p>
        </div>
    )
}