import "./BudgetManagement.scss";
import cx from "classnames";

function BudgetManagement({ className, management, budget }) {
  return (
    <div className={cx("BudgetManagement", className)}>
      <div className="management">{management}</div>
      <div className="budget">{budget}</div>
    </div>
  );
}

export default BudgetManagement;
