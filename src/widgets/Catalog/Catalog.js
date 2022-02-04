import "./Catalog.scss";

import { Typography } from "../../ui";

function Catalog({ children }) {
  return (
    <button className="Catalog">
      <Typography variant="body2" color="dark-gray">
        {children}
      </Typography>
    </button>
  );
}

export default Catalog;
