import "./Balance.scss";

import { Typography, Button } from "../../ui";
import { CardWhite } from "../../widgets";

function Balance() {
  return (
      <div className="Balance">
        <Typography variant="h1" color="dark-gray">
          Баланс
        </Typography>
        <CardWhite>
          <Typography variant="h1" color="dark-gray">
            Онлайн пополнение
          </Typography>
          <Typography variant="h2" color="dark-gray">
            Сумма
          </Typography>
          <input type="number" placeholder="Сумма пополнения" />
          <div className="actions">
            <Button variant="primary">Сохранить</Button>
          </div>
        </CardWhite>
      </div>
  );
}

export default Balance;
