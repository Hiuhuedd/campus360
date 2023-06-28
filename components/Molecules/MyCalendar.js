import moment from 'moment';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker-expo';
import { COLORS, SIZES } from '../../constants/theme';
import TextAtom from '../Atoms/TextAtom';

const MyCalendar = ({handleSetDate, }) => {
  const [focused, setFocused] = useState(true);
  const [selectedDate, setselectedDate] = useState(`${moment(new Date()).format('MMMM D, YYYY')}`);

  const onFocusChange = () => {
    setFocused(!focused);
  };
const handleSetSelectedDate=(d)=>{
  handleSetDate(d,)
  setselectedDate(d)
}
  return (
    <View >
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="MMMM D, YYYY"
        minDate="January 2, 1900"
        maxDate={`${moment(new Date()).format('MMMM D, YYYY')}`}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date)=>handleSetSelectedDate(date)}
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth: focused ? 2 : 1,
            borderRadius: 5,
            borderColor: "transparent",
            alignItems: 'flex-start',
            padding: 0,
           

          },
          placeholderText: {
            color: '#fff',
          },
          dateText: {
            fontSize: 10,
            color:COLORS.green
          },
        }}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  datePicker: {
   height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '90%',
    color: '#fff',

  },
});

export default MyCalendar;
