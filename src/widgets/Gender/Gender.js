import "./Gender.scss";

import { useState } from "react";

import { Checkbox, Button } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function Gender() {
  const [openGenger, setOpenGenger] = useState(false);

  const [openGengerCategory, setOpenGengerCategory] = useState(false);

  const toggleOpenGenger = () => setOpenGenger(!openGenger);

  const toggleOpenGengerCategory = () =>
    setOpenGengerCategory(!openGengerCategory);

  return (
    <div className="Gender">
      <div className="gender__field" onClick={toggleOpenGenger}>
        <input type="text" placeholder="Пол" disabled />
        <ArrowGrayIcon
          className={openGenger ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openGenger && (
        <Modal
          isOpen={openGenger}
          onClose={toggleOpenGenger}
          title="Выберите пол"
        >
          <div className="gender__visible" onClick={toggleOpenGengerCategory}>
            <input type="text" placeholder="Пол" disabled />
            <ArrowGrayIcon
              className={
                openGengerCategory ? "toggle-icon__open" : "toggle-icon"
              }
            />
          </div>

          {openGengerCategory && (
            <div className="gender__hidden">
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
        </Modal>
      )}
    </div>
  );
}

export default Gender;
