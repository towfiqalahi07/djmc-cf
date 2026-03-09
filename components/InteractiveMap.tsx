'use client';

import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { districtCoordinates } from '@/lib/coordinates';
import { getDivision } from '@/lib/bangladesh';

interface MapProps {
  districtCounts: Record<string, number>;
}

const divisionColors: Record<string, string> = {
  'Dhaka': '#3b82f6', // blue
  'Chattogram': '#10b981', // emerald
  'Rajshahi': '#f59e0b', // amber
  'Khulna': '#ef4444', // red
  'Barisal': '#8b5cf6', // purple
  'Sylhet': '#ec4899', // pink
  'Rangpur': '#06b6d4', // cyan
  'Mymensingh': '#f97316' // orange
};

export default function InteractiveMap({ districtCounts }: MapProps) {
  const maxCount = Math.max(...Object.values(districtCounts), 1);

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 relative z-0">
      <MapContainer 
        center={[23.6850, 90.3563]} 
        zoom={7} 
        scrollWheelZoom={false}
        className="h-full w-full bg-[#0a0a0a]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {Object.entries(districtCounts).map(([district, count]) => {
          const coords = districtCoordinates[district];
          if (!coords) return null;
          
          const division = getDivision(district);
          const color = divisionColors[division] || '#ffffff';
          
          // Calculate radius based on count relative to max count (min 8, max 30)
          const radius = 8 + (count / maxCount) * 22;

          return (
            <CircleMarker
              key={district}
              center={coords}
              radius={radius}
              pathOptions={{
                fillColor: color,
                fillOpacity: 0.7,
                color: color,
                weight: 2,
                opacity: 0.9
              }}
            >
              <Tooltip 
                direction="top" 
                offset={[0, -10]} 
                opacity={1}
                className="custom-tooltip"
              >
                <div className="text-center p-1">
                  <div className="font-bold text-sm">{district}</div>
                  <div className="text-xs opacity-80">{division} Division</div>
                  <div className="mt-1 font-semibold text-blue-600">{count} Student{count > 1 ? 's' : ''}</div>
                </div>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}


