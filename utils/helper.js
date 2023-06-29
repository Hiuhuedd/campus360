import { BASE_URL } from "./index"
import * as Location from 'expo-location'
import { GOOGLE_MAP_KEY } from './index';
import { ProgramsArray } from "../constants/content/programs";



export const greet=() =>{
  const time = new Date().getHours();
  if (time < 12) {
    return 'Good morning';
  } else if (time < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}


export const getDatesAndDays= () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const numDays = new Date(year, month + 1, 0).getDate();
  const datesAndDays = [];

  for (let i = 1; i <= numDays; i++) {
    const date = new Date(year, month, i);
    const day = date.toLocaleString('en-us', { weekday: 'short' });
    const dayName = day.slice(0, 3);
    console.log(day); 
    // const MonthName = day.slice(0, 3); 
    const dateStr = `${i}${getOrdinalSuffix(i)}`;

    datesAndDays.push({ date: dateStr,day:dayName });
  }

  return datesAndDays;
}

export const getProgramByCode=(programCode)=> {
  for (let i = 0; i < ProgramsArray.length; i++) {
    if (ProgramsArray[i].programCode === programCode) {
        return (ProgramsArray[i]) 
    }
  }
  return(null)
}