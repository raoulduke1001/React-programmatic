import "./Cube.scss";
import { memo } from "react";
import cx from "classnames";
import { useFormikContext } from "formik";

function Cube({ variant, hour, day, disabled }) {
  const formik = useFormikContext();

  const weekday =
    variant === "weekday" &&
    formik.values.media_plan.show_schedules[day].includes(hour);

  const weekend =
    variant === "weekend" &&
    formik.values.media_plan.show_schedules[day].includes(hour);

  const handleClick = () => {
    const currentDay = formik.values.media_plan.show_schedules[day];
    if (currentDay.includes(hour)) {
      const newCurrentDay = currentDay.filter((h) => h !== hour);
      formik.setFieldValue(`media_plan.show_schedules.${day}`, newCurrentDay);
    } else {
      const newCurrentDay = currentDay.concat(hour);
      formik.setFieldValue(`media_plan.show_schedules.${day}`, newCurrentDay);
    }
  };

  return (
    <div
      className={cx("Cube", { weekday, weekend, disabled })}
      onClick={handleClick}
    ></div>
  );
}

export default memo(Cube);
