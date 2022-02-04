import "./GeographyData.scss";
import cx from "classnames";

import { Typography } from "../../ui";

function GeographyData({ variant, city, percent }) {
  return (
    <div className="GeographyData">
      <div className={cx("cube", variant)}></div>
      <div className="city">
        <Typography variant="body1" color="dark-gray">
          {city}
        </Typography>
      </div>
      <div className="percent">
        <Typography variant="body1" color="dark-gray">
          {percent}
        </Typography>
      </div>
    </div>
  );
}

export default GeographyData;
