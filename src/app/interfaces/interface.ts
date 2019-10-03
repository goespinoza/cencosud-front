export interface Ciudad {
    cuidad: string;
    lat: number;
    lng: number;
    clima: Clima;
}

export interface Clima {
    latitude: number;
    longitude: number;
    offset: number;
    timezone: string;
    currently: Currently;
}

export interface Currently {
    apparentTemperature: number;
    cloudCover: number;
    dewPoint: number;
    humidity: number;
    icon: string;
    nearestStormDistance: number;
    ozone: number;
    precipIntensity: number;
    precipProbability: number;
    precipType: string;
    pressure: number;
    summary: string;
    temperature: number;
    time: number;
    uvIndex: number;
    visibility: number;
    windBearing: number;
    windGust: number;
    windSpeed: number;
}