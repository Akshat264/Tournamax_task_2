import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const markers = [
    { position: [28.6139, 77.2090], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];
  function CenterMap({ position }) {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, map.getZoom());
      }
    }, [position]);
    return null;
  }
  const MapComponent = () => {
    const [center, setCenter] = useState([20.5937, 78.9629]); // Initial center position (India)
    const handleMarkerClick = (position) => {
        setCenter(position);
      };
    return (
      <MapContainer center={center} zoom={5} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {markers.map((marker, idx) => (
          <Marker
            key={idx}
            position={marker.position}
            eventHandlers={{
              click: () =>handleMarkerClick(marker.position),
            }}
          >
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
        {center && <CenterMap position={center} />}
      </MapContainer>
    );
  };
  
  export default MapComponent;
  