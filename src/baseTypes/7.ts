/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
  and returns a boolean value indicating whether it is a weekday or a weekend.
*/

enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day == WeekDays.Sunday;
}
