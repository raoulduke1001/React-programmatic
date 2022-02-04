import "./CategoryStatistics.scss";
import { CardWhite } from "../";

function CategoryStatistics({ title, amount, difference }) {
  return (
    <div className="CategoryStatistics">
      <CardWhite>
        <div className="title">{title}</div>
        <div className="amount">{amount}</div>
        <div className="difference">{difference}</div>
      </CardWhite>
    </div>
  );
}

export default CategoryStatistics;
