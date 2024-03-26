export default function convertFromKelvinToCelsius(kelvin: number): number {
  return Math.round(kelvin - 273);
}