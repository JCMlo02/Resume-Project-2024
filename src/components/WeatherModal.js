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
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">
          {city ? `Weather Forecast` : "Enter a city"}
        </h2>
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={inputCity}
            onChange={handleCityChange}
            className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="City Name"
          />
          <button
            onClick={handleCitySubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mb-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          </div>
        ) : weatherData ? (
          <div className="space-y-6 ">
            <div className="text-2xl font-bold text-center mb-4">{city}</div>
            {weatherData.map((day, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {day.time}
                </h3>
                <p>
                  <strong>Average Temperature:</strong> {day.temperatureAvg}°C
                </p>
                <p>
                  <strong>Max Temperature:</strong> {day.temperatureMax}°C
                </p>
                <p>
                  <strong>Min Temperature:</strong> {day.temperatureMin}°C
                </p>
                <p>
                  <strong>Cloud Cover:</strong> {day.cloudCoverAvg}%
                </p>
                <p>
                  <strong>Wind Speed:</strong> {day.windSpeedAvg} km/h
                </p>
                <p>
                  <strong>Humidity:</strong> {day.humidityAvg}%
                </p>
                <p>
                  <strong>Precipitation Probability:</strong>{" "}
                  {day.precipitationProbabilityAvg}%
                </p>
              </div>
            ))}
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
