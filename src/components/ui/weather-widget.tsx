import { getWeatherIcons } from "@/lib/utils";

interface WeatherWidgetInterface {
  text: string;
  temp?: number;
}

export function WeatherWidget({ text, temp }: WeatherWidgetInterface) {
  return (
    <span className="bg-orange-500 px-2 py-1 rounded-md mx-2 relative">
      {text} <span className="text-xs">{temp}°C</span>
      <span className="absolute -top-2 -left-1">{getWeatherIcons(text)}</span>
    </span>
  );
}
