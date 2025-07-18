import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import MarkUpdater from "../MAPUpdate/index";

interface Props {
  lat: number;
  lng: number;
}

const Map: React.FC<Props> = ({ lat, lng }) => {
  if (!lat || !lng) return null;
  console.log("Map coordinates:", lat, lng);
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={20}
      className="w-full h-[60vh]  max-h-screen z-10 sm:h-[60vh] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]} />
      <MarkUpdater lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Map;
