import React from 'react';

const VerticesList = ({ points, onAddPoint }) => {
  return (
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <h2>Vertices:</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{`(${point.x}, ${point.y})`}</li>
        ))}
      </ul>

      <button onClick={onAddPoint}>Add Point</button>
    </div>
  );
};

export default VerticesList;