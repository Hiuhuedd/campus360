import AsyncStorage from "@react-native-async-storage/async-storage";

// Array of days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Array of working hours
const workingHours = Array.from({ length: 13 }, (_, index) => index + 7);

// Function to generate an empty timetable slot object
const createEmptySlot = (index) => ({
  unitCode: null,
  unitName: null,
  start: index+6 < 12 ? `${index+6}:00 AM` : `${(index +6)-12}:00 PM`,
  end: (index + 7) < 12 ? `${index + 7}:00 AM` : `${(index + 7)-12}:00 PM`,
  professor: null,
  index: index,
});
export let timetable 
// Create the timetable array
AsyncStorage.getItem('myTimetable').then(value => {
  if (value !== null) {
    // Timetable exists, do something with the value
    timetable = JSON.parse(value);
    // ... Your code here ...
  } else {
    // Timetable does not exist, create a default timetable
      timetable = daysOfWeek.map((day) => {
      const daySlots = workingHours.map((hour) => createEmptySlot(hour - 7));
      return { day, slots: daySlots };
    });
  }
});

// Update timetable slots with actual classes
export const updateTimetableSlot = async(dayIndex, hourIndex, slotData) => {
  const slot = timetable[dayIndex].slots[hourIndex];
  Object.assign(slot, slotData);
  return timetable
};

// Example usage
