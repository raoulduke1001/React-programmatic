import "./HaveBusiness.scss";
import { useState } from "react";

import { Typography, Button, Checkbox } from "../../ui";
import { Modal } from "../";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function HaveBusiness() {
  const [openHaveBusiness, setOpenHaveBusiness] = useState(false);
  const [openBusinessCategory, setOpenBusinessCategory] = useState(false);

  const toggleHaveBusiness = () => setOpenHaveBusiness(!openHaveBusiness);

  const toggleBusinessCategory = () =>
    setOpenBusinessCategory(!openBusinessCategory);

  return (
    <div className="HaveBusiness">
      <div className="have-busines" onClick={toggleHaveBusiness}>
        <Typography variant="body1" color="dark-gray">
          Какой у вас бизнес?
        </Typography>
        <ArrowGrayIcon
          className={openHaveBusiness ? "arrow-icon__open" : "arrow-icon"}
        />
      </div>

      {openHaveBusiness && (
        <Modal
          isOpen={openHaveBusiness}
          onClose={toggleHaveBusiness}
          title="Какой у вас бизнес?"
        >
          <div className="have-busines__visible">
            <div className="have-busines__field">
              <input type="text" placeholder="Поиск" />
              <SearchIcon className="search-icon" />
            </div>

            <div
              className="have-busines__field"
              onClick={toggleBusinessCategory}
            >
              <input
                type="text"
                placeholder="Выберите  категории бинеса"
                disabled
              />
              <ArrowGrayIcon
                className={
                  openBusinessCategory ? "toggle-icon__open" : "toggle-icon"
                }
              />
            </div>

            {openBusinessCategory && (
              <div className="have-busines__hidden">
                <Checkbox onChange={() => null} value={Boolean}>
                  Все категории
                </Checkbox>
                <Checkbox onChange={() => null} value={Boolean}>
                  Транспорт
                </Checkbox>
                <Checkbox onChange={() => null} value={Boolean}>
                  Недвижимость
                </Checkbox>
                <Checkbox onChange={() => null} value={Boolean}>
                  Еда и напитки
                </Checkbox>
                <Checkbox onChange={() => null} value={Boolean}>
                  Покупки
                </Checkbox>
              </div>
            )}

            <div className="btn-actions">
              <Button variant="secondary">Сбросить настройки</Button>
              <Button variant="primary">Применить</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default HaveBusiness;
