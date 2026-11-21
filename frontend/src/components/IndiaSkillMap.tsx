import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/AbhinavSwami28/india-official-geojson/main/india-states-simplified.geojson";

const stateData: Record<string, number> = {
  Maharashtra: 72,
  "Uttar Pradesh": 65,
  Karnataka: 58,
  "Tamil Nadu": 48,
  "Madhya Pradesh": 62,
  Chhattisgarh: 55,
  Gujarat: 45,
  Rajasthan: 60,
  "West Bengal": 52,
  Bihar: 75,
};

function IndiaSkillMap() {
  const [selectedState, setSelectedState] = useState("Chhattisgarh");

  const skillGap = stateData[selectedState] ?? 40;

  return (
    <div className="india-map-container">

      <div className="map-area">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [82, 23],
            scale: 900,
          }}
        >
          <Geographies geography={geoUrl}>
           {({ geographies }) => {
              if (!geographies.length) {
                return null;
              }

            return geographies.map((geo, index: number) => {
                const name =
                  geo.properties?.name ??
                  geo.properties?.NAME_1 ??
                  geo.properties?.st_nm ??
                  "Unknown";

                return (
                  <Geography
                    key={`${name}-${index}`}
                    geography={geo}
                    className="india-state"
                    aria-label={String(name)}
                    onClick={() => setSelectedState(String(name))}
                    fill={name === selectedState ? "#2563eb" : "#bfdbfe"}
                    stroke="#ffffff"
                    strokeWidth={0.7}
                  />
                );
              });
            }}
          </Geographies>
        </ComposableMap>
      </div>

      <div className="state-info">
        <span>SELECTED REGION</span>

        <h2>{selectedState}</h2>

        <p>Illustrative Skill Gap Index</p>

        <h1>{skillGap}%</h1>

        <div className="skill-progress">
          <div style={{ width: `${skillGap}%` }} />
        </div>

        <p>
          Click another state on the map to explore its
          skill-gap information.
        </p>
      </div>

    </div>
  );
}

export default IndiaSkillMap;