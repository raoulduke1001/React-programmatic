import "./DatePicker.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import deLocale from "date-fns/locale/ru";
import { format } from "date-fns";
import { useFormikContext } from "formik";

import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-right-blue.svg";

function DatePicker() {
  const [value, setValue] = React.useState([null, null]);
  const today = new Date();

  const formik = useFormikContext();

  return (
    <div className="DatePicker">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
        <DateRangePicker
          label="Advanced keyboard"
          value={value}
          minDate={today}
          mask="__.__.____"
          onChange={(newValue) => {
            if (newValue[0]) {
              formik.setFieldValue(
                "media_plan.date_start",
                format(newValue[0], "yyyy-MM-dd")
              );
            }
            if (newValue[1]) {
              formik.setFieldValue(
                "media_plan.date_end",
                format(newValue[1], "yyyy-MM-dd")
              );
            }
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <input
                className="date-picker"
                ref={startProps.inputRef}
                {...startProps.inputProps}
                placeholder="Начало периода"
              />
              <Box sx={{ mx: 1 }}>
                <ArrowIcon />
              </Box>
              <input
                className="date-picker"
                ref={endProps.inputRef}
                {...endProps.inputProps}
                placeholder="Окончание периода"
              />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DatePicker;
