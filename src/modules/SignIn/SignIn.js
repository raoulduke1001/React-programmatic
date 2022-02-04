import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik  } from "formik";
import { client } from "../../utils/network";
import useUser from "../../data/useUser"

import { Button, Typography, Checkbox } from "../../ui";

import { ReactComponent as LogoWhiteIcon } from "../../assets/images/logo-white.svg";

function SignIn() {
  const navigate = useNavigate()
  const { mutate: userMutate } = useUser()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const params  = new URLSearchParams()
        params.append('username', values.username)
        params.append('password', values.password)
        const { data } = await client.post("/api/v1/auth/access-token", params)
        localStorage.setItem("token", data.access_token)
        await userMutate()
        navigate("/")
      } catch (error) {
        console.error("Failed to login.", { error })
      }
    },
  });

  return (
    <div className="SignIn">
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
            Войти
          </Typography>
          <Typography className="sub-title" variant="h2" color="dark-gray">
            Наша миссия: высокотехнологичный маркетинг с результатом
          </Typography>
          <input id="username" name="username" className="email-field" type="text" placeholder="Email" value={formik.values.username} onChange={formik.handleChange} />
          <input
            id="password"
            name="password"
            className="password-field"
            type="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="save-password">
            <div className="remember">
              <Checkbox onChange={() => null} value={Boolean} />
              <Typography variant="body1" color="dark-gray">
                запомнить пароль
              </Typography>
            </div>
            <div className="forgot">Забыли пароль?</div>
          </div>

          <div className="btn-actions">
            <Button type="submit" variant="primary" className="primary">
              Войти
            </Button>
            <Link to="/sign-up">
              <Button variant="secondary">Зарегистрироваться</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
