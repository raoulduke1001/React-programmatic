import "./BasicSettings.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { client } from "../../utils/network";

import { Button, Typography, RadioButton, Select, Switch } from "../../ui";

const TARGET_TYPE = [
  { value: "TRAFFIC", label: "Трафик" },
  { value: "REACH", label: "Охват" },
  { value: "WATCH_VIDEOS", label: "Просмотр видео" },
];

function BasicSettings() {
  const formik = useFormik({
    initialValues: {
      basic_config: {
        name: "22092021",
        site: "http://programmatic.ru",
        target_type: "TRAFFIC",
        daily_budget: "123123",
        full_budget: "123123",
        distribution_budget: "RECOMMENDED",
        use_programmatic_pixel: false,
        metric_counter: {
          email: "user.user@mai.ru",
          id: "123123123123",
        },
      },
    },
    onSubmit: async (values) => {
      try {
        await client.post("/api/v1/campaigns", values);
      } catch (error) {
        console.error("Failed push form.", { error });
      }
    },
  });

  return (
    <form className="BasicSettings" onSubmit={formik.handleSubmit}>
      <div className="container">
        <Typography variant="h1" color="dark-gray" className="title">
          Основные настройки
        </Typography>
        <Typography variant="h2" color="dark-gray" className="sub-title">
          3000+ сегментов – показывайте рекламу только тем, кто вам нужен
        </Typography>
        <div className="rows">
          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Общие
            </Typography>
            <div className="items">
              <input
                type="text"
                placeholder="Введите название вашей кампании"
                id="name"
                name="basic_config.name"
                value={formik.values.basic_config.name}
                onChange={formik.handleChange}
              />
              <input
                type="url"
                placeholder="Введите ссылку на сайт"
                id="site"
                name="basic_config.site"
                value={formik.values.basic_config.site}
                onChange={formik.handleChange}
              />
              <Select
                placeholder="Выберите тип кампании"
                variant="gray"
                options={TARGET_TYPE}
                onChange={(values) => {
                  const value = values.length === 0 ? "" : values[0].value;
                  formik.handleChange("basic_config.target_type")(value);
                }}
              />
            </div>
          </div>

          <div className="row-wrapp">
            <div className="row">
              <Typography variant="h2" color="dark-gray">
                Управление бюджетом
              </Typography>
              <div className="items">
                <input
                  type="number"
                  placeholder="Дневной бюджет"
                  id="daily_budget"
                  name="basic_config.daily_budget"
                  value={formik.values.basic_config.daily_budget}
                  onChange={formik.handleChange}
                />
                <input
                  type="number"
                  placeholder="Итоговый бюджет"
                  id="full_budget"
                  name="basic_config.full_budget"
                  value={formik.values.basic_config.full_budget}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <Typography variant="h2" color="dark-gray">
                Распределение бюджета
              </Typography>
              <div className="items">
                <RadioButton
                  isSelectedRadio={
                    formik.values.basic_config.distribution_budget ===
                    "RECOMMENDED"
                  }
                  value={"RECOMMENDED"}
                  onChange={(value) =>
                    formik.handleChange("basic_config.distribution_budget")(
                      value
                    )
                  }
                >
                  Равномерное
                </RadioButton>
                <RadioButton
                  isSelectedRadio={
                    formik.values.basic_config.distribution_budget === "FASTEST"
                  }
                  value={"FASTEST"}
                  onChange={(value) =>
                    formik.handleChange("basic_config.distribution_budget")(
                      value
                    )
                  }
                >
                  Эффективное
                </RadioButton>
              </div>
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Установка счётчика метрики
            </Typography>
            <div className="items">
              <input
                type="email"
                placeholder="E-mail"
                name="basic_config.metric_counter.email"
                value={formik.values.basic_config.metric_counter.email}
                onChange={(value) =>
                  formik.handleChange("basic_config.metric_counter.email")(
                    value
                  )
                }
              />

              <input
                type="number"
                placeholder="ID"
                name="basic_config.metric_counter.id"
                value={formik.values.basic_config.metric_counter.id}
                onChange={(value) =>
                  formik.handleChange("basic_config.metric_counter.id")(value)
                }
              />

              <Switch
                value={formik.values.basic_config.use_programmatic_pixel}
                onChange={(value) => {
                  formik.setFieldValue(
                    "basic_config.use_programmatic_pixel",
                    value
                  );
                }}
              />
              <Typography variant="body1" color="dark-gray">
                Установка Programmatic пискселя
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <Link to="">
          <Button variant="noBorder">Отмена</Button>
        </Link>

        <div className="wrapp">
          <Button disabled variant="secondary">
            Назад
          </Button>

          <Button variant="primary" type="submit">
            Сохранить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default BasicSettings;
