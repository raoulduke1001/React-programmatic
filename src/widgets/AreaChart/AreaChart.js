import "./AreaChart.scss";

import { Typography } from "../../ui";
import { RechartsTinyArea } from "../../widgets";

function AreaChart({ devices, percent }) {
  return (
    <div className="AreaChart">
      <div className="about">
        <Typography variant="body1" color="dark-gray">
          {devices}
        </Typography>
        <Typography variant="h1" color="dark-gray">
          {percent}
        </Typography>
      </div>
      <div className="graph">
        <RechartsTinyArea />
      </div>
    </div>
  );
}

export default AreaChart;
