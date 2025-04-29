import React from "react";

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
      <h3></h3>
    </aside>
  );
};

export default About;
