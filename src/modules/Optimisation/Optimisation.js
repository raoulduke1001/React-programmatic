import "./Optimisation.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { client } from "../../utils/network";

import { Button, Typography, RadioButton } from "../../ui";
import { Segment } from "../../widgets";

function Optimisation() {
  const formik = useFormik({
    initialValues: {
      optimization: {
        optimization_target: "",
        optimization_types: "",
        budget: {
          max_impressions: "",
          fix_price: "",
          min_consumption: "",
          optimal_score: "",
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
  const navigate = useNavigate();

  return (
    <form className="Optimisation" onSubmit={formik.handleSubmit}>
      <div className="container">
        <Typography variant="h1" color="dark-gray" className="title">
          Оптимизация
        </Typography>
        <Typography variant="h2" color="dark-gray" className="sub-title">
          3000+ сегментов – показывайте рекламу только тем, кто вам нужен
        </Typography>
        <div className="rows">
          <div className="row-wrapp">
            <div className="row">
              <Typography variant="h2" color="dark-gray">
                Что оптимизируем
              </Typography>
              <div className="items">
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_target === "SHOWS"
                  }
                  value={"SHOWS"}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_target")(
                      value
                    )
                  }
                >
                  Показы
                </RadioButton>
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_target === "CLICKS"
                  }
                  value={"CLICKS"}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_target")(
                      value
                    )
                  }
                >
                  Клики
                </RadioButton>
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_target ===
                    "WATCH_VIDEOS "
                  }
                  value={"WATCH_VIDEOS "}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_target")(
                      value
                    )
                  }
                >
                  Просмотр видео
                </RadioButton>
              </div>
            </div>

            <div className="row">
              <Typography variant="h2" color="dark-gray">
                Способы оптимизации
              </Typography>
              <div className="items">
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_types ===
                    "MAX_CLICKS"
                  }
                  value={"MAX_CLICKS"}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_types")(
                      value
                    )
                  }
                >
                  Максимальное число кликов
                </RadioButton>
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_types ===
                    "FIX_PRICE"
                  }
                  value={"FIX_PRICE"}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_types")(
                      value
                    )
                  }
                >
                  Фиксированная ставка
                </RadioButton>
                <RadioButton
                  isSelectedRadio={
                    formik.values.optimization.optimization_types ===
                    "MIN_CONSUMPTION "
                  }
                  value={"MIN_CONSUMPTION "}
                  onChange={(value) =>
                    formik.handleChange("optimization.optimization_types")(
                      value
                    )
                  }
                >
                  Минимальный расход
                </RadioButton>
              </div>
            </div>
          </div>

          <div className="row">
            <Typography variant="h2" color="dark-gray">
              Бюджет
            </Typography>
            <div className="items">
              <input
                type="number"
                placeholder="Максимальное число показов"
                name="optimization.budget.max_impressions"
                value={formik.values.optimization.budget.max_impressions}
                onChange={(value) =>
                  formik.handleChange("optimization.budget.max_impressions")(
                    value
                  )
                }
              />
              <input
                type="number"
                placeholder="Фиксированная ставка "
                name="optimization.budget.fix_price"
                value={formik.values.optimization.budget.fix_price}
                onChange={(value) =>
                  formik.handleChange("optimization.budget.fix_price")(value)
                }
              />
              <input
                type="number"
                placeholder="Минимальный расход"
                name="optimization.budget.min_consumption"
                value={formik.values.optimization.budget.min_consumption}
                onChange={(value) =>
                  formik.handleChange("optimization.budget.min_consumption")(
                    value
                  )
                }
              />
              <input
                type="number"
                placeholder="Оптимальный результат"
                name="optimization.budget.optimal_score"
                value={formik.values.optimization.budget.optimal_score}
                onChange={(value) =>
                  formik.handleChange("optimization.budget.optimal_score")(
                    value
                  )
                }
              />
            </div>
          </div>
        </div>


        <Typography variant="h1" color="dark-gray">
          Добавленные сегменты
        </Typography>
        <Segment />

        
      </div>

      <div className="actions">
        <Link to="">
          <Button variant="noBorder">Отмена</Button>
        </Link>

        <div className="wrapp">
          <Button variant="secondary" onClick={() => navigate(-1)}>
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

export default Optimisation;
