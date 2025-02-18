# Weather App

## Description
A simple React-based Weather App that fetches real-time weather data for a user-specified location using the WeatherAPI. The application allows users to enter a city name, fetch the current temperature, weather condition, and country, and display the results dynamically.

## Features
- Fetch real-time weather data using WeatherAPI.
- User can input a location to get weather details.
- Displays temperature, country, and weather conditions.
- Uses React Context API for state management.

## Technologies Used
- React.js
- Context API
- Fetch API
- CSS Modules

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm start
   ```

## Usage
1. Enter a city name in the input box.
2. Click the "Get Weather" button.
3. View real-time weather data displayed on the screen.

## Project Structure
```
weather-app/
│── src/
│   ├── components/
│   │   ├── DisplayWeather.js
│   │   ├── Input.js
│   ├── store/
│   │   ├── weather_context.js
│   ├── styles/
│   │   ├── Input.module.css
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## API Key Setup
This project uses the WeatherAPI. Replace the key in the `fetchWeatherData` function with your own API key:
```js
const response = await fetch(
  `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${userData}`
);
```

## Contributing
Feel free to fork the repository and submit pull requests with improvements.

## License
This project is licensed under the MIT License.

