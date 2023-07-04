import moment from "moment";

export function getTimeSpans() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
  
    const thisWeekStart = new Date();
    thisWeekStart.setDate(today.getDate() - today.getDay());
    const thisWeekEnd = new Date();
    thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
  
    const nextWeekStart = new Date();
    nextWeekStart.setDate(thisWeekStart.getDate() + 7);
    const nextWeekEnd = new Date();
    nextWeekEnd.setDate(nextWeekStart.getDate() + 6);
  
    const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
    const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  
    const formatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    const formatOptions2 = { weekday: 'long', day: 'numeric' };
  
    const timeSpans = {
      today: {
        start: today,
        end: today,
        date: today.toLocaleDateString('en-US', formatOptions),
        day: new Date(today).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
      tomorrow: {
        start: tomorrow,
        end: tomorrow,
        date: tomorrow.toLocaleDateString('en-US', formatOptions),
        day:  new Date(tomorrow).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
      thisWeek: {
        start: thisWeekStart,
        end: thisWeekEnd,
        date: `${thisWeekStart.toLocaleDateString('en-US', formatOptions)} - ${thisWeekEnd.toLocaleDateString('en-US', formatOptions)}`,
        day:  new Date(thisWeekStart).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
      nextWeek: {
        start: nextWeekStart,
        end: nextWeekEnd,
        date: `${nextWeekStart.toLocaleDateString('en-US', formatOptions)} - ${nextWeekEnd.toLocaleDateString('en-US', formatOptions)}`,
        day:  new Date(nextWeekStart).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
      thisMonth: {
        start: thisMonthStart,
        end: thisMonthEnd,
        date: `${thisMonthStart.toLocaleDateString('en-US', formatOptions)} - ${thisMonthEnd.toLocaleDateString('en-US', formatOptions)}`,
        day:  new Date(thisMonthStart).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
      nextMonth: {
        start: nextMonthStart,
        end: nextMonthEnd,
        date: `${nextMonthStart.toLocaleDateString('en-US', formatOptions)} - ${nextMonthEnd.toLocaleDateString('en-US', formatOptions)}`,
        day:  new Date(nextMonthStart).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0].trim()
      },
    };
  
    return timeSpans;
  }
  export const currentTime = moment().format('h:mm A');
  // Example usage:
  const timeSpans = getTimeSpans();
  console.log(timeSpans);
  