import "./MediaPlan.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormikContext } from "formik";
import { useState } from "react";

import { Button, Typography, Select, Switch } from "../../ui";
import { FileUpload, FullTimeSettings, DatePicker } from "../../widgets";

const MOBILE_APPS = [
  { value: "mobile1", label: "mobile1" },
  { value: "mobile2", label: "mobile2" },
  { value: "mobile3", label: "mobile3" },
];

const SOCIAL_NETWORKS = [
  { value: "social_networks1", label: "social_networks1" },
  { value: "social_networks2", label: "social_networks2" },
  { value: "social_networks3", label: "social_networks3" },
];

const SEARCH_ENGINE = [
  { value: "search_engine1", label: "search_engine1" },
  { value: "search_engine2", label: "search_engine2" },
  { value: "search_engine3", label: "search_engine3" },
];

const MAX_IMPRESSIONS_UNIQ = [
  { value: "1", label: "max_impressions_uniq1" },
  { value: "2", label: "max_impressions_uniq2" },
  { value: "3", label: "max_impressions_uniq3" },
];

const POSITION = [
  { value: "TYPE_1", label: "TYPE_1" },
  { value: "TYPE_2", label: "TYPE_2" },
  { value: "TYPE_3", label: "TYPE_3" },
  { value: "TYPE_4", label: "TYPE_4" },
  { value: "TYPE_5", label: "TYPE_5" },
];

const SHOW_DAYS = [
  { value: "Weekdays", label: "Рабочие дни" },
  { value: "Weekend", label: "Выходные" },
];

const WORKING_PRESET = {
  mon: Array.from({ length: 24 }, (_, k) => k + 1),
  tue: Array.from({ length: 24 }, (_, k) => k + 1),
  wed: Array.from({ length: 24 }, (_, k) => k + 1),
  thu: Array.from({ length: 24 }, (_, k) => k + 1),
  fri: Array.from({ length: 24 }, (_, k) => k + 1),
  sat: [],
  sun: [],
};

const WEEKEND_PRESET = {
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: Array.from({ length: 24 }, (_, k) => k + 1),
  sun: Array.from({ length: 24 }, (_, k) => k + 1),
};

const ALLDAY_PRESET = {
  mon: Array.from({ length: 24 }, (_, k) => k + 1),
  tue: Array.from({ length: 24 }, (_, k) => k + 1),
  wed: Array.from({ length: 24 }, (_, k) => k + 1),
  thu: Array.from({ length: 24 }, (_, k) => k + 1),
  fri: Array.from({ length: 24 }, (_, k) => k + 1),
  sat: Array.from({ length: 24 }, (_, k) => k + 1),
  sun: Array.from({ length: 24 }, (_, k) => k + 1),
};

const DEFAULT_PRESET = {
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
};

const SHOW_HOURS = [
  { value: "day", label: "Днем" },
  { value: "night", label: "Ночью" },
];

const DAY_PRESET = {
  mon: Array.from({ length: 19 }, (_, k) => k + 4),
  tue: Array.from({ length: 19 }, (_, k) => k + 4),
  wed: Array.from({ length: 19 }, (_, k) => k + 4),
  thu: Array.from({ length: 19 }, (_, k) => k + 4),
  fri: Array.from({ length: 19 }, (_, k) => k + 4),
  sat: Array.from({ length: 19 }, (_, k) => k + 4),
  sun: Array.from({ length: 19 }, (_, k) => k + 4),
};

const NIGHT_PRESET = {
  mon: [1, 2, 3, 23, 24],
  tue: [1, 2, 3, 23, 24],
  wed: [1, 2, 3, 23, 24],
  thu: [1, 2, 3, 23, 24],
  fri: [1, 2, 3, 23, 24],
  sat: [1, 2, 3, 23, 24],
  sun: [1, 2, 3, 23, 24],
};

