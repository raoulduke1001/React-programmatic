import "./Sort.scss";
import cx from "classnames";

import { Button, Select } from "../../ui";
import { DatePicker } from "../";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { ReactComponent as ExportIcon } from "../../assets/images/export.svg";

function Sort({ company, statistics }) {
  return (
    <div className="Sort">
      {company && (
        <div className={cx("container", "container-company")}>
          <div className="search">
            <input type="text" placeholder="Поиск" />
            <SearchIcon />
          </div>
          <Select placeholder="Все кампании" />
          <DatePicker />
          <input type="text" placeholder="Бюджет" />
          <input type="text" placeholder="Ставка" />
        </div>
      )}
      {statistics && (
        <div className={cx("container", "container-statistics")}>
          <Select placeholder="Все кампании" />
          <DatePicker />

          <Button variant="primary" className="save">
            Сохранить отчет
            <ExportIcon />
          </Button>
        </div>
      )}
    </div>
  );
}

export default Sort;
