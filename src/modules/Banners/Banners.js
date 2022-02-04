import "./Banners.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button, Typography, RadioButton, Select } from "../../ui";
import { FileUpload, SortPopup } from "../../widgets";

import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";
import Preview from "../../assets/images/preview.png";

function Banners() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="Banners">
      <div className="container">
        <Typography variant="h1" color="dark-gray" className="title">
          Баннеры
        </Typography>
        <Typography variant="h2" color="dark-gray" className="sub-title">
          3000+ сегментов – показывайте рекламу только тем, кто вам нужен
        </Typography>

        <div className="banners-images">
          <CloseIcon className="close" />
          <div className="add">
            <div className="download">Загрузить баннер из кампании</div>
            <FileUpload className="FileUpload-company" />
          </div>
          <div className="library">
            <div className="sort">
              <SortPopup
                title="По дате загрузки"
                items={[
                  { name: "сначала новые", type: "new" },
                  { name: "по показам", type: "shows" },
                ]}
              />

              <div className="watch">
                смотреть
                <a href="test">все изображения (235) </a>
              </div>
            </div>

            <div className="carousel">
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
              <div className="item">
                <img alt="images" src={Preview} />
              </div>
            </div>
          </div>
        </div>

        {!isOpen && (
          <Button
            variant="primary"
            className="add-banners"
            onClick={toggleModal}
          >
            Добавить баннер
          </Button>
        )}

        {isOpen && (
          <div isOpen={isOpen}>
            <div className="line"></div>

            <div className="rows">
              <div className="row-wrapp">
                <div className="row">
                  <Typography variant="h2" color="dark-gray">
                    Добавление банера
                  </Typography>
                  <div className="items">
                    <input type="text" placeholder="Заголовок" />
                    <Select placeholder="Формат" variant="gray" />
                    <textarea
                      className="description"
                      type="text"
                      placeholder="Описание"
                    />
                  </div>
                </div>
                <div className="row">
                  <FileUpload className="FileUpload-banner" />
                </div>
              </div>

              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  Назначение сегмента
                </Typography>
                <div className="items">
                  <Select placeholder="Сегмент 1" variant="gray" />
                </div>
              </div>

              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  UTM-метка
                </Typography>
                <div className="items">
                  <RadioButton>Автоматически</RadioButton>
                  <RadioButton>В ручную</RadioButton>
                  <input
                    className="disabled"
                    type="text"
                    placeholder="{utm_source, utm_medium, openstat_service, gclid}"
                    disabled
                  />
                  <RadioButton>Не добавлять метку</RadioButton>
                </div>
              </div>

              <div className="row-wrapp">
                <div className="row">
                  <Typography variant="h2" color="dark-gray">
                    CPM
                  </Typography>
                  <div className="items items-crm">
                    <input type="text" placeholder="Ссылка" />
                    <input type="number" placeholder="Ставка (CPM)" />
                  </div>
                </div>
                <div className="row">
                  <FileUpload className="FileUpload-crm" />
                </div>
              </div>

              <div className="actions-company">
                <Link to="">
                  <Button variant="secondary">Отмена</Button>
                </Link>

                <Link to="">
                  <Button variant="primary">Запустить кампанию</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="actions">
        <Link to="">
          <Button variant="noBorder">Отмена</Button>
        </Link>

        <div className="wrapp">
          <Link to="">
            <Button variant="secondary">Назад</Button>
          </Link>

          <Link to="/add-company/optimisation">
            <Button variant="primary">Сохранить</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banners;
