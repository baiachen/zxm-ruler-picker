import React from "react";
import Ruler from "zxm-ruler-picker";

console.log('Ruler')
function App() {
  return (
    <div className="App">
      <div>
        <Ruler minScale={0} maxScale={100} initScale={80} onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
