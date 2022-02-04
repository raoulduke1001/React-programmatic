import "./CardDashedGraph.scss";

import { Fragment } from "react";
import { Button, Typography } from "../../ui";
import { Catalog, Category, RechartsDashed, DatePicker } from "../";

import { ReactComponent as SaveIcon } from "../../assets/images/export.svg";

function CardDashedGraph({ title }) {
  return (
    <div className="CardDashedGraph">
      <div className="header">
        {title && (
          <Fragment>
            <div className="title">
              <Typography variant="h2" color="dark-gray">
                Общая статистика
              </Typography>
              <Typography variant="body1" color="dark-gray">
                Период (1/06/2021-01/07/2021)
              </Typography>
            </div>
          </Fragment>
        )}

        <div className="interface">
          <div className="tabs">
            <Catalog>Все</Catalog>
            <Catalog>Баннерные объявления</Catalog>
            <Catalog>Native объявления</Catalog>
            <Catalog>Мобильные объявления</Catalog>
          </div>

          <DatePicker />
          <Button variant="primary">
            Сохранить отчет
            <SaveIcon />
          </Button>
        </div>
      </div>
      <div className="main-block">
        <div className="graph">
          <RechartsDashed />
        </div>
        <div className="category-list">
          <Category type="Клики" amount="2 179" />
          <Category type="Показы" amount="403 439" variant="shows" />
          <Category type="CTR , %" amount="0,54 %" variant="coverage" />
          <Category type="Конверсия" amount="2,6%" variant="conversion" />
          <Category type="Avg. CPC" amount="35₽" variant="avg" />
          <Category type="Общий Бюджет" amount="76 250 ₽" variant="black" />
        </div>
      </div>
    </div>
  );
}

export default CardDashedGraph;
