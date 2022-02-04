import "./CompanyBubble.scss";

import { Typography, Switch, Line } from "../../ui";
import { Card, BudgetManagement, Catalog } from "../../widgets";

function CompanyBubble() {
  return (
    <div className="CompanyBubble">
      <Card settings toggle>
        <div className="column">
          <div className="client">
            <Typography variant="h2" color="dark-gray">
              Programmatic
            </Typography>
            <Typography variant="span" color="dark-gray">
              id42012518
            </Typography>
            <Switch />
          </div>
          <div className="category">
            <Catalog>Муж/Жен</Catalog>
            <Catalog>От 30 до 55 лет</Catalog>
            <Catalog>Доход выше среднего/высокий</Catalog>
            <Catalog>Ленинградская область </Catalog>
            <Catalog>Санкт-Петебрург </Catalog>
            <Catalog>Владельцы Volkswagen сроком более 3 лет</Catalog>
            <Catalog>Покупка нового авто</Catalog>
          </div>
        </div>
        <Line />
        <div className="column">
          <Typography className="title" variant="h2" color="dark-gray">
            БЮДЖЕТ И УПРАВЛЕНИЕ
          </Typography>
          <div className="items">
            <BudgetManagement management="Avg. CPC" budget="35₽" />
            <BudgetManagement management="Общий Бюджет" budget="76 250 ₽" />
            <BudgetManagement management="Дневной Бюджет" budget="2541 ₽" />
          </div>
        </div>
        <Line />
        <div className="column">
          <Typography className="title" variant="h2" color="dark-gray">
            СТАТИСТИКА ЗА СЕГОДНЯ
          </Typography>
          <div className="items">
            <BudgetManagement
              className="statistics"
              management="CTR , %"
              budget="0,54 %"
            />
            <BudgetManagement
              className="statistics"
              management="Показы"
              budget="403 439"
            />
            <BudgetManagement
              className="statistics"
              management="Клики"
              budget="2 179"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CompanyBubble;
