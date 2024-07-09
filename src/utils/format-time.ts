export function formatTime(date: Date, timeZone: string) {
  const options: Intl.DateTimeFormatOptions = {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const timeString = date.toLocaleTimeString("en-US", options);
  const [time, period] = timeString.split(" ");
  const [hour, minute] = time.split(":");
  const formattedHour = hour.startsWith("0") ? hour.slice(1) : hour;
  return { hour: formattedHour, minute, period };
}
