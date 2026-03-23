import { GoogleGenAI } from "@google/genai";

export interface WeatherInfo {
  temperature: number;
  condition: string;
  isFallback: boolean;
}

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=31.2304&longitude=121.4737&current_weather=true';

export const fetchWeather = async (): Promise<WeatherInfo> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    
    if (data.current_weather) {
      return {
        temperature: data.current_weather.temperature,
        condition: String(data.current_weather.weathercode),
        isFallback: false
      };
    }
    throw new Error('Invalid data format');
  } catch (error) {
    console.warn("Primary weather API failed, attempting AI fallback...", error);
    return await fetchAiWeather();
  }
};

const fetchAiWeather = async (): Promise<WeatherInfo> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What is the current weather in Shanghai right now? Return ONLY a JSON object with 'temp' (number, Celsius) and 'code' (WMO weather code, 0-99). Example: {\"temp\": 15, \"code\": 0}",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json"
      },
    });

    const result = JSON.parse(response.text || '{}');
    return {
      temperature: result.temp ?? 20,
      condition: String(result.code ?? 0),
      isFallback: true
    };
  } catch (aiError) {
    console.error("AI weather fallback failed", aiError);
    // Ultimate fallback: static reasonable data based on typical Shanghai weather
    return {
      temperature: 18,
      condition: "0",
      isFallback: true
    };
  }
};
