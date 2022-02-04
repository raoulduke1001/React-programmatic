import "./SaveSegment.scss";
import { useState } from "react";

import { Typography, Button, Checkbox } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowWhiteIcon } from "../../assets/images/arrow-white.svg";
import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function SaveSegment() {
  const [openSaveSegment, setOpenSaveSegment] = useState(false);
  const [openSegments, setOpenSegments] = useState(false);

  const toggleOpenSelect = () => setOpenSaveSegment(!openSaveSegment);
  const toggleOpenSegment = () => setOpenSegments(!openSegments);

  return (
    <div className="SaveSegment">
      <div className="save-segment" onClick={toggleOpenSelect}>
        <Typography variant="h2" color="white">
          Выбрать из сохраненных сегментов
        </Typography>
        <ArrowWhiteIcon
          className={openSaveSegment ? "arrow-icon__open" : "arrow-icon"}
        />
      </div>

      {openSaveSegment && (
        <Modal
          isOpen={openSaveSegment}
          onClose={toggleOpenSelect}
          title="Выбрать из сохраненных сегментов"
        >
          <div className="save-segment__visible" onClick={toggleOpenSegment}>
            <input
              className="segmet-field"
              type="text"
              placeholder="Выбрать сегмент"
              disabled
            />
            <ArrowGrayIcon
              className={openSegments ? "arrow-icon__open" : "arrow-icon"}
            />
          </div>

          {openSegments && (
            <div className="save-segment__hidden">
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

export default SaveSegment;
