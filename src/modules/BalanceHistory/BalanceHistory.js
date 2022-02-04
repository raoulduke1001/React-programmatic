import "./BalanceHistory.scss";

import { BalanceHistoryTable, Sort } from "../../widgets";

function BalanceHistory() {
  return (
    <div className="BalanceHistory">
      <Sort statistics />
      <BalanceHistoryTable />
    </div>
  );
}

export default BalanceHistory;
