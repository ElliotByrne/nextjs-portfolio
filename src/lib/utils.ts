import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// All possible weather states with custom emojis and adjectives to fit my app.

interface WeatherDataInterface {
  day: string;
  emoji: string;
  adjective?: string;
}

const weatherIcons: Array<WeatherDataInterface> = [
  { day: "Sunny", emoji: "☀️" },
  { day: "Partly cloudy", emoji: "⛅", adjective: "Cloudy" },
  { day: "Cloudy", emoji: "☁️" },
  { day: "Overcast", emoji: "🌥️" },
  { day: "Mist", emoji: "🌫️", adjective: "Misty" },
  { day: "Patchy rain possible", emoji: "🌦️", adjective: "Rainy" },
  { day: "Patchy snow possible", emoji: "🌨️", adjective: "Snowy" },
  { day: "Patchy sleet possible", emoji: "🌨️", adjective: "Sleety" },
  { day: "Patchy freezing drizzle possible", emoji: "🌧️", adjective: "Sleety" },
  { day: "Thundery outbreaks possible", emoji: "⛈️", adjective: "Stormy" },
  { day: "Blowing snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Blizzard", emoji: "❄️", adjective: "Snowy" },
  { day: "Fog", emoji: "🌫️", adjective: "Foggy" },
  { day: "Freezing fog", emoji: "🌫️", adjective: "Foggy" },
  { day: "Patchy light drizzle", emoji: "🌦️", adjective: "Drizzly" },
  { day: "Light drizzle", emoji: "🌦️", adjective: "Drizzly" },
  { day: "Freezing drizzle", emoji: "🌧️", adjective: "Drizzly" },
  { day: "Heavy freezing drizzle", emoji: "🌧️", adjective: "Drizzly" },
  { day: "Patchy light rain", emoji: "🌦️", adjective: "Rainy" },
  { day: "Light rain", emoji: "🌧️", adjective: "Rainy" },
  { day: "Moderate rain at times", emoji: "🌧️", adjective: "Rainy" },
  { day: "Moderate rain", emoji: "🌧️", adjective: "Rainy" },
  { day: "Heavy rain at times", emoji: "🌧️", adjective: "Rainy" },
  { day: "Heavy rain", emoji: "🌧️", adjective: "Rainy" },
  { day: "Light freezing rain", emoji: "🌧️", adjective: "Rainy" },
  { day: "Moderate or heavy freezing rain", emoji: "🌧️", adjective: "Rainy" },
  { day: "Light sleet", emoji: "🌨️", adjective: "Sleety" },
  { day: "Moderate or heavy sleet", emoji: "🌨️", adjective: "Sleety" },
  { day: "Patchy light snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Light snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Patchy moderate snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Moderate snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Patchy heavy snow", emoji: "🌨️", adjective: "Snowy" },
  { day: "Heavy snow", emoji: "❄️", adjective: "Snowy" },
  { day: "Ice pellets", emoji: "🌨️", adjective: "Snowy" },
  { day: "Light rain shower", emoji: "🌦️", adjective: "Rainy" },
  { day: "Moderate or heavy rain shower", emoji: "🌧️", adjective: "Rainy" },
  { day: "Torrential rain shower", emoji: "🌧️", adjective: "Rainy" },
  { day: "Light sleet showers", emoji: "🌨️", adjective: "Sleety" },
  { day: "Moderate or heavy sleet showers", emoji: "🌨️", adjective: "Sleety" },
  { day: "Light snow showers", emoji: "🌨️", adjective: "Snowy" },
  { day: "Moderate or heavy snow showers", emoji: "🌨️", adjective: "Snowy" },
  { day: "Light showers of ice pellets", emoji: "🌨️", adjective: "Snowy" },
  {
    day: "Moderate or heavy showers of ice pellets",
    emoji: "🌨️",
    adjective: "Snowy",
  },
  { day: "Patchy light rain with thunder", emoji: "⛈️", adjective: "Stormy" },
  {
    day: "Moderate or heavy rain with thunder",
    emoji: "⛈️",
    adjective: "Stormy",
  },
  { day: "Patchy light snow with thunder", emoji: "⛈️", adjective: "Stormy" },
  {
    day: "Moderate or heavy snow with thunder",
    emoji: "⛈️",
    adjective: "Stormy",
  },
];

export function getWeatherMetaData(weatherString: string) {
  const data = weatherIcons.filter((el) => el.day === weatherString);

  if (data.length > 0 && data[0]) {
    return data[0];
  }

  return { emoji: "😔", adjective: "Unknown weather conditions" };
}
