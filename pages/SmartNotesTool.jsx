import React, { useEffect, useState } from "react";
import "../styles/index.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';

function SmartNotesTool() {
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader when the link is clicked

    // Simulate loading for 3 seconds and then navigate to the link
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      router.push("/SmartNotes"); // Navigate to the specific link
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
        <Loader text="Loading Notes Machine ..." />
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan Smart Notes Tool</title>
        <meta
          name="description"
          content="Welcome to SmartNotes AI, your intelligent note-taking assistant. With our advanced AI technology, you can generate comprehensive notes on any topic, whether it's from school NCERT books, college materials like MBA, Engineering, CA, CS, and more. Say goodbye to the hassle of manual note-taking and let SmartNotes AI simplify your learning experience."
        />
        {/* Add other SEO-related meta tags here */}
        {/* JSON-LD structured data for Article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan Smart Notes Tool",
              "description": "Welcome to SmartNotes AI, your intelligent note-taking assistant. With our advanced AI technology, you can generate comprehensive notes on any topic, whether it's from school NCERT books, college materials like MBA, Engineering, CA, CS, and more. Say goodbye to the hassle of manual note-taking and let SmartNotes AI simplify your learning experience.
              ": {
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
            SmartNotes AI
            <span className="text-purple-600 italic">
              {" "}
              - Your Note-Taking Assistant
            </span>
          </h2>
        </div>

        <p className="mb-4" style={{ marginTop: "30px" }}>
          Welcome to SmartNotes AI, your intelligent note-taking assistant. With
          our advanced AI technology, you can generate comprehensive notes on
          any topic, whether it's from school NCERT books, college materials
          like MBA, Engineering, CA, CS, and more. Say goodbye to the hassle of
          manual note-taking and let SmartNotes AI simplify your learning
          experience.
        </p>
        <p className="mb-4">
          <p style={{ color: "#1f5156", fontWeight: "bold", fontSize: "18px" }}>
            Now you can create high-quality notes with just a few clicks, saving
            you valuable time and effort.
          </p>
          <br></br>
          <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
            Isn't it amazing?
          </p>
          <br></br>
          Let's get started with SmartNotes AI and supercharge your learning
          journey.
        </p>

        <p className="mb-2" style={{ fontSize: "12px" }}>
          *While our AI tool strives for precision, it may occasionally
          experience high traffic on our website. In such cases, please allow a
          moment for a response.
        </p>

        <div className="flex justify-center items-center h-full">
          <Link
            href="/SmartNotes"
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
            Create Notes
          </Link>
        </div>

        <h4 className="text-2xl font-bold mb-4">
          How Does SmartNotes AI Work?
        </h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Topic Selection:</strong> Simply input the topic you want to
            create notes on, and our AI will do the rest.
          </li>
          <li className="mb-2">
            <strong>Content Extraction:</strong> SmartNotes AI extracts relevant
            information from a vast database of educational materials and
            sources.
          </li>
          <li className="mb-2">
            <strong>Summarization:</strong> Our tool generates concise and
            well-structured notes, highlighting key concepts and important
            details.
          </li>
          <li className="mb-2">
            <strong>Formatting:</strong> Your notes are formatted for clarity
            and readability, making them easy to review and study.
          </li>
          <li className="mb-2">
            <strong>Customization:</strong> You can further customize and edit
            the notes as per your preferences.
          </li>
        </ul>

        <h4 className="text-2xl font-bold mb-4">Benefits of SmartNotes AI:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Time Savings:</strong> Generate notes quickly and
            efficiently, saving you valuable study time.
          </li>
          <li className="mb-2">
            <strong>Comprehensive Content:</strong> Access comprehensive notes
            on a wide range of topics and subjects.
          </li>
          <li className="mb-2">
            <strong>Accuracy & Reliability:</strong> SmartNotes AI ensures
            accurate and reliable note generation from trusted sources.
          </li>
          <li className="mb-2">
            <strong>Customization:</strong> Tailor the notes to suit your
            learning style and preferences.
          </li>
          <li className="mb-2">
            <strong>Convenience:</strong> Say goodbye to manual note-taking and
            enjoy hassle-free learning.
          </li>
        </ul>

        <h4 className="text-2xl font-bold mb-4">
          Start Simplifying Your Learning with SmartNotes AI
        </h4>

        <p className="mb-4">
          Ready to streamline your note-taking process and enhance your learning
          experience? Dive into the world of SmartNotes AI and unlock a smarter
          way to study. Stay organized, stay informed, and excel in your
          educational journey.
        </p>

        <p className="mb-4">
          Experience the future of note-taking. Try out SmartNotes AI now!
        </p>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/SmartNotes"
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
            Create Notes
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SmartNotesTool;
