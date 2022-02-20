import React from "react";
import Feature from "../Feature/Feature";
import "./features.css";

import drone from "../../assets/images/drone.jpg";
import ship from "../../assets/images/ship.jpg";

const Features = () => {
  return (
    <div className="drone__features">
      <Feature
        background={drone}
        header="Ultra Light"
        text="Drone moves fast with less 200g of weight"
      />
      <Feature
        background={ship}
        header="Best Resolution"
        text="Take a beautiful view with our camera, up to 4K resolution."
      />
    </div>
  );
};

export default Features;
