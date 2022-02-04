import "./Notification.scss";

import { Typography, Dropdown } from "../../ui";
import { NotificationClient } from "../";

import { ReactComponent as NotificationIcon } from "../../assets/images/notification.svg";

function Notification() {
  return (
    <div className="Notification">
      <Dropdown button={<NotificationIcon />}>
        <Typography variant="h2" color="dark-gray">
          Уведомления
        </Typography>

        <NotificationClient
          date="18 октября, понедельник"
          info="Списание денежных средств"
          sum="-10 400,00 ₽"
        />
        <NotificationClient
          date="18 октября, понедельник"
          info="Списание денежных средств"
          sum="-10 400,00 ₽"
        />
        <NotificationClient
          date="18 октября, понедельник"
          info="Пополнение баланса"
          sum="-10 400,00 ₽"
        />
      </Dropdown>
    </div>
  );
}

export default Notification;