function MediaPlan() {
  const [showDays, setShowDays] = useState();
  const [showHours, setShowHours] = useState();

  const formik = useFormikContext();
  const navigate = useNavigate();

  return (
    <div className="MediaPlan">
      <div className="container">
        <Typography variant="h1" color="dark-gray" className="title">
          Медиаплан
        </Typography>
        <Typography variant="h2" color="dark-gray" className="sub-title">
          3000+ сегментов – показывайте рекламу только тем, кто вам нужен
        </Typography>

        <div className="rows">
          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Позиция объявления
            </Typography>
            <div className="items">
              <input type="text" placeholder="Белый список" />
              <input type="text" placeholder="Черный список" />
              <input
                type="text"
                placeholder="Список сайтов конкурентов "
                id="concurrent_list"
                name="media_plan.concurrent_list"
                value={formik.values.media_plan.concurrent_list}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="row-filepond">
            <FileUpload />
            <FileUpload />
            <FileUpload />
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Тип устройства
            </Typography>
            <div className="items-wrapp">
              <div className="items items-switch">
                <Switch
                  value={formik.values.media_plan.device_type.enable_mobile}
                  onChange={(value) => {
                    formik.setFieldValue(
                      "media_plan.device_type.enable_mobile",
                      value
                    );
                  }}
                />
                <Typography variant="body1" color="dark-gray">
                  Мобильные
                </Typography>
              </div>
              <div className="items items-switch">
                <Switch
                  value={formik.values.media_plan.device_type.enable_desktop}
                  onChange={(value) => {
                    formik.setFieldValue(
                      "media_plan.device_type.enable_desktop",
                      value
                    );
                  }}
                />
                <Typography variant="body1" color="dark-gray">
                  Десктопные
                </Typography>
              </div>
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Каналы
            </Typography>
            <div className="items">
              <Select
                placeholder="Мобильные приложения"
                variant="gray"
                options={MOBILE_APPS}
                onChange={(values) => {
                  const mobile_apps = values.map(({ value }) => value);
                  const mobile_apps_excluded = MOBILE_APPS.filter(
                    ({ value }) => !mobile_apps.includes(value)
                  ).map(({ value }) => value);
                  formik.setFieldValue(
                    "media_plan.channels.mobile_apps",
                    mobile_apps
                  );
                  formik.setFieldValue(
                    "media_plan.channels.mobile_apps_excluded",
                    mobile_apps_excluded
                  );
                }}
              />
              <Select
                placeholder="Социальные сети"
                variant="gray"
                options={SOCIAL_NETWORKS}
                onChange={(values) => {
                  const social_networks = values.map(({ value }) => value);
                  const social_networks_excluded = SOCIAL_NETWORKS.filter(
                    ({ value }) => !social_networks.includes(value)
                  ).map(({ value }) => value);
                  formik.setFieldValue(
                    "media_plan.channels.social_networks",
                    social_networks
                  );
                  formik.setFieldValue(
                    "media_plan.channels.social_networks_excluded",
                    social_networks_excluded
                  );
                }}
              />
              <Select
                placeholder="Поисковая выдача "
                variant="gray"
                options={SEARCH_ENGINE}
                onChange={(values) => {
                  const search_engine = values.map(({ value }) => value);
                  const search_engine_excluded = SEARCH_ENGINE.filter(
                    ({ value }) => !search_engine.includes(value)
                  ).map(({ value }) => value);
                  formik.setFieldValue(
                    "media_plan.channels.search_engine",
                    search_engine
                  );
                  formik.setFieldValue(
                    "media_plan.channels.search_engine_excluded",
                    search_engine_excluded
                  );
                }}
              />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Позиция объявления
            </Typography>
            <div className="items">
              <Select
                placeholder="Позиция объявления"
                variant="gray"
                options={POSITION}
                onChange={(values) => {
                  const value = values.length === 0 ? "" : values[0].value;
                  formik.handleChange("media_plan.position")(value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Лимит показов
            </Typography>
            <div className="items">
              <Select
                placeholder="Лимит показов уникальному пользователю"
                variant="gray"
                options={MAX_IMPRESSIONS_UNIQ}
                onChange={(values) => {
                  const value = values.length === 0 ? "" : values[0].value;
                  formik.handleChange("media_plan.max_impressions_uniq")(value);
                }}
              />
              <input
                type="number"
                placeholder="На всю кампанию"
                id="max_impressions"
                name="media_plan.max_impressions"
                value={formik.values.media_plan.max_impressions}
                onChange={formik.handleChange}
              />
              <input
                type="number"
                placeholder="На каждое объявление"
                id="max_banner_impressions"
                name="media_plan.max_banner_impressions"
                value={formik.values.media_plan.max_banner_impressions}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="row row-shows">
            <Typography variant="h2" color="dark-gray">
              Расписание показов
            </Typography>
            <div className="items">
              <Select
                placeholder="Дни показа"
                variant="gray"
                options={SHOW_DAYS}
                value={showDays}
                onChange={(options) => {
                  setShowDays(options);
                  const values = options.map(({ value }) => value);
                  let show_schedules = DEFAULT_PRESET;
                  if (values.length > 0) {
                    if (values.length === 2) show_schedules = ALLDAY_PRESET;
                    else
                      show_schedules = values.includes("Weekdays")
                        ? WORKING_PRESET
                        : WEEKEND_PRESET;
                  }
                  formik.setFieldValue(
                    `media_plan.show_schedules`,
                    show_schedules
                  );
                }}
              />
              <Select
                placeholder="Часы показа"
                variant="gray"
                options={SHOW_HOURS}
                value={showHours}
                onChange={(options) => {
                  setShowHours(options);
                  const values = options.map(({ value }) => value);
                  let show_schedules = DEFAULT_PRESET;
                  if (values.length > 0) {
                    if (values.length === 2) show_schedules = ALLDAY_PRESET;
                    else
                      show_schedules = values.includes("day")
                        ? DAY_PRESET
                        : NIGHT_PRESET;
                  }
                  formik.setFieldValue(
                    `media_plan.show_schedules`,
                    show_schedules
                  );
                }}
              />

              <DatePicker />
            </div>
          </div>

          <div className="row-cube">
            <FullTimeSettings />
          </div>
        </div>
      </div>

      <div className="actions">
        <Link to="">
          <Button variant="noBorder">Отмена</Button>
        </Link>

        <div className="wrapp">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Назад
          </Button>

          <Button variant="primary" onClick={formik.handleSubmit}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MediaPlan;
