import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src="/profile_picture.jpeg" alt="Profile Picture" className="prof-img" />
      <h1 className="title name">Ricardo A. Nader</h1>
      <h4 className="title position">Fullstack Web Developer</h4>
      <p className="title link-website">ricardonader.website</p>
      <div className="link-buttons">
        <a href="mailto:ricardoalexis.nader@gmail.com">
          <button className="link-button"><i className="fa-solid fa-envelope"></i> Email</button>
        </a>
        <a href="https://www.linkedin.com/in/ricardonader/">
          <button className="link-button"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
        </a>
      </div>
    </div>
  )
}
