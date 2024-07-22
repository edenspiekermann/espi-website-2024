export function formateDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", options);
}
