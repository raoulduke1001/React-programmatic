import "./FullTimeSettings.scss";

import { Cube } from "../../ui";

function FullTimeSettings() {
  return (
    <div className="FullTimeSettings">
      <div className="week">
        <div className="day">Пн</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekday" hour={hour} day={"mon"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Вт</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekday" hour={hour} day={"tue"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Ср</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekday" hour={hour} day={"wed"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Чт</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekday" hour={hour} day={"thu"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Пт</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekday" hour={hour} day={"fri"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Сб</div>

        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekend" hour={hour} day={"sat"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="day">Вс</div>
        {Array.from({ length: 24 }, (_, k) => k + 1).map((hour) => (
          <Cube variant="weekend" hour={hour} day={"sun"} key={hour} />
        ))}
      </div>
      <div className="week">
        <div className="time"></div>
        <div className="time">01</div>
        <div className="time">02</div>
        <div className="time">03</div>
        <div className="time">04</div>
        <div className="time">05</div>
        <div className="time">06</div>
        <div className="time">07</div>
        <div className="time">08</div>
        <div className="time">09</div>
        <div className="time">10</div>
        <div className="time">11</div>
        <div className="time">12</div>
        <div className="time">13</div>
        <div className="time">14</div>
        <div className="time">15</div>
        <div className="time">16</div>
        <div className="time">17</div>
        <div className="time">18</div>
        <div className="time">19</div>
        <div className="time">20</div>
        <div className="time">21</div>
        <div className="time">22</div>
        <div className="time">23</div>
        <div className="time">00</div>
      </div>
    </div>
  );
}

export default FullTimeSettings;
