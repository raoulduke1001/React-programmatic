import "./ContactDetails.scss";

import { Button, Typography } from "../../ui";

function ContactDetails() {
  return (
    <div className="ContactDetails">
      <Typography variant="h1" color="dark-gray">
        Аудитория
      </Typography>
      <div className="rows">
        <div className="row-wrapp">
          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Имя
            </Typography>
            <div className="items">
              <input type="text" placeholder="Имя пользователя" />
              <input type="text" placeholder="ФИО" />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Контактная информация
            </Typography>
            <div className="items">
              <input type="text" placeholder="Контактный телефон" />
              <input type="text" placeholder="Основной e-mail" />
            </div>
          </div>
        </div>

        <div className="row row-agent">
          <Typography variant="h2" color="dark-gray">
            Об агенстве
          </Typography>
          <div className="items">
            <input type="text" placeholder="Мое агентство" />
          </div>
        </div>
      </div>

      <div className="actions">
        <Button variant="primary">Сохранить</Button>
      </div>
    </div>
  );
}

export default ContactDetails;
