import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import styled from '@emotion/styled';
import { FormHelperText } from '@mui/material';

import { ReactComponent as CalendarSvg } from '../assets/svg/calendar.svg';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const StyledDateRangePicker = styled(DateRangePicker)`
  height: 56px;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding-left: 14px;
  padding-right: 14px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #10182899;

  .react-calendar {
    border-radius: 12px;
    border-color: #10182833;
  }

  .react-calendar__month-view__weekdays__weekday > * {
    text-decoration-line: none;
  }

  .react-daterange-picker__inputGroup__input:invalid {
    background-color: transparent;
  }

  .react-daterange-picker__wrapper {
    border: none;
  }

  .react-daterange-picker__range-divider,
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation__arrow {
    font-size: 30px;
  }

  .react-calendar__navigation__label {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.2px;
    text-align: center;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }

  .react-calendar__tile--now {
    background-color: unset;
  }

  .react-calendar__tile--now.react-calendar__tile--active {
    background-color: #006edc;
  }
`;
export const DateRangeField = ({ error, helperText, ...props }) => {
  return (
    <>
      <StyledDateRangePicker
        {...props}
        calendarIcon={<CalendarSvg />}
        clearIcon={null}
        locale="en-US"
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </>
  );
};
