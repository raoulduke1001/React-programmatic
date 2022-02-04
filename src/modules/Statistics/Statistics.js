import "./Statistics.scss";

import { Typography } from "../../ui";
import {
  Sort,
  Card,
  CategoryStatistics,
  InterestsStatistics,
  Devices,
  Geography,
  CardDashedGraph,
} from "../../widgets";

function Statistics() {
  return (
      <div className="Statistics">
        <Typography variant="h1" color="dark-gray">
          Статистика
        </Typography>
        <Sort statistics />
        <div className="line"></div>
        <div className="container">
          <CategoryStatistics
            title="Показы"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics
            title="Клики"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics
            title="Расход (₽)"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics
            title="CTR (%)"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics
            title="CPC ( ₽)"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics
            title="eCPM ( ₽)"
            amount="199 340"
            difference="+ 23%"
          />
          <CategoryStatistics title="CPA" amount="199 340" difference="+ 23%" />
        </div>
        <div className="container">
          <InterestsStatistics />
          <Devices />
          <Geography />
        </div>
        <Card>
          <CardDashedGraph title />
        </Card>
      </div>
  );
}

export default Statistics;
