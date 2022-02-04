import "./Category.scss";

import { Checkbox, Line } from "../../ui";

function Category({ type, amount, variant }) {
  return (
    <div className="Category">
      <Line variant={variant} />
      <Checkbox onChange={() => null} value={Boolean} />
      <div className="main">
        <div className="type">{type}</div>
        <div className="amount">{amount}</div>
      </div>
    </div>
  );
}

export default Category;
