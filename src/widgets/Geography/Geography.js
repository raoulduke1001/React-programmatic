import "./Geography.scss";

import { Typography } from "../../ui";
import { CardWhite, GeographyData, RechartsPie } from "../../widgets";

function Geography() {
  return (
    <div className="Geography">
      <CardWhite>
        <Typography variant="h2" color="dark-gray">
          География
        </Typography>
        <div className="graph">
          <RechartsPie />
        </div>
        <GeographyData city="Московская область" percent="65%" />
        <GeographyData
          variant="yellow"
          city="Московская область"
          percent="65%"
        />
        <GeographyData
          variant="green"
          city="Московская область"
          percent="65%"
        />
        <GeographyData
          variant="purple"
          city="Московская область"
          percent="65%"
        />
        <GeographyData variant="red" city="Московская область" percent="65%" />
      </CardWhite>
    </div>
  );
}

export default Geography;
