import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface Props {
  lat: number;
  lng: number;
}

const MapUpdater: React.FC<Props> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 20);
  }, [lat, lng, map]);

  return null;
};

export default MapUpdater;
