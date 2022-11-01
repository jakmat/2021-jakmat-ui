import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function JmDateTimePicker(props) {
  const [selectedDate, setSelectedDate] = useState(props.date);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
    props.onDateSelection(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifycontent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Date"
          format="dd.MM.yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Select Time"
          format={"HH:MM"}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default JmDateTimePicker;