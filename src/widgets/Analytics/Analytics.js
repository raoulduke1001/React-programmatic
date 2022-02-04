import "./Analytics.scss";

import { Button } from "../../ui";
import { Category, Card } from "../";

import { ReactComponent as ExportIcon } from "../../assets/images/export.svg";

function Analytics() {
  return (
    <div className="Analytics">
      <Card toggle>
        <Category type="Клики" amount="2 340" />
        <Category type="Показы" amount="2 340" variant="shows" />
        <Category type="Охват" amount="2 340" variant="coverage" />
        <Category type="Конверсия" amount="2,6%" variant="conversion" />
        <Category type="Бюджет" amount="150 000,00 ₽" variant="budget" />
        <Button variant="primary" className="save">
          Сохранить отчет
          <ExportIcon />
        </Button>
      </Card>
    </div>
  );
}

export default Analytics;
