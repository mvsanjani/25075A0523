const apiKey = "c1d450d83de08ace2dc7ed9ed00c408c"; // <-- Replace with your real key
let weatherChart;

// --------------- Button Click -----------------
document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Enter a city name");

  const coords = await getCityCoordinates(city);
  if (!coords) return alert("City not found worldwide!");

  const weather = await getWeatherByCoordinates(coords.lat, coords.lon);
  displayWeather(weather, coords);
});

// --------------- Get City Coordinates -----------------
const getCityCoordinates = async (city) => {
  try {
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`
    );
    const geoData = await geoRes.json();
    if (!geoData || geoData.length === 0) return null;
    return {
      lat: geoData[0].lat,
      lon: geoData[0].lon,
      name: geoData[0].name,
      country: geoData[0].country
    };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

// --------------- Get Weather by Coordinates (Free API) -----------------
const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

// --------------- Display Weather -----------------
const displayWeather = (data, coords) => {
  if (!data || !data.list) return alert("Weather data not found!");

  // Get next 8 forecasts (~24 hours, 3-hour intervals)
  const hourlyData = data.list.slice(0, 8);

  const temps = hourlyData.map(h => h.main.temp);
  const labels = hourlyData.map(h => {
    const dt = new Date(h.dt * 1000);
    return `${dt.getHours()}:00`;
  });

  document.getElementById("weatherInfo").innerHTML = `
    <h3>${coords.name}, ${coords.country}</h3>
    <p>Temperature forecast for the next 24 hours (3-hour intervals)</p>
  `;

  drawTemperatureGraph(labels, temps);
};

// --------------- Draw Temperature Graph -----------------
const drawTemperatureGraph = (labels, temps) => {
  const ctx = document.getElementById("weatherChart").getContext("2d");

  if (weatherChart) weatherChart.destroy(); // Remove old chart

  weatherChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: temps,
          borderColor: "#f39c12",
          backgroundColor: "rgba(243, 156, 18, 0.4)",
          fill: true,           // Fill area under the curve
          tension: 0.4,         // Smooth curve
          pointRadius: 4,       // Circle at each data point
          pointBackgroundColor: "#f39c12"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: 'Temperature (°C)' }
        }
      }
    }
  });
};
