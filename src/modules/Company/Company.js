import "./Company.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Typography, Button, Checkbox } from "../../ui";
import {
  Sort,
  SortPopup,
  Analytics,
  CompanyBubble,
  Modal,
} from "../../widgets";

import { ReactComponent as SettingsIcon } from "../../assets/images/settings.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

function Company() {
  const [visibleModalSettings, setVisibleModalSettings] = useState(false);

  const toggleVisibleModalSettings = () =>
    setVisibleModalSettings(!visibleModalSettings);

  return (
      <div className="Company">
        <Typography variant="h1" color="dark-gray">
          Кампании
        </Typography>
        <Sort company />
        <div className="filter">
          <Button variant="rate" onClick={toggleVisibleModalSettings}>
            <SettingsIcon />
            Настройка
          </Button>

          {visibleModalSettings && (
            <Modal
              title="Настройки отображения"
              isOpen={visibleModalSettings}
              onClose={toggleVisibleModalSettings}
            >
              <div className="search__field">
                <input type="text" placeholder="Поиск" />
                <SearchIcon className="search-icon" />
              </div>

              <Typography className="about" variant="h2" color="dark-gray">
                Основные показатели
              </Typography>

              <Checkbox onChange={() => null} value={Boolean}>
                Выбрать все
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                Расход, ₽
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                CTR, %
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                CPC, ₽
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                Доход, ₽
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                ROMI, %
              </Checkbox>
              <Checkbox onChange={() => null} value={Boolean}>
                ДРР, %, %
              </Checkbox>

              <div className="btn-actions">
                <Button variant="secondary">Сбросить настройки</Button>
                <Button variant="primary">Применить</Button>
              </div>
            </Modal>
          )}

          <SortPopup
            title="Сортировать по"
            items={[
              { name: "кликам", type: "click" },
              { name: "показам", type: "shows" },
              { name: "охвату", type: "coverage" },
              { name: "конверсии", type: "conversion" },
              { name: "бюджету", type: "budget" },
            ]}
          />
          <Link to="/add-company">
            <Button variant="gradient">Добавить кампанию</Button>
          </Link>
        </div>
        <Analytics />
        <CompanyBubble />
      </div>
  );
}

export default Company;
