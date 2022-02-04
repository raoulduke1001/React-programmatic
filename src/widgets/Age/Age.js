import "./Age.scss";

import { useState } from "react";

import { Typography, RadioButton, Button } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function Age() {
  const [openAge, setOpenAge] = useState(false);

  const [openAgeCategory, setOpenAgeCategory] = useState(false);

  const toggleOpenAge = () => setOpenAge(!openAge);

  const toggleOpenAgeCategory = () => setOpenAgeCategory(!openAgeCategory);

  return (
    <div className="Age">
      <div className="age__field" onClick={toggleOpenAge}>
        <input type="text" placeholder="Возраст" disabled />
        <ArrowGrayIcon
          className={openAge ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openAge && (
        <Modal
          isOpen={openAge}
          onClose={toggleOpenAge}
          title="Выберите возраст"
        >
          <div className="age__visible" onClick={toggleOpenAgeCategory}>
            <input type="text" placeholder="Возраст" disabled />
            <ArrowGrayIcon
              className={openAgeCategory ? "toggle-icon__open" : "toggle-icon"}
            />
          </div>

          {openAgeCategory && (
            <div className="age__hidden">
              <div className="range-input">
                <input className="field-form" type="number" placeholder="0" />
                -
                <input
                  className="field-form"
                  type="number"
                  placeholder="100+"
                />
              </div>

              <div className="eliminate-phrases">
                <input type="text" placeholder="Исключить фразы" />
              </div>

              <Typography
                variant="body2"
                color="dark-gray"
                className="exceptions"
              >
                Для исключения какого-либо года из интервала поставьте перед
                числом минус:-38 Для охвата людей, не указавших возраст, впишите
                знак вопроса:"?"
              </Typography>

              <div className="field-radio">
                <RadioButton>только выбранные параметры</RadioButton>
                <RadioButton>любой из выбранных параметров</RadioButton>
              </div>
            </div>
          )}

          <div className="btn-actions">
            <Button variant="secondary">Сбросить настройки</Button>
            <Button variant="primary">Применить</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Age;
