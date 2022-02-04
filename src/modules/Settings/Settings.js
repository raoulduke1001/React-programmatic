import "./Settings.scss";

import { Button, Typography, RadioButton } from "../../ui";

function Settings() {
  return (
    <div className="Settings">
      <Typography variant="h1" color="dark-gray">
        Настройки
      </Typography>
      <div className="rows">
        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Язык интерфейса
          </Typography>
          <div className="items">
            <RadioButton>Русский (RU)</RadioButton>
            <RadioButton>English (EN)</RadioButton>
          </div>
        </div>
        <div className="row">
          <Typography variant="h2" color="dark-gray">
            Справочная валюта
          </Typography>
          <div className="items">
            <RadioButton>Отсутствует</RadioButton>
            <RadioButton>RUB (₽)</RadioButton>
            <RadioButton>US dollar ($)</RadioButton>
            <RadioButton>Euro (€)</RadioButton>
            <RadioButton>Yuan (¥)</RadioButton>
          </div>
        </div>
      </div>
      <div className="actions">
        <Button variant="primary">Сохранить</Button>
      </div>
    </div>
  );
}

export default Settings;
