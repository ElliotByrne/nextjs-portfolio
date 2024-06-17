import { getWeatherMetaData } from "@/lib/utils";

interface WeatherWidgetInterface {
  text: string;
  temp?: number;
}

export function WeatherWidget({ text, temp }: WeatherWidgetInterface) {
  const weatherMetaData = getWeatherMetaData(text);
  if (!weatherMetaData || !weatherMetaData.adjective || !weatherMetaData.emoji)
    return;

  return (
    <span className="bg-gradient-to-t from-indigo-300 to-white-700 px-2 py-1 rounded-md mx-2 relative">
      {weatherMetaData.adjective.toLowerCase()}{" "}
      <span className="text-xs">{temp}°C</span>
      <span className="absolute -top-2 -left-1">
        {getWeatherMetaData(text).emoji}
      </span>
    </span>
  );
}
