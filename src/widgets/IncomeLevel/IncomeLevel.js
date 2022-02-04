import "./IncomeLevel.scss";

import { useState } from "react";

import { Typography, Button, RadioButton } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function IncomeLevel() {
  const [openIncomeLevel, setOpenIncomeLevel] = useState(false);

  const [openIncomeLevelCategory, setOpenIncomeLevelCategory] = useState(false);

  const toggleOpenIncomeLevel = () => setOpenIncomeLevel(!openIncomeLevel);

  const toggleOpenIncomeLevelCategory = () =>
    setOpenIncomeLevelCategory(!openIncomeLevelCategory);

  return (
    <div className="IncomeLevel">
      <div className="income-level__field" onClick={toggleOpenIncomeLevel}>
        <input type="text" placeholder="Уровень дохода " disabled />
        <ArrowGrayIcon
          className={openIncomeLevel ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openIncomeLevel && (
        <Modal
          isOpen={openIncomeLevel}
          onClose={toggleOpenIncomeLevel}
          title="Выберите уровень дохода "
        >
          <div
            className="income-level__visible"
            onClick={toggleOpenIncomeLevelCategory}
          >
            <input type="text" placeholder="Уровень дохода" disabled />
            <ArrowGrayIcon
              className={
                openIncomeLevelCategory ? "toggle-icon__open" : "toggle-icon"
              }
            />
          </div>

          {openIncomeLevelCategory && (
            <div className="income-level__hidden">
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
                числом минус:-38 Для охвата людей, не указавших доход, впишите
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

export default IncomeLevel;
