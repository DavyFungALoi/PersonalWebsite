import React from "react";
import ContactComponent from "../Components/ContactComponent";

export const ContactScreen = () => {
  return (
    <div className="Contact__Screen__Container">
      <ContactComponent></ContactComponent>
      <a href="/">
        <button className="Contact_Screen_Button">Go back to Home</button>
      </a>
    </div>
  );
};
