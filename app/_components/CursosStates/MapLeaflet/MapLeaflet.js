"use client";

import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/img.png",
  shadowUrl: "img-shadow.png",
  iconSize: [20, 40],
  iconAnchor: [15, 40],
  shadowSize: [50, 40],
});

function ChangeView({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, {
      animate: true,
      duration: 1.5,
    });
  }, [center, zoom, map]);
  return null;
}

export default function MapLeaflet({ center, zoom, makers }) {
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

      <ChangeView center={center} zoom={zoom} />
      {makers.map((marker, index) => (
        <Marker key={index} position={marker} icon={customIcon} />
      ))}
    </MapContainer>
  );
}
