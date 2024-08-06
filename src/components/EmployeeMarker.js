import React from 'react';

const EmployeeMarker = ({ employee, zoneData }) => {
  const { firstName, lastName, zone } = employee;
  const zoneInfo = zoneData.find(z => z.label === zone);

  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer"
      style={{
        top: zoneInfo.top,
        left: zoneInfo.left,
        transform: 'translate(-50%, -50%)',
      }}
      title={`${firstName} ${lastName}\nZone: ${zone}`}
    >
      <div className="bg-gray-500 text-white px-1 rounded-lg shadow-lg mb-2">
        {zoneInfo.label}
      </div>
      <div
        className="bg-white rounded-full h-6 w-6 flex items-center justify-center"
        style={{ borderColor: zoneInfo.color, borderWidth: 2 }}
      >
        {firstName[0]}
      </div>
      <div className="text-xs">{firstName}</div>
    </div>
  );
};

export default EmployeeMarker;
