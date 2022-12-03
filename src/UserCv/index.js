import Contacts from "../Contacts";
import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";
import Img from "../Img";
import React from "react";
import './style.css'
const qrCode = "https://tinypng.com/images/social/website.jpg"

const Home = () => {
  return (
    <div className="home">
      <h1>CV Maker</h1>
      <Img
      url='https://tinypng.com/images/social/website.jpg'/>
      <PersonalInfo
        name="Kanan"
        surname="Karimli"
        age={20}
        location="Narimanov City"
      />
      <Contacts number="0775177770" email="kanankarimli7770@gmail.com" />
      <Experience experience="More than 2 years as a Front End Developer" />
    </div>
  );
};

export default Home;
