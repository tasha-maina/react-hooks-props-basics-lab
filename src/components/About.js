import React from "react";
import Links from "./Links"; // <-- Import Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Conditionally render bio */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Add Links component and pass props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
