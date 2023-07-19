import React, { useState } from 'react';
import ShapePreview from './ShapePreview';
import VerticesList from './VerticesList';

const App = () => {
  const [points, setPoints] = useState([]);

  const addPoint = (event) => {
    const { clientX, clientY } = event;
    const newPoint = { x: clientX, y: clientY };
    setPoints([...points, newPoint]);
  };

  return (
    <div style={{ height: '100vh' }}>
       <ShapePreview points={points} />
      <VerticesList points={points} onAddPoint={addPoint} />
    </div>
  );
};

export default App;