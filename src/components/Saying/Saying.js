import React from "react";
import Pilot from "../../Pilot/Pilot";
import "./saying.css";

const Saying = () => {
  return (
    <div className="drone__saying" id="review">
      <h2>What our "pilots" are saying?</h2>
      <div className="drone__saying__cards-container">
        <Pilot
          comment="This is the most amazing drone I've ever flown. Amazing!!"
          image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          name="Titi Ifagbemi"
          job="Broke Influencer"
        />
        <Pilot
          comment="This is the most amazing drone I've ever flown. Amazing!!"
          image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          name="Jimoh Danladi"
          job="Lagos Bigboy"
        />
        <Pilot
          comment="This is the most amazing drone I've ever flown. Amazing!!"
          image="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          name="Ayeola Tony"
          job="9jaBet Enthusiast"
        />
      </div>
    </div>
  );
};

export default Saying;
