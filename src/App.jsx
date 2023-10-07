import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import background from "./assets/bag.jpeg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
