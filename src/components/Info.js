import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src="/profile_picture.jpeg" alt="Profile Picture" className="prof-img" />
      <h1>Ricardo A. Nader</h1>
      <h4>Fullstack Web Developer</h4>
      <p>ricardonader.website</p>
      <div className="link-buttons">
        <button className="email"><i class="fa-solid fa-envelope"></i> Email</button>
        <button className="linkedin"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
      </div>
    </div>
  )
}
