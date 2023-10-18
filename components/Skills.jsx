// pages/about-us.js

import React from "react";
import Image from "next/image";
import bg from "../public/images/banner-bg.png";
import img from "../public/images/log.jpeg";
import "../styles/main.css";

function Skills() {
  return (
    <>
      <div
        id="about-us"
        style={{ backgroundImage: `url(${bg.src})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="about-us-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl">About Us</h1>
          <p className="text-lg py-3">
            "At Vigyan.io, our unwavering passion lies in harnessing the power
            of cutting-edge technology and its seamless integration with
            education, ushering in a groundbreaking era for how individuals
            preparing for exams approach their studies. Through the innovative
            prowess of our AI-driven platform, we have successfully demystified
            the intricate landscape of current affairs and exam materials, not
            only guaranteeing pinpoint accuracy but also eradicating the
            possibility of human errors. With just a single effortless click,
            aspirants gain entry to an extensive reservoir of invaluable
            information, thereby conserving their invaluable time and energy. By
            harmoniously fusing time-tested traditional wisdom with
            state-of-the-art technological advancements, we present an
            unparalleled learning journey for those who aspire to excel in civil
            services and various other competitive examinations. Embark on this
            transformative expedition with us, and discover a more intelligent
            and remarkably efficient route to achieving your path to success."
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={img}
              alt="vgyan.io"
              style={{ height: 180, width: 180, borderRadius: "50%" }}
            />
          </div>

          <div className="box flex justify-between items-center bg-[#171717] my-6">
            <div className="bg-[#171717]">
              {/* <Image src={img} alt="" /> */}
              <h1 className="font-bold text-2xl my-2">Our Mission</h1>
              <p>
                "At the heart of our mission lies the steadfast commitment to
                empower individuals of all backgrounds with the essential
                knowledge and an array of powerful tools indispensable for
                triumphing in the realm of competitive examinations. We are
                relentless in our pursuit of rendering learning not only
                accessible but also remarkably efficient and profoundly
                effective. We achieve this through a groundbreaking synergy of
                cutting-edge technology, revolutionary pedagogical approaches,
                and a wealth of meticulously curated educational content, all
                meticulously designed to equip aspirants with the unwavering
                confidence to conquer their academic and professional
                milestones."
              </p>
            </div>
            <div className="bg-[#171717]">
              {/* <Image src={img} alt="" /> */}
              <h1 className="font-bold text-2xl my-2">Our Vision</h1>
              <p>
                "Our vision is characterized by an unswerving dedication to
                becoming a pioneering trailblazer in the realm of online
                education. We aspire to ascend to the forefront of this digital
                educational landscape by offering avant-garde solutions that
                transcend conventional boundaries, elevating learning outcomes
                to unprecedented heights. Our ultimate objective is to empower
                individuals from diverse walks of life, enabling them to not
                only excel academically but also embark on fulfilling career
                trajectories. By harnessing the limitless potential of
                innovative educational approaches, we aim to inspire a new era
                of achievement and enlightenment."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
