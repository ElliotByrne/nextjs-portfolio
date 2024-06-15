import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const weatherIcons = [
  { day: "Sunny", emoji: "☀️" },
  { day: "Partly cloudy", emoji: "⛅" },
  { day: "Cloudy", emoji: "☁️" },
  { day: "Overcast", emoji: "🌥️" },
  { day: "Mist", emoji: "🌫️" },
  { day: "Patchy rain possible", emoji: "🌦️" },
  { day: "Patchy snow possible", emoji: "🌨️" },
  { day: "Patchy sleet possible", emoji: "🌨️" },
  { day: "Patchy freezing drizzle possible", emoji: "🌧️" },
  { day: "Thundery outbreaks possible", emoji: "⛈️" },
  { day: "Blowing snow", emoji: "🌨️" },
  { day: "Blizzard", emoji: "❄️" },
  { day: "Fog", emoji: "🌫️" },
  { day: "Freezing fog", emoji: "🌫️" },
  { day: "Patchy light drizzle", emoji: "🌦️" },
  { day: "Light drizzle", emoji: "🌦️" },
  { day: "Freezing drizzle", emoji: "🌧️" },
  { day: "Heavy freezing drizzle", emoji: "🌧️" },
  { day: "Patchy light rain", emoji: "🌦️" },
  { day: "Light rain", emoji: "🌧️" },
  { day: "Moderate rain at times", emoji: "🌧️" },
  { day: "Moderate rain", emoji: "🌧️" },
  { day: "Heavy rain at times", emoji: "🌧️" },
  { day: "Heavy rain", emoji: "🌧️" },
  { day: "Light freezing rain", emoji: "🌧️" },
  { day: "Moderate or heavy freezing rain", emoji: "🌧️" },
  { day: "Light sleet", emoji: "🌨️" },
  { day: "Moderate or heavy sleet", emoji: "🌨️" },
  { day: "Patchy light snow", emoji: "🌨️" },
  { day: "Light snow", emoji: "🌨️" },
  { day: "Patchy moderate snow", emoji: "🌨️" },
  { day: "Moderate snow", emoji: "🌨️" },
  { day: "Patchy heavy snow", emoji: "🌨️" },
  { day: "Heavy snow", emoji: "❄️" },
  { day: "Ice pellets", emoji: "🌨️" },
  { day: "Light rain shower", emoji: "🌦️" },
  { day: "Moderate or heavy rain shower", emoji: "🌧️" },
  { day: "Torrential rain shower", emoji: "🌧️" },
  { day: "Light sleet showers", emoji: "🌨️" },
  { day: "Moderate or heavy sleet showers", emoji: "🌨️" },
  { day: "Light snow showers", emoji: "🌨️" },
  { day: "Moderate or heavy snow showers", emoji: "🌨️" },
  { day: "Light showers of ice pellets", emoji: "🌨️" },
  { day: "Moderate or heavy showers of ice pellets", emoji: "🌨️" },
  { day: "Patchy light rain with thunder", emoji: "⛈️" },
  { day: "Moderate or heavy rain with thunder", emoji: "⛈️" },
  { day: "Patchy light snow with thunder", emoji: "⛈️" },
  { day: "Moderate or heavy snow with thunder", emoji: "⛈️" },
];

export function getWeatherIcons(weatherString: string) {
  const findEmoji = weatherIcons.filter((el) => el.day === weatherString);

  if (findEmoji.length > 0 && findEmoji[0]?.emoji) {
    return findEmoji[0].emoji;
  }

  return "";
}
