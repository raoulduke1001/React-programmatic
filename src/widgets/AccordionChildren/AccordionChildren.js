import "./AccordionChildren.scss";
import { Typography } from "../../ui";

function AccordionChildren({
  titleChildren,
  shownChildren,
  segmentChildren,
  indexChildren,
  subItems,
}) {
  return (
    <div className="AccordionChildren">
      <div className="accordion-children">
        <Typography className="name" variant="body1" color="dark-gray">
          {titleChildren}
        </Typography>
        <div className="items">
          <div className="item">
            <Typography variant="body1" color="dark-gray">
              {shownChildren}
            </Typography>
          </div>
          <div className="item">
            <Typography variant="body1" color="dark-gray">
              {segmentChildren}
            </Typography>
          </div>
          <div className="item">
            <Typography variant="body1" color="blue">
              {indexChildren}
            </Typography>
          </div>
        </div>
      </div>

      {subItems && (
        <div className="accordion-sub__children">
          <div className="name">
            <Typography variant="body1" color="dark-gray">
              {titleChildren}
            </Typography>
          </div>
          <div className="items">
            <div className="item">
              <Typography variant="body1" color="dark-gray">
                {shownChildren}
              </Typography>
            </div>
            <div className="item">
              <Typography variant="body1" color="dark-gray">
                {segmentChildren}
              </Typography>
            </div>
            <div className="item">
              <Typography variant="body1" color="blue">
                {indexChildren}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionChildren;
