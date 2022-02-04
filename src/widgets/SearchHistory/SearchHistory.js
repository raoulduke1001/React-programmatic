import "./SearchHistory.scss";
import { useState } from "react";

import { Typography, Button, RadioButton, Checkbox } from "../../ui";
import { Modal } from "../";

import { ReactComponent as ArrowGrayIcon } from "../../assets/images/arrow-gray.svg";

function SearchHistory() {
  const [openSearchHistory, setOpenSearchHistory] = useState(false);
  const [openSearchHistoryCategory, setOpenSearchHistoryCategory] =
    useState(false);

  const toggleOpenSearchHistory = () =>
    setOpenSearchHistory(!openSearchHistory);

  const toggleOpenSearchHistoryCategoryy = () =>
    setOpenSearchHistoryCategory(!openSearchHistoryCategory);

  return (
    <div className="SearchHistory">
      <div className="search-history__field" onClick={toggleOpenSearchHistory}>
        <input type="text" placeholder="История поисковых запросов" disabled />
        <ArrowGrayIcon
          className={openSearchHistory ? "toggle-icon__open" : "toggle-icon"}
        />
      </div>

      {openSearchHistory && (
        <Modal
          isOpen={openSearchHistory}
          onClose={toggleOpenSearchHistory}
          title="История поисковых запросов"
        >
          <div className="search-history__visible">
            <div
              className="toggle-category"
              onClick={toggleOpenSearchHistoryCategoryy}
            >
              <input type="text" placeholder="Категория" disabled />
              <ArrowGrayIcon
                className={
                  openSearchHistoryCategory
                    ? "toggle-icon__open"
                    : "toggle-icon"
                }
              />
            </div>

            {openSearchHistoryCategory && (
              <div className="search-history__hidden">
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

            <div className="rows">
              <Checkbox onChange={() => null} value={Boolean}>
                Ввести фразы в ручную
              </Checkbox>

              <Checkbox onChange={() => null} value={Boolean}>
                Загрузить файл
              </Checkbox>
            </div>

            <div className="columns">
              <div className="column">
                <textarea
                  type="text"
                  placeholder="Введите фразы, по которым ищут товар"
                />
              </div>
              <div className="column">
                <Typography variant="body1" color="dark-gray" className="hints">
                  Подсказки
                </Typography>
                <Typography variant="body1" color="blue">
                  Уход за кожей и лицом
                </Typography>
                <Typography variant="body1" color="blue">
                  Для снятия макияжа
                </Typography>
                <Typography variant="body1" color="blue">
                  Красота и здоровье..
                </Typography>
                <Typography variant="body1" color="blue">
                  Пенка для умывание
                </Typography>
                <Typography variant="body1" color="blue">
                  Сияющий блеск
                </Typography>
                <Typography variant="body1" color="blue">
                  Красота
                </Typography>
                <Typography variant="body1" color="blue">
                  Ночной крме для л
                </Typography>
                <Typography variant="body1" color="blue">
                  Уход
                </Typography>
                <Typography variant="body1" color="blue">
                  Макияж
                </Typography>
              </div>
            </div>

            <div className="eliminate-phrases">
              <input type="text" placeholder="Исключить фразы" />
            </div>

            <Typography
              variant="body2"
              color="dark-gray"
              className="exceptions"
            >
              Для исключения какой-либо категории интересов поставьте перед
              значением минус:-автомобали Для охвата людей, не указавших
              интерес, впишите знак вопроса:"?""
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

export default SearchHistory;
