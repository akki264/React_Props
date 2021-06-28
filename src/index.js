import React from "react";
import ReactDOM from "react-dom";

function Card(prop) {
  return (
    <div>
      <h1> {prop.name} </h1>
      <img src={prop.img} alt="AKshay project" />
      <p>{prop.tel}</p>
      <p>{prop.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
