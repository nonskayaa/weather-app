export default function formatDate(inputDate: string): string {
  const date: Date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const formattedDate: string = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
