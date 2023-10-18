// pages/about-us.js
import Nav from "@/components/Nav";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import img from "../public/images/log.jpeg";
import "../styles/main.css";
import '../styles/index.css'
import Skills from "@/components/Skills";

// function AboutUs() {
  
//   return (
//     <>
//     <Nav bgColor="#f08080"/>
//       <Skills/>
//       <Footer/>
//     </>
//   );
// }

// export default AboutUs;


export default function AboutUs() {
  return (
    <><Nav bgColor="#f08080" />
    <Skills />
    <Footer/>
    </>
  )
}
