import React from "react";
import logo from "../public/images/back.png";
import logo1 from "../public/images/bg22.png";
import bg from "../public/images/bgv.jpeg";
import Navbar from "./Navbar";
import "../styles/main.css";
import Image from "next/image";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundBlendMode: "exclusion",
        }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col"
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to Vgyan.io
              </button>
            </div>
            <h1
              className="text-white text-5xl font-bold"
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              {" "}
              All in one exam Tool{" "}
            </h1>
            <p
              className="text-white py-4 max-w-lg "
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Welcome to Vgyan.io, where cutting-edge technology meets
              comprehensive exam preparation. Dive into a reservoir of
              up-to-date current affairs, editorial breakdowns, and in-depth
              notes, all curated and presented by our advanced AI. Gear up for
              UPSC and other competitive exams with a unique edge that keeps you
              a step ahead.
            </p>
            {/* <button className='  text-white text-2xl'>Find more below <i className="fa-solid fa-arrow-bottom text-lg  p-[2px] "></i> </button> */}
            <h3
              className="text-white text-3xl font-bold"
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Revolutionizing Exam Preparation with AI{" "}
            </h3>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <Image className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <Image className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
