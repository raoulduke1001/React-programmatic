import "./NotificationClient.scss";
import cx from "classnames";
import { Typography } from "../../ui";

function NotificationClient({ date, info, sum, variant }) {
  return (
    <div className="NotificationClient">
      <div className="notification-client__info">
        <Typography variant="span" color="dark-gray">
          {date}
        </Typography>
        <Typography variant="body1" color="dark-gray">
          {info}
        </Typography>
      </div>

      <div className={cx("notification-client__sum", variant)}>{sum}</div>
    </div>
  );
}

export default NotificationClient;
