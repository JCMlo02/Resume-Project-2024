import React, { useState } from "react";

// Helper function to get the day suffix (st, nd, rd, th)
const getDaySuffix = (day) => {
  if (day > 3 && day < 21) return "th"; // Special case for 11th-13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

// Helper function to format a date to "Month Dayth, Year"
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const suffix = getDaySuffix(day);
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}${suffix}, ${year}`;
};

const WeatherCard = ({ day }) => (
  <div className="p-6 backdrop-blur-sm bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-3">
      {day.time}
    </h3>
    <div className="space-y-2 text-sm">
      <WeatherStat label="Average Temperature" value={`${day.temperatureAvg}°C`} />
      <WeatherStat label="Max Temperature" value={`${day.temperatureMax}°C`} />
      <WeatherStat label="Min Temperature" value={`${day.temperatureMin}°C`} />
      <WeatherStat label="Cloud Cover" value={`${day.cloudCoverAvg}%`} />
      <WeatherStat label="Wind Speed" value={`${day.windSpeedAvg} km/h`} />
      <WeatherStat label="Humidity" value={`${day.humidityAvg}%`} />
      <WeatherStat label="Precipitation Probability" value={`${day.precipitationProbabilityAvg}%`} />
    </div>
  </div>
);

const WeatherStat = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

const WeatherModal = ({
  onClose,
  city,
  onCitySubmit,
  weatherData,
  loading,
}) => {
  const [inputCity, setInputCity] = useState(city || "");

  const handleCityChange = (e) => setInputCity(e.target.value);

  const handleCitySubmit = () => {
    if (inputCity.trim() !== "") {
      onCitySubmit(inputCity);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
      <div className="w-11/12 max-w-3xl max-h-[85vh] overflow-y-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {city ? `Weather Forecast` : "Enter a city"}
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={inputCity}
            onChange={handleCityChange}
            className="border-2 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder="Enter city name..."
          />
          <button
            onClick={handleCitySubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                <span>Loading...</span>
              </div>
            ) : (
              "Get Weather"
            )}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          </div>
        ) : weatherData ? (
          <div className="space-y-6 mt-8">
            <div className="text-3xl font-bold text-center mb-6 text-blue-600">{city}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weatherData.map((day, index) => (
                <WeatherCard key={index} day={day} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-center">
            No weather data available.
          </p>
        )}
      </div>
    </div>
  );
};

const WeatherApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const fetchWeatherData = async (inputCity) => {
    try {
      setLoading(true);
      setWeatherData(null); // Reset weather data before fetching new data
      const response = await fetch(
        "https://6liw8ik1wf.execute-api.us-east-1.amazonaws.com/prod/weather",
        {
          method: "POST",
          body: JSON.stringify({ location: inputCity }),
        }
      );

      const data = await response.json();
      if (data && data.timelines && data.timelines.daily) {
        const formattedData = data.timelines.daily.map((day) => ({
          time: formatDate(day.time),
          temperatureAvg: day.values.temperatureAvg,
          temperatureMax: day.values.temperatureMax,
          temperatureMin: day.values.temperatureMin,
          cloudCoverAvg: day.values.cloudCoverAvg,
          windSpeedAvg: day.values.windSpeedAvg,
          humidityAvg: day.values.humidityAvg,
          precipitationProbabilityAvg: day.values.precipitationProbabilityAvg,
        }));
        setWeatherData(formattedData);
      } else {
        alert("No weather data found.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  const handleCitySubmit = (inputCity) => {
    setCity(inputCity);
    fetchWeatherData(inputCity);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Weather Forecast
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg"
          onClick={toggleModal}
        >
          Check Weather
        </button>
      </div>

      {isModalOpen && (
        <WeatherModal
          onClose={toggleModal}
          city={city}
          onCitySubmit={handleCitySubmit}
          weatherData={weatherData}
          loading={loading}
        />
      )}
    </div>
  );
};

export default WeatherApp;
