import React from "react";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/18.jpg"
        name="Alvin Hunt"
        online
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/23.jpg"
        name="Tim Olivier"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/38.jpg"
        name="AAnna Price"
        online
      />
    </div>
  );
};



export default App;
