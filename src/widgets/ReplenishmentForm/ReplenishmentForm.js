import "./ReplenishmentForm.scss";

import { Button, Typography, Select } from "../../ui";
import { CardWhite } from "../";

function ReplenishmentForm() {
  return (
    <div className="ReplenishmentForm">
      <CardWhite>
        <Typography variant="h1" color="dark-gray">
          Пополнение
        </Typography>
        <div className="rows">
          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Кампания
            </Typography>
            <div className="items">
              <input type="text" placeholder="Название кампании" />
              <Select placeholder="ИНН" variant="gray" />
              <Select placeholder="Тип плательщика" variant="gray" />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Банковские реквизиты
            </Typography>
            <div className="items">
              <input type="text" placeholder="БИК" />
              <input type="text" placeholder="Р/С" />
              <input type="text" placeholder="Кор. счет" />
              <input type="text" placeholder="Название банка" />
              <input type="text" placeholder="КПП" />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Контактные данные
            </Typography>
            <div className="items">
              <input type="text" placeholder="Фактический адрес" />
              <input type="text" placeholder="Юридический адрес" />
              <input type="text" placeholder="Ф.И.О. контактного лица" />
              <input type="phone" placeholder="Телефон" />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Сумма
            </Typography>
            <div className="items">
              <input type="text" placeholder="Сумма пополения" />
              <Select placeholder="Все кампании" variant="gray" />
            </div>
          </div>
        </div>

        <div className="actions">
          <Button variant="secondary">Отмена</Button>
          <Button variant="primary">Пополнить</Button>
        </div>
      </CardWhite>
    </div>
  );
}

export default ReplenishmentForm;
