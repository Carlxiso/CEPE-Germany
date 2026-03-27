"use client";
import dynamic from "next/dynamic";
import CursosNavigation from "../../CursosNavigation/CursosNavigation";
import styles from "./Map.module.css";
import { useState } from "react";

const MapLeaflet = dynamic(
  () => import("../../CursosStates/MapLeaflet/MapLeaflet"),
  { ssr: false },
); // SSR OFF → só renderiza no browser

export default function Map({ data, reverse = false }) {
  const [selectedCoords, setSelectedCoords] = useState(null);

  const [zoom, setZoom] = useState(9);

  const allMarkers = [...(data.basico || []), ...(data.superior || [])];

  const handleCityClick = (coords) => {
    setSelectedCoords(coords);
    setZoom(14);
  };

  const tabs = [
    {
      label: "Ensino Básico e Secundário",
      content: (
        <ul>
          {data.basico?.length ? (
            data.basico.map((city) => (
              <li
                key={city.slug}
                onClick={() => handleCityClick(city.coords)}
                style={{ cursor: "pointer" }}
              >
                {city.name}
              </li>
            ))
          ) : (
            <p>Sem cursos disponíveis</p>
          )}
        </ul>
      ),
    },
    {
      label: "Ensino Superior",
      content: (
        <ul>
          {data.superior?.length ? (
            data.superior.map((city) => (
              <li
                key={city.name}
                onClick={() => handleCityClick(city.coords)}
                style={{ cursor: "pointer" }}
              >
                {city.name}
              </li>
            ))
          ) : (
            <p>Sem cursos disponíveis</p>
          )}
        </ul>
      ),
    },
    {
      label: "Ensino à distância",
      content: (
        <ul>
          {data.distance?.length ? (
            data.distance.map((city) => (
              <li
                key={city.name}
                onClick={() => handleCityClick(city.coords)}
                style={{ cursor: "pointer" }}
              >
                {city.name}
              </li>
            ))
          ) : (
            <p>Sem cursos disponíveis</p>
          )}
        </ul>
      ),
    },
  ];

  return (
    <div className={styles.mapSection}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        {/* LEFT (INFO) */}
        <div className={styles.info}>
          <h2 className={styles.title}>{data.name}</h2>
          <p>{data.textName}</p>
          <div className={styles.cursosNavigation}>
            <CursosNavigation tabs={tabs} />
          </div>
        </div>

        {/* RIGHT (MAP) */}
        <div className={styles.map}>
          <MapLeaflet
            markers={allMarkers}
            center={selectedCoords}
            zoom={zoom}
            // makers={[selectedCoords]}
          />
        </div>
      </div>
    </div>
  );
}
