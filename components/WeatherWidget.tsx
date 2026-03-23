import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, CloudSnow, CloudLightning, Sun, CloudFog } from 'lucide-react';
import { useApp } from '../App';

interface WeatherData {
  temperature: number;
  weathercode: number;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useApp();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Shanghai coordinates
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=31.2304&longitude=121.4737&current_weather=true');
        const data = await res.json();
        if (data.current_weather) {
          setWeather({
            temperature: data.current_weather.temperature,
            weathercode: data.current_weather.weathercode,
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading || !weather) return null;

  // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-4 h-4 text-yellow-500" />;
    if (code >= 1 && code <= 3) return <Cloud className="w-4 h-4 text-gray-400" />;
    if (code >= 45 && code <= 48) return <CloudFog className="w-4 h-4 text-gray-400" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-4 h-4 text-blue-400" />;
    if (code >= 71 && code <= 77) return <CloudSnow className="w-4 h-4 text-blue-200" />;
    if (code >= 80 && code <= 82) return <CloudRain className="w-4 h-4 text-blue-500" />;
    if (code >= 85 && code <= 86) return <CloudSnow className="w-4 h-4 text-blue-300" />;
    if (code >= 95 && code <= 99) return <CloudLightning className="w-4 h-4 text-yellow-400" />;
    return <Sun className="w-4 h-4 text-yellow-500" />;
  };

  const getWeatherText = (code: number, lang: string) => {
    const isZh = lang === 'zh';
    if (code === 0) return isZh ? '晴' : 'Clear';
    if (code >= 1 && code <= 3) return isZh ? '多云' : 'Cloudy';
    if (code >= 45 && code <= 48) return isZh ? '雾' : 'Fog';
    if (code >= 51 && code <= 67) return isZh ? '雨' : 'Rain';
    if (code >= 71 && code <= 77) return isZh ? '雪' : 'Snow';
    if (code >= 80 && code <= 82) return isZh ? '阵雨' : 'Showers';
    if (code >= 85 && code <= 86) return isZh ? '阵雪' : 'Snow Showers';
    if (code >= 95 && code <= 99) return isZh ? '雷暴' : 'Thunderstorm';
    return isZh ? '晴' : 'Clear';
  };

  return (
    <div className="flex items-center gap-2 text-sm font-medium text-textMuted bg-surface/50 px-3 py-1.5 rounded-full border border-surface backdrop-blur-sm shadow-sm transition-colors hover:bg-surface/80">
      {getWeatherIcon(weather.weathercode)}
      <span className="flex items-center gap-1">
        <span>{language === 'zh' ? '上海' : 'Shanghai'}</span>
        <span className="mx-1 opacity-50">|</span>
        <span>{getWeatherText(weather.weathercode, language)}</span>
        <span className="ml-1">{Math.round(weather.temperature)}°C</span>
      </span>
    </div>
  );
};

export default WeatherWidget;
