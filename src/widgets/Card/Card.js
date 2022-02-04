import "./Card.scss";
import { useState } from "react";

import { Button } from "../../ui";
import { CardDashedGraph } from "../";

import { ReactComponent as ArrowWhiteIcon } from "../../assets/images/arrow-white.svg";

function Card({ children, settings, toggle }) {
  const [visibleGraph, setVisibleGraph] = useState(false);

  const toggleVisibleGraph = () => {
    setVisibleGraph(!visibleGraph);
  };

  return (
    <div className="Card">
      <div className="content">{children}</div>

      {toggle && (
        <Button
          variant="gradient"
          className="toggle"
          onClick={toggleVisibleGraph}
        >
          <ArrowWhiteIcon className={visibleGraph ? "rotated" : ""} />
        </Button>
      )}

      {visibleGraph && <CardDashedGraph />}
    </div>
  );
}

export default Card;
