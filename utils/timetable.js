// Array of days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Array of working hours
const workingHours = Array.from({ length: 13 }, (_, index) => index + 7);

// Function to generate an empty timetable slot object
const createEmptySlot = (index) => ({
  unitCode: null,
  unitName: null,
  start: `${index + 7}:00am`,
  end: `${index + 8}:00am`,
  professor: null,
  index: index,
});

// Create the timetable array
export const timetable = daysOfWeek.map((day) => {
  const daySlots = workingHours.map((hour) => createEmptySlot(hour - 7));
  return { day, slots: daySlots };
});

// Update timetable slots with actual classes
export const updateTimetableSlot = (dayIndex, hourIndex, slotData) => {
  const slot = timetable[dayIndex].slots[hourIndex];
  Object.assign(slot, slotData);
};

// Example usage
updateTimetableSlot(0, 2, {
  unitCode: 'ECU100',
  unitName: 'Mathematics 1',
  start: '9:00am',
  end: '10:00am',
  professor: 'Prof. Maraga',
  index: 2,
});

console.log(timetable);