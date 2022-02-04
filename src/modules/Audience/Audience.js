import "./Audience.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button, Typography } from "../../ui";
import {
  SaveSegment,
  HaveBusiness,
  Gender,
  Age,
  IncomeLevel,
  GeographyTargeting,
  InterestsTargeting,
  Retargeting,
  SearchHistory,
  FileUpload,
} from "../../widgets";

function Audience() {
  const [addNewSegment, setAddNewSegment] = useState(false);

  const toggleAddNewSegment = () => setAddNewSegment(!addNewSegment);

  return (
    <div className="Audience">
      <div className="container">
        <Typography className="title" variant="h1" color="dark-gray">
          Аудитория
        </Typography>
        <Typography className="sub-title" variant="h2" color="dark-gray">
          3000+ сегментов – показывайте рекламу только тем, кто вам нужен
        </Typography>

        <SaveSegment />

        <HaveBusiness />

        {!addNewSegment && (
          <Typography
            className="search-audience"
            variant="body1"
            color="dark-gray"
          >
            Для того, чтобы найти аудиториюю, воспользуетесь автоподбором
            <span>Автободбор</span>
          </Typography>
        )}

        {!addNewSegment && (
          <div className="add-segment" onClick={toggleAddNewSegment}>
            <Typography variant="h2" color="blue">
              Добавить новый сегмент
            </Typography>
          </div>
        )}

        {addNewSegment && (
          <div className="rows">
            <div className="row">
              <Typography variant="h2" color="dark-gray">
                Социально-демографические
              </Typography>
              <div className="items">
                <Gender />
                <Age />
                <IncomeLevel />
                <GeographyTargeting />
              </div>
            </div>

            <div className="row-wrapp">
              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  Интересы (IAB категории)
                </Typography>
                <div className="items">
                  <InterestsTargeting />
                </div>
              </div>

              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  Ретаргетинг
                </Typography>
                <div className="items">
                  <Retargeting />
                </div>
              </div>
            </div>

            <div className="row-wrapp">
              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  CRM данные
                </Typography>
                <div className="items">
                  <input className="crm" type="text" placeholder="Название" />
                </div>
              </div>

              <div className="row">
                <Typography variant="h2" color="dark-gray">
                  История поисковых запросов
                </Typography>
                <div className="items">
                  <SearchHistory />
                </div>
              </div>
            </div>

            <div className="row-wrapp">
              <div className="row">
                <div className="items">
                  <FileUpload />
                </div>
              </div>

              <div className="row">
                <div className="items"></div>
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

export default Audience;
