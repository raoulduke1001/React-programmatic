import "./GeographyTargeting.scss";

import { useState } from "react";

import { Typography, RadioButton, Button, Checkbox } from "../../ui";
import { YaMap, Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function GeographyTargeting() {
  const [openGeography, setOpenGeography] = useState(false);
  const [openGeographyCategory, setOpenGeographyCategory] = useState(false);
  const [openSelectRegion, setOpenSelectRegion] = useState(false);

  const toggleOpenGeography = () => setOpenGeography(!openGeography);

  const toggleOpenGeographyCategory = () =>
    setOpenGeographyCategory(!openGeographyCategory);

  const toggleOpenSelectRegion = () => setOpenSelectRegion(!openSelectRegion);

  return (
    <div className="GeographyTargeting">
      <div className="geography__field" onClick={toggleOpenGeography}>
        <input type="text" placeholder="География " disabled />
        <ArrowGrayIcon
          className={openGeography ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openGeography && (
        <Modal
          isOpen={openGeography}
          onClose={toggleOpenGeography}
          title="География"
        >
          <div
            className="geography__visible"
            onClick={toggleOpenGeographyCategory}
          >
            <input type="text" placeholder="География" disabled />
            <ArrowGrayIcon
              className={
                openGeographyCategory ? "toggle-icon__open" : "toggle-icon"
              }
            />
          </div>

          {openGeographyCategory && (
            <div className="geography__hidden">
              <div
                className="select-region__visible"
                onClick={toggleOpenSelectRegion}
              >
                <input type="text" placeholder="Выбрать" disabled />
                <ArrowGrayIcon
                  className={
                    openSelectRegion ? "toggle-icon__open" : "toggle-icon"
                  }
                />
              </div>

              {openSelectRegion && (
                <div className="select-region__hidden">
                  <div className="category-checkbox">
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
                </div>
              )}

              <YaMap />

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

export default GeographyTargeting;
