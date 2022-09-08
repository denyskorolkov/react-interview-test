import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

/**
 * @param value - selected date
 * @param onChange - func called whenever the date changes
 */
const DatePicker = ({
  value,
  onChange,
}: {
  value: Date;
  onChange: (date: Date) => void;
}) => <ReactDatePicker selected={value} onChange={onChange} />;

export default DatePicker;
