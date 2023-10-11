import 'date-fns';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './JmDateTimePicker.scss';

const theme = createMuiTheme({
  palette: {
    background: {
      main: '#0A226B',
    },
    primary: {
      main: '#0a226b',
    },
    secondary: {
      main: '#76c9d2',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#9D399E',
    },
  },
});

function JmDateTimePicker(props) {
  const [selectedDate, setSelectedDate] = useState(props.date);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onDateSelection(date);
  };
  return (
    <div className={"JmDateTimePicker"}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifycontent="space-around"  theme={theme}>
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
    </div>
  );
}

export default JmDateTimePicker;