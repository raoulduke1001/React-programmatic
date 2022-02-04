import "./YaMap.scss";
import { useState, Fragment } from "react";
import {
  YMaps,
  Map,
  Circle,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  SearchControl,
  Button,
  ListBox,
  ListBoxItem,
} from "react-yandex-maps";

function YaMap() {
  const [addTag, setAddTag] = useState(false);

  const toggleAddTag = () => setAddTag(!addTag);

  return (
    <div className="YaMap" style={{ marginTop: 20 }}>
      <YMaps>
        <Map
          className="map"
          defaultState={{ center: [55.76, 37.64], zoom: 8 }}
          style={{ width: "100%", height: 310 }}
        >
          <Circle
            geometry={[[55.76, 37.6], 10000]}
            options={{
              draggable: false,
              fillColor: "rgba(63, 115, 249, 0.25)",
              strokeColor: "#3F73F9",
              strokeOpacity: 0.1,
              strokeWidth: 5,
            }}
          />

          <ZoomControl options={{ float: "left" }} />

          <GeolocationControl options={{ float: "right" }} />

          <FullscreenControl options={{ float: "right" }} />

          <Button
            options={{ maxWidth: 128 }}
            data={{ content: "Добавить метку" }}
            defaultState={{ selected: false }}
            onClick={toggleAddTag}
          />

          {addTag && (
            <Fragment>
              <SearchControl options={{ float: "left" }} />

              <ListBox data={{ content: "Радиус" }}>
                <ListBoxItem data={{ content: "Радиус (5 км)" }} />
                <ListBoxItem data={{ content: "Радиус (10 км)" }} />
                <ListBoxItem data={{ content: "Радиус (15 км)" }} />
                <ListBoxItem data={{ content: "Радиус (20 км)" }} />
              </ListBox>
            </Fragment>
          )}
        </Map>
      </YMaps>
    </div>
  );
}

export default YaMap;
