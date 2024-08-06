import React, { useEffect, useState } from 'react';
import EmployeeMarker from './EmployeeMarker';

const ZonesData = [
  { label: "Zone 1", color: "#c2fcff", top: '20%', left: '30%' },
  { label: "Zone 2", color: "#fcf7c0", top: '20%', left: '70%' },
  { label: "Zone 3", color: "#d9dcff", top: '70%', left: '30%' },
  { label: "Zone 4", color: "#f8c5bd", top: '70%', left: '70%' },
];

const Map = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch('/initial_positions.json')
      .then(response => response.json())
      .then(data => setPositions(data));

    let timer;
    fetch('/updated_positions.json')
      .then(response => response.json())
      .then(data => {
        timer = setTimeout(() => {
          setPositions(data);
        }, 5000);
      });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <img src="/images/firstImage.jpg" alt="Map" className="w-full h-full object-cover" />
      {positions.map(employee => (
        <EmployeeMarker key={employee._id} employee={employee} zoneData={ZonesData} />
      ))}
    </div>
  );
};

export default Map;
