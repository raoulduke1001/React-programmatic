import "./Retargeting.scss";
import { useState } from "react";

import { Button, Checkbox } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function Retargeting() {
  const [openRetargeting, setOpenRetargeting] = useState(false);
  const [openRetargetingCategory, setOpenRetargetingCategory] = useState(false);

  const toggleOpenRetargeting = () => setOpenRetargeting(!openRetargeting);
  const toggleOpenRetargetingCategory = () =>
    setOpenRetargetingCategory(!openRetargetingCategory);

  return (
    <div className="Retargeting">
      <div className="retargeting__field" onClick={toggleOpenRetargeting}>
        <input type="text" placeholder="Категориии" disabled />
        <ArrowGrayIcon
          className={openRetargeting ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openRetargeting && (
        <Modal
          isOpen={openRetargeting}
          onClose={toggleOpenRetargeting}
          title="Ретаргетинг"
        >
          <div
            className="retargeting__visible"
            onClick={toggleOpenRetargetingCategory}
          >
            <input
              className="retargeting-field"
              type="text"
              placeholder="Кампании"
              disabled
            />
            <ArrowGrayIcon
              className={
                openRetargetingCategory ? "arrow-icon__open" : "arrow-icon"
              }
            />
          </div>

          {openRetargetingCategory && (
            <div className="retargeting__hidden">
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

export default Retargeting;
