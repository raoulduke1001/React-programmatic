import "./InterestsTargeting.scss";
import { useState } from "react";

import { Typography, Button, RadioButton, Checkbox } from "../../ui";
import { Modal } from "../";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function InterestsTargeting() {
  const [openInterests, setOpenInterests] = useState(false);
  const [openInterestsCategory, setOpenInterestsCategory] = useState(false);

  const toggleOpenInterestss = () => setOpenInterests(!openInterests);

  const toggleInterestsCategory = () =>
    setOpenInterestsCategory(!openInterestsCategory);

  return (
    <div className="InterestsTargeting">
      <div className="interests__field" onClick={toggleOpenInterestss}>
        <input type="text" placeholder="Категориии" disabled />
        <ArrowGrayIcon
          className={openInterests ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openInterests && (
        <Modal
          isOpen={openInterests}
          onClose={toggleOpenInterestss}
          title="Интересы"
        >
          <div className="interests__visible">
            <div className="search-category">
              <input type="text" placeholder="Поиск по интересам" />
              <SearchIcon className="search-icon" />
            </div>

            <div className="toggle-category" onClick={toggleInterestsCategory}>
              <input
                type="text"
                placeholder="Выберите  категории бинеса"
                disabled
              />
              <ArrowGrayIcon
                className={
                  openInterestsCategory ? "toggle-icon__open" : "toggle-icon"
                }
              />
            </div>

            {openInterestsCategory && (
              <div className="interests__hidden">
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

            <div className="eliminate-phrases">
              <input type="text" placeholder="Исключить фразы" />
            </div>

            <Typography
              variant="body2"
              color="dark-gray"
              className="exceptions"
            >
              Для исключения какого-либо года из интервала поставьте перед
              числом минус:-38 Для охвата людей, не указавших доход, впишите
              знак вопроса:"?"
            </Typography>

            <div className="field-radio">
              <RadioButton>только выбранные параметры</RadioButton>
              <RadioButton>любой из выбранных параметров</RadioButton>
            </div>

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

export default InterestsTargeting;
