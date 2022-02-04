import "./Counters.scss";

import { Typography, Button } from "../../ui";
import { Sort, CountersTable } from "../../widgets";

function Counters() {
  return (
      <div className="Counters">
        <Typography variant="h1" color="dark-gray">
          Счетчики
        </Typography>
        <Sort statistics />
        <Button variant="primary" className="add">
          Добавить счетчик
        </Button>
        <CountersTable />
      </div>
  );
}

export default Counters;
