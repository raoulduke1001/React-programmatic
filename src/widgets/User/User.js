import "./User.scss";
import { Link } from "react-router-dom";
import useUser from "../../data/useUser";

import { Typography, Dropdown } from "../../ui";

import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-big.svg";
import Avatar from "../../assets/images/avatar.png";

export default function User() {
  const {
    user: {
      profile: { first_name, surname },
    },
  } = useUser();

  return (
    <div className="User">
      <div className="info">
        <Typography variant="body1" color="dark-gray">
          {first_name + " " + surname}
        </Typography>
        <Typography variant="body2" color="dark-gray">
          Client
        </Typography>
      </div>

      <div className="avatar">
        <img src={Avatar} alt="avatar" />
      </div>

      <Dropdown button={<ArrowIcon />} closeOnClick>
        <div className="User__content">
          <Link to="/profile/contact-details">
            <Typography variant="body2" color="dark-gray">
              Профиль
            </Typography>
          </Link>
          <Link to="/balance">
            <Typography variant="body2" color="dark-gray">
              Балланс
            </Typography>
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}
