"use client";

import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/img.png",
  shadowUrl: "/img-shadow.png",
  iconSize: [20, 40],
  iconAnchor: [15, 40],
  shadowSize: [50, 40],
});

function ChangeView({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (!center) return;
    map.setView(center, zoom, {
      animate: true,
      duration: 1.5,
    });
  }, [center, zoom, map]);
  return null;
}

function FitBounds({ markers, activeCoords }) {
  const map = useMap();

  useEffect(() => {
    if (!markers.length || activeCoords) return;

    const validMarkers = markers.filter(
      (m) => m.coords && m.coords.length === 2,
    );

    if (!validMarkers.length) return;

    const bounds = validMarkers.map((m) => m.coords);

    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 8 });
  }, [markers, activeCoords, map]);

  return null;
}

export default function MapLeaflet({ markers, center, zoom }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={5}
      maxZoom={12}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {/*  Ajusta automaticamente */}
      <FitBounds markers={markers} activeCoords={center} />
      <ChangeView center={center} zoom={zoom} />
      {markers?.map((marker, index) =>
        marker.coords ? (
          <Marker
            key={marker.slug || index}
            position={marker.coords}
            icon={customIcon}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ) : null,
      )}
    </MapContainer>
  );
}
