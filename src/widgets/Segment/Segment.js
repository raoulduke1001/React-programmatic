import "./Segment.scss";
import { useState } from "react";

import { Typography } from "../../ui";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-big.svg";

function Segment() {
  const [openSegment, setOpenSegment] = useState(false);

  const toggleOpenSegment = () => setOpenSegment(!openSegment);

  return (
    <div className="Segment">
      <div className="segment-header" onClick={toggleOpenSegment}>
        <div className="column">
          <ArrowIcon
            className={openSegment ? "segment-icon__open" : "segment-icon"}
          />
          <Typography variant="h2" color="dark-gray">
            1 сегмент
          </Typography>
        </div>
        <div className="column">
          <Typography variant="body1" color="dark-gray">
            Доступны для привлечения:
          </Typography>
          <Typography variant="body1" color="blue">
            738 880 чел.
          </Typography>
        </div>
      </div>

      {openSegment && <div className="segment-content">1231231</div>}
    </div>
  );
}

export default Segment;
