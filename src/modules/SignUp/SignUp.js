import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../../utils/network";
import { useFormik } from "formik";
// import { useToggle } from "react-use";

import { Button, Typography, Checkbox } from "../../ui";

import { ReactComponent as LogoWhiteIcon } from "../../assets/images/logo-white.svg";

function SignUp() {
  // const [saveUser, setSaveUser] = useToggle(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      surname: "",
      email: "",
      role: "DEFAULT",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await client.post("/api/v1/auth/registration", values);
        navigate("/sign-in");
      } catch (error) {
        console.error("Failed to register user.", { error });
      }
    },
  });

  return (
    <div className="SignUp">
      <div className="images">
        <LogoWhiteIcon className="logo" />

        <div className="greetings">
          <Typography className="greetings-title" variant="h1" color="white">
            Приветствуем Вас!
          </Typography>
          <Typography variant="h1" color="white">
            Крупнейшая programmatic-экосистема в Рунете
          </Typography>
        </div>
      </div>
      <form className="wrapp" onSubmit={formik.handleSubmit}>
        <div className="form">
          <Typography className="form-title" variant="h1" color="dark-gray">
            Зарегиcтрироваться
          </Typography>
          <Typography className="sub-title" variant="h2" color="dark-gray">
            Наша миссия: высокотехнологичный маркетинг с результатом
          </Typography>
          <input
            id="email"
            name="email"
            className="email-field"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <input
            id="first_name"
            name="first_name"
            className="name-field"
            type="text"
            placeholder="Имя"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          <input
            id="surname"
            name="surname"
            className="name-field"
            type="text"
            placeholder="Фамилия"
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
          <input
            id="phone_number"
            name="phone_number"
            className="phone-field"
            type="text"
            placeholder="Номер телефона"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
          />
          <input
            id="password"
            name="password"
            className="password-field"
            type="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <input
            className="password-field"
            type="password"
            placeholder="Подтвердите пароль"
          />

          <div className="save-password">
            <div className="remember">
              <Checkbox onChange={() => null} value={Boolean} />
              <Typography variant="body1" color="dark-gray">
                запомнить пароль
              </Typography>
            </div>
          </div>

          <div className="btn-actions">
            <Button type="submit" variant="primary" className="primary">
              Зарегистрироваться
            </Button>
            <Link to="/sign-in">
              <Button variant="secondary">Войти</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
