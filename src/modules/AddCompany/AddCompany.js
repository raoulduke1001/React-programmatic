import "./AddCompany.scss";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { client } from "../../utils/network";

import { TabLinks, Typography } from "../../ui";
import { Card } from "../../widgets";
import { Formik } from "formik";

function AddCompany() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="AddCompany">
      <Typography variant="h1" color="dark-gray">
        Создание кампании
      </Typography>
      <Card>
        <TabLinks>
          <NavLink end to="">
            Основные настройки
          </NavLink>
          <NavLink to="media-plan">Медиа план</NavLink>
          <NavLink to="audience">Аудитория</NavLink>
          <NavLink to="optimisation">Оптимизация </NavLink>
          <NavLink to="banners">Баннеры</NavLink>
        </TabLinks>

        <Formik>
          <Outlet />
        </Formik>
      </Card>
    </div>
  );
}

export default AddCompany;

/* // initialValues={{ */
//   basic_config: {
//     name: "",
//     site: "",
//     daily_budget: "",
//     full_budget: "",
//     distribution_budget: "",
//     target_type: "",
//     metric_counter: {
//       email: "",
//       id: "",
//     },
//     use_programmatic_pixel: false,
//   },
//   media_plan: {
//     position: "TYPE_1",
//     date_start: "",
//     date_end: "",
//     device_type: {
//       enable_mobile: false,
//       enable_desktop: false,
//     },
//     channels: {
//       mobile_apps: [],
//       mobile_apps_excluded: [],
//       social_networks: [],
//       social_networks_excluded: [],
//       search_engine: [],
//       search_engine_excluded: [],
//     },
//     concurrent_list: "",
//     max_impressions: "",
//     max_banner_impressions: "",
//     max_impressions_uniq: "",
//     show_schedules: {
//       mon: [],
//       tue: [],
//       wed: [],
//       thu: [],
//       fri: [],
//       sat: [],
//       sun: [],
//       flags: [],
//     },
//   },
//   optimization: {
//     optimization_target: "",
//     optimization_types: "",
//     budget: {
//       max_impressions: "",
//       fix_price: "",
//       min_consumption: "",
//       optimal_score: "",
//     },
//   },
// }}
// onSubmit={async (values) => {
//   // console.log(pathname, "-- path");
//   try {
//     await client.post("/api/v1/campaigns", {
//       ...values,
//       media_plan: {
//         ...values.media_plan,
//         max_impressions: Number(values.media_plan.max_impressions),
//         max_banner_impressions: Number(
//           values.media_plan.max_banner_impressions
//         ),
//         max_impressions_uniq: Number(
//           values.media_plan.max_impressions_uniq
//         ),
//         concurrent_list:
//           values.media_plan.concurrent_list.split(", "),
//       },
//     });
//     if (pathname === "/add-company") {
//       return navigate("/add-company/media-plan");
//     } else if (pathname === "/add-company/media-plan") {
//       return navigate("/add-company/audience");
//     }
//   } catch (error) {
//     console.error("Failed push form.", { error });
//   }
// }}
