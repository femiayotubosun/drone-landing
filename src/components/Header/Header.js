import React, { useEffect, useState } from "react";
import { GiDeliveryDrone, GiHamburgerMenu } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../Button/Button";
import NavItems from "../NavItems/NavItems";
import "./header.css";

const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false);
  const [windowDimension, setwindowDimension] = useState(null);

  useEffect(() => {
    setwindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setwindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 890;

  return (
    <div className="drone__header">
      <div className="drone__header__logo">
        <GiDeliveryDrone size="30px" />
        <p>DroneHQ</p>
      </div>
      <div className="drone__header__nav">
        <NavItems />
      </div>
      <div className="drone__header__buttons">
        <Button background="transparent" color="#315BC7" content="Register" />
        <Button background="#315BC7" color="#fff" content="Register" />
      </div>

      <div className="drone__header__hamburger">
        {mobileOpen ? (
          <FiX
            size="18px"
            onClick={() => setmobileOpen(mobileOpen ? false : true)}
          />
        ) : (
          <FiMenu
            size="18px"
            onClick={() => setmobileOpen(mobileOpen ? false : true)}
          />
        )}
      </div>
      {isMobile && mobileOpen ? (
        <div className="drone__header__mobile-nav">
          <NavItems />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
