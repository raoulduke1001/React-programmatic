import "./BankAudits.scss";

import { Button, Typography } from "../../ui";

function BankAudits() {
  return (
    <div className="BankAudits">
      <Typography variant="h1" color="dark-gray">
        Ваши Банковские реквизиты
      </Typography>
      <div className="rows">
        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Общие данные
          </Typography>
          <div className="items">
            <input type="text" placeholder="Полное Наименование" />
            <input type="text" placeholder="Сокращенное наименование" />
            <input type="text" placeholder="Юридический адрес" />
            <input type="text" placeholder="Почтовый адрес" />
          </div>
        </div>

        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Контактная информация
          </Typography>
          <div className="items">
            <input type="text" placeholder="Контактный телефон" />
            <input type="email" placeholder="E-mail" />
          </div>
        </div>

        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Банковские реквизиты
          </Typography>
          <div className="items">
            <input type="text" placeholder="ИНН / КПП" />
            <input type="text" placeholder="ОГРН" />
            <input type="text" placeholder="Директор" />
            <input type="text" placeholder="Наименование банка" />
            <input type="text" placeholder="БИК" />
            <input type="text" placeholder="Корреспондентский счет" />
            <input type="text" placeholder="Расчетный счет" />
            <input type="text" placeholder="ОКВЭД" />
          </div>
        </div>

        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Налогооблажение
          </Typography>
          <div className="items">
            <input type="text" placeholder="Система налогообложения" />
          </div>
        </div>
      </div>

      <div className="actions">
        <Button variant="primary">Сохранить</Button>
      </div>
    </div>
  );
}

export default BankAudits;
