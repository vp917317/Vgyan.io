import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Link from "next/link";
import '../styles/index.css';
import Head from 'next/head';;


function SmartStudentool() {
  
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader when the link is clicked

    // Simulate loading for 3 seconds and then navigate to the link
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      router.push("/SmartStudent"); // Navigate to the specific link
    }, 3000);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // this ensures full viewport height
          background: "#faebd7",
        }}
      >
        <Loader text="Loading Smart StudentAI Machine ..." /> 
        
      </div>
    );
  }

  return (
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan Smart Student AI </title>
        <meta name="description" content="Smart StudentAI is an advanced Artificial Intelligence (AI) tool
            designed to provide comprehensive support to students, whether they
            are exam aspirants or school students. This cutting-edge solution
            serves as a virtual educational companion, addressing a wide range
            of student queries and concerns." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan Smart Student AI",
              "description": "Smart StudentAI is an advanced Artificial Intelligence (AI) tool
              designed to provide comprehensive support to students, whether they
              are exam aspirants or school students. This cutting-edge solution
              serves as a virtual educational companion, addressing a wide range
              of student queries and concerns.",
              "publisher": {
                "@type": "Organization",
                "name": "vgyan.io", 
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://imgtr.ee/images/2023/09/23/0ab9e1d72544a7035e90772385108976.jpeg" 
                }
              }
            }
          `}
        </script>

      </Head>
      <Nav />
      {/* {isLoading ? (
        <Loader text="Loading" time="3000" />
      ) : ( */}
        <div
          className="p-8 bg-gray-100 rounded-lg shadow-md"
          style={{ marginTop: "10px" }}
        >
          <div className="curved-underline">
            <h2 className="text-3xl font-bold mb-4" style={{ margin: 0 }}>
              Smart Student AI - Your
              <span className="text-purple-600 italic"> All-in-One </span>
              Educational Companion
            </h2>
          </div>

          <p className="mb-4" style={{ marginTop: "30px" }}>
            Smart StudentAI is an advanced Artificial Intelligence (AI) tool
            designed to provide comprehensive support to students, whether they
            are exam aspirants or school students. This cutting-edge solution
            serves as a virtual educational companion, addressing a wide range
            of student queries and concerns.
          </p>
          <p className="mb-4">
            <p
              style={{ color: "#1f5156", fontWeight: "bold", fontSize: "18px" }}
            >
              let Smart Student AI be your trusted companion. Dive into topics,
              explore the intricacies of day to day problems of aspirant or
              students, and empower your vision.
            </p>
            <br></br>
            <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
              It's like your personal mentor!
            </p>
            <br></br>
            Don't wait ask your mentor . No worry what you have in your mind ,
            just ask Smart Student AI and get your query solve .
          </p>

          {/* <p className="mb-2" style={{ fontSize: "12px" }}>
          *While out AI tool will give the most precise response on the web , it
          can one's in a while distract from heavy traffic on our website . So ,
          in this case please wait a minute for new response .
        </p> */}

          <div className="flex justify-center items-center h-full">
            <Link
              href="/SmartStudent"
              // className="mt-5 px-4 py-2 bg-purple text-white-500 rounded-full"
              className="transition-transform transform hover:scale-105 mt-5 px-4 py-2 bg-purple text-white-500 rounded-full border-2 border-transparent hover:border-white"
              style={{
                border: "2px solid",
                backgroundImage:
                  "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#0000cd",
              }}
              onClick={handleLinkClick}
            >
              Smart Student-AI
            </Link>
          </div>
          <h4 className="text-2xl font-bold mb-4">
            Key Features of Smart Student AI:
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Personal Queries: </strong>
              Beyond academics, students can turn to SmartStudentAI for answers
              to personal questions. Whether it's advice on time management,
              study strategies, or career planning, the AI is there to provide
              guidance.
            </li>
            <li className="mb-2">
              <strong>Mental Health Support: </strong> Recognizing the
              importance of mental health, SmartStudentAI offers guidance and
              support to students dealing with stress, anxiety, or emotional
              challenges. It provides relaxation techniques, motivational
              content, and connects students to mental health professionals when
              needed.
            </li>
            <li className="mb-2">
              <strong>Exam Preparation: </strong> For exam aspirants,
              SmartStudentAI is a dedicated study partner. It offers
              personalized study plans, recommends relevant study materials, and
              provides practice questions to help students prepare effectively
              for exams.
            </li>
            <li className="mb-2">
              <strong>Academic Assistance: </strong> SmartStudentAI offers
              students instant access to a wealth of academic resources. It can
              help students understand complex subjects, solve math problems,
              explain scientific concepts, and provide explanations for
              historical events.
            </li>

            <li className="mb-2">
              <strong>24/7 Availability: </strong> SmartStudentAI is available
              24/7, ensuring that students can seek assistance whenever they
              need it, even during late-night study sessions or moments of
              anxiety.
            </li>
          </ul>

          <h4 className="text-2xl font-bold mb-4">Why Trust Our Tool?</h4>

          <p className="mb-4">
            SmartStudentAI is a versatile and indispensable tool for students of
            all ages and backgrounds. It combines the power of AI with a
            student-centered approach to foster academic excellence, mental
            well-being, and personal growth. Whether you're a high school
            student preparing for exams or a university student seeking answers
            to life's questions, SmartStudentAI is here to assist you on your
            educational journey.
          </p>

          <p className="mb-4">
            Isn't it incredible how technology can simplify the daunting task of
            all in one mentor ?
          </p>

          <p className="mb-4">
            Now's the time to elevate your preparation strategy. Try out our
            premium product - <strong>Smart Student - AI</strong> - and let AI
            be your companion in your journey .
          </p>
          <div className="flex justify-center items-center h-full">
            <Link
              href="/SmartStudent"
              // className="mt-5 px-4 py-2 bg-purple text-white-500 rounded-full"
              className="transition-transform transform hover:scale-105 mt-5 px-4 py-2 bg-purple text-white-500 rounded-full border-2 border-transparent hover:border-white"
              style={{
                border: "2px solid",
                backgroundImage: "linear-gradient(to right, black,#ffff00",
                marginBottom: "20px",
                color: "#40e0d0",
                fontWeight: "bold",
              }}
              onClick={handleLinkClick}
            >
              Explore the Tool
            </Link>
          </div>
        </div>
      {/* )} */}
      <Footer />
    </>
  );
}

export default SmartStudentool;
