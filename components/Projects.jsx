import React, { useState } from "react";
import img1 from "../public/images/newspaper.png";
import img2 from "../public/images/editorial.png";
import img3 from "../public/images/notes.png";
import img4 from "../public/images/current.jpeg";
import img5 from "../public/images/students.jpeg";
import img6 from "../public/images/chat.jpeg"
import "../styles/main.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "AI-Driven Newspaper Analysis:",
      description: "Stay updated with daily news summaries and in-depth analyses, all curated by our AI. From national to international affairs, get everything tailored to UPSC's dynamic syllabus",
      img: img1,
      headline:"Newspaper Analysis on One Click",
      try:"Get Analysis",
      link:"/NewspaperA"
    },
    {
      id: 2,
      title: "Editorial Insights for UPSC",
      description: "Understand the nuances of top editorials from leading publications. Our AI deciphers, summarizes, and highlights key perspectives, ensuring you're always in the loop.",
      img: img2,
      headline:"Editorial Analysis",
      try:"Get Analysis",
      link:"/EditorialTool"
    },
    {
      id: 3,
      title: "Comprehensive Notes on Diverse Topics",
      description: "Bid farewell to cumbersome books and scattered resources. Our AI crafts concise, relevant, and high-quality notes from a plethora of subjects to fortify your preparation.",
      img: img3,
      headline:"General Science notes",
      try:"Create Notes",
      link:"/NotesTools"
    },
    {
      id: 4,
      title: "Current Affairs for Various Exams",
      description: "Not just UPSC, we've got you covered for other competitive exams as well. Experience AI's precision in curating and presenting the most relevant current affairs to broaden your horizons",
      img: img4,
      headline:"All exams GK",
      try:" Wanna Try ?",
      link:"/GK"
    },
    {
      id: 5,
      title: "Create Notes from any chapter",
      description: "At Vigyan.io, we understand the diverse chapters and complexities students encounter. That's why we offer an intuitive solution to create concise, tailored notes from any chapter. Dive into a streamlined learning experience.",
      img: img5,
      headline:"Smart School Notes",
      try:"Try NotesAI",
      link:"/SmartNotesTool"
    },
    {
      id: 6,
      title: "Ask AI anything",
      description: "SmartStudentAI - Your All-in-One Personal Mentor . SmartStudentAI is an advanced Artificial AI tool . This cutting-edge solution serves as a virtual educational companion, addressing a wide range of student queries and concerns from personal to academic questions.",
      img: img6,
      headline:"Smart Student - AI",
      try:"wanna try?",
      link:"/SmartStudentTool"
    },
  ];

  return (
    <>
      <div id="projects" className="projects bg-[#AFEEEE] text-white py-10" > 
        <h1 className="text-center text-4xl font-bold py-6">Services</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        Experience AI-powered newspaper analysis, editorial insights, and comprehensive notes tailored for UPSC and beyond.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Tools
          </button>
          {/* <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Text-1
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        {/* <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  "> */}
        <div className="grid grid-cols-3 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 tl:grid-cols-1">

          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} /> )
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
