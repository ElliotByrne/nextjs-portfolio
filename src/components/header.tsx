import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkC } from "./ui/link";
import { TypographyH1, TypographyP } from "./ui/typography";
import { Twitter, Linkedin, Github } from "lucide-react";
import Navigation from "./navigation";
import { WeatherWidget } from "./ui/weather-widget";

const API_KEY = process.env.WEATHER_API_KEY;

export async function fetchWeather() {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Sydney&aqi=no$`
    );

    return data.json();
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to connect to weather API.");
  }
}

// Static template on every page.
export default async function Header() {
  const weather = await fetchWeather();

  return (
    <header>
      <div className="flex flex-col gap-4">
        <Avatar>
          <AvatarImage src="profilepic.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <TypographyH1>Elliot Byrne</TypographyH1>
          <TypographyP>Senior Front-End Engineer</TypographyP>
        </div>
        <TypographyP size="small">
          Based in
          {weather && (
            <WeatherWidget
              text={weather.current.condition.text}
              temp={weather.current.temp_c}
            />
          )}
          Sydney, Australia
        </TypographyP>

        <div className="flex gap-4">
          <LinkC href="https://x.com/elliotbyrn">
            <Twitter className="mr-2 h-4 w-4" />
          </LinkC>
          <LinkC href="https://x.com/elliotbyrn">
            <Linkedin className="mr-2 h-4 w-4" />
          </LinkC>
          <LinkC href="https://x.com/elliotbyrn">
            <Github className="mr-2 h-4 w-4" />
          </LinkC>
        </div>
        <Separator />
      </div>
      <Navigation />
    </header>
  );
}
