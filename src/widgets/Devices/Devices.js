import "./Devices.scss";

import { Typography } from "../../ui";
import { CardWhite, AreaChart } from "../../widgets";

function Devices() {
  return (
    <div className="Devices">
      <CardWhite>
        <Typography variant="h2" color="dark-gray">
          Устройства
        </Typography>
        <Typography className="name" variant="body1" color="dark-gray">
          Авто
        </Typography>
        <AreaChart devices="Мобильные" percent="65%" />
        <AreaChart devices="Десктопные" percent="22%" />
        <AreaChart devices="Планшетные" percent="13%" />
      </CardWhite>
    </div>
  );
}

export default Devices;
