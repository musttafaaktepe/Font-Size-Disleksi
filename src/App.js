import React, { useState } from "react";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [fontSize, setFontSize] = useState(20);

  const handleKeyPress = (e) => {
    const char = e.key;

    if (/[a-zA-Z]/.test(char)) {
      const boxSize = fontSize;
      setBoxes([...boxes, { size: boxSize }]);
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Dinamik Yazı Tipi ile Kare Oluştur</h1>
      <div className="controls">
        <label htmlFor="fontSize">Yazı Tipi Büyüklüğü: </label>
        <input
          type="number"
          id="fontSize"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <textarea
        style={{ fontSize: `${fontSize}px` }}
        onKeyDown={handleKeyPress}
        placeholder="Buraya yazın..."
      />
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{ width: `${box.size}px`, height: `${box.size}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
