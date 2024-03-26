export default function formatTime(inputTime: string): string {
  const date = new Date(inputTime);
  let hours = date.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  return `${hours}${meridiem}`;
}
