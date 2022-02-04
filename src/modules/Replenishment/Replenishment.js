import "./Replenishment.scss";
import { useState } from "react";

import { Button } from "../../ui";
import { ReplenishmentForm, ReplenishmentTable, Sort } from "../../widgets";

function Replenishment() {
  const [visibleForm, setVisibleForm] = useState(false);

  const toggleVisibleForm = () => {
    setVisibleForm(!visibleForm);
  };

  return (
    <div className="Replenishment">
      {!visibleForm && (
        <Button
          variant="primary"
          className="refill"
          onClick={toggleVisibleForm}
        >
          Пополнить
        </Button>
      )}

      {visibleForm && <ReplenishmentForm />}

      <Sort statistics />

      <ReplenishmentTable />
    </div>
  );
}

export default Replenishment;
