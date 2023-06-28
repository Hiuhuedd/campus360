import { BASE_URL } from "./index"
import * as Location from 'expo-location'
import { GOOGLE_MAP_KEY } from './index';



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

function getOrdinalSuffix(day) {
  const j = day % 10;
  const k = day % 100;

  if (j === 1 && k !== 11) {
    return "st";
  }

  if (j === 2 && k !== 12) {
    return "nd";
  }

  if (j === 3 && k !== 13) {
    return "rd";
  }

  return "th";
}
export const analyzeFinancialData=(data)=> {
  const income = parseInt(data.income);
  const expenses = parseInt(data.expenses);
  const debtRepayments = parseInt(data["debt repayments"]);
  const savings = parseInt(data.savings);
  const cashInHand = parseInt(data["cash in hand"]);

  const monthlyNetIncome = income - expenses - debtRepayments - savings;

  let color;

  if (monthlyNetIncome >= 20000) {
    color = 0;
  } else if (monthlyNetIncome >= 10000 && monthlyNetIncome < 20000) {
    color = 1;
  } else if (monthlyNetIncome >= 5000 && monthlyNetIncome < 10000) {
    color = 2;
  } else {
    color = 3;
  }

  if (cashInHand > 0.1 * income) {
    if (color === 0) {
      color = 1;
    } else if (color === 1) {
      color = 2;
    } else if (color === 2) {
      color = 3;
    }
  }

  if (debtRepayments > 0.3 * income) {
    if (color === 1) {
      color = 0;
    } else if (color === 2) {
      color = 1;
    } else if (color === 3) {
      color = 2;
    }
  }

  return color;
}
