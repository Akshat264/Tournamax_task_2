import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/Mapcomponent'), { 
  ssr: false 
});

export default function HomePage() {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <div>
      <MapComponent />
    </div>
  );
}
