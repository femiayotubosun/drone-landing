import React from "react";
import LinkList from "../LinkList/LinkList";
import { GiDeliveryDrone } from "react-icons/gi";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

import "./footer.css";

const Footer = () => {
  return (
    <div className="drone__footer">
      <div className="drone__footer-logo">
        <div className="drone__footer__logo">
          <GiDeliveryDrone size="40px" />
          <h2>DroneHQ</h2>
        </div>
        <p>Look up. The sky above you is beautiful. </p>
        <div className="drone__footer-socials">
          <FiInstagram size="30px" color="#E02765" />
          <FiFacebook size="30px" color="#4065B1" />
          <FiTwitter size="30px" color="#1B9FF1" />
          <FiYoutube size="30px" color="#FA0000" />
        </div>
      </div>
      <div className="drone__footer-links">
        <LinkList
          header="Explore"
          links={["Our services", "Specifications", "Refund", "Pricelist"]}
        />
        <LinkList
          header="Explore"
          links={["Our services", "Specifications", "Refund", "Pricelist"]}
        />
        <LinkList
          header="Explore"
          links={["Our services", "Specifications", "Refund", "Pricelist"]}
        />
      </div>
    </div>
  );
};

export default Footer;
