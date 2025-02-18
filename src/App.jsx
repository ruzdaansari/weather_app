import DisplayWeather from "./components/DisplayWeather";
import Input from "./components/Input";
import WeatherContextProvider from "./store/weather_context";
function App() {
  return (
    <WeatherContextProvider>
      <div className="container">
        <h2>Weather App</h2>
        <Input />
        <DisplayWeather />
      </div>
    </WeatherContextProvider>
  );
}

export default App;

