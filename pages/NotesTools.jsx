import React, { useEffect, useState } from "react";
import "../styles/index.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Link from "next/link";
import { useRouter } from "next/router";

function NotesTools() {
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader when the link is clicked

    // Simulate loading for 3 seconds and then navigate to the link
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      router.push("/Notes"); // Navigate to the specific link
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
        <Loader text="Loading General Science Notes Machine ..." />
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan GS Notes </title>
        <meta
          name="description"
          content="Navigating the vast realm of General Studies for UPSC can often feel like traversing an endless ocean of information. Every aspirant knows the importance of concise, yet comprehensive notes that make revision efficient and effective. Introducing GS Notes a groundbreaking tool tailored specifically for the modern-day UPSC aspirant."
        />
        {/* Add other SEO-related meta tags here */}
        {/* JSON-LD structured data for Article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan GS Notes",
              "description": " Navigating the vast realm of General Studies for UPSC can often feel like traversing an endless ocean of information. Every aspirant knows the importance of concise, yet comprehensive notes that make revision efficient and effective. Introducing "GS Notes", a groundbreaking tool tailored specifically for the modern-day UPSC aspirant.
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
      {/* {isLoading ? (<Loader text="Loading" time="3000" />) : ( */}
      <div
        className="p-8 bg-gray-100 rounded-lg shadow-md"
        style={{ marginTop: "10px" }}
      >
        <div className="curved-underline">
          <h2 className="text-3xl font-bold mb-4" style={{ margin: 0 }}>
            GS Notes: Revolutionizing
            <span className="text-purple-600 italic"> UPSC Preparation </span>
            with AI-Powered Study Assistance
          </h2>
        </div>

        <p className="mb-4" style={{ marginTop: "30px" }}>
          Navigating the vast realm of General Studies for UPSC can often feel
          like traversing an endless ocean of information. Every aspirant knows
          the importance of concise, yet comprehensive notes that make revision
          efficient and effective. Introducing "GS Notes", a groundbreaking tool
          tailored specifically for the modern-day UPSC aspirant.
        </p>
        <p className="mb-4">
          <p style={{ color: "#1f5156", fontWeight: "bold", fontSize: "18px" }}>
            let GS Notes be your trusted companion. Dive into topics, explore
            the intricacies of general studies, and arm yourself with notes that
            empower your revision.
          </p>
          <br></br>
          <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
            Join the Revolution !
          </p>
          <br></br>
          Don't wait create notes on your favorite topic .
        </p>

        <p className="mb-2" style={{ fontSize: "12px" }}>
          *While out AI tool will give the most precise response on the web , it
          can one's in a while distract from heavy traffic on our website . So ,
          in this case please wait a minute for new response .
        </p>

        <div className="flex justify-center items-center h-full">
          <Link
            href="/Notes"
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
            Explore the Tool
          </Link>
        </div>
        <h4 className="text-2xl font-bold mb-4">Key Features of GS Notes:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Instant Note Creation:</strong> Just input your desired
            topic and watch in amazement as GS Notes crafts a comprehensive set
            of notes in a mere 10 seconds. Time is of the essence in UPSC
            preparation, and GS Notes ensures you save every precious second.
          </li>
          <li className="mb-2">
            <strong>Accuracy & Precision:</strong> Our AI system is trained on a
            vast dataset of UPSC-relevant content, ensuring that it picks out
            articles and points that are most likely to benefit you in your
            preparation.
          </li>
          <li className="mb-2">
            <strong>Tailored for UPSC</strong> Unlike generic note-making tools,
            GS Notes understands the depth and breadth required for UPSC's
            General Studies. The notes strike the perfect balance between
            brevity and detail, ensuring you don't miss out on crucial points.
          </li>
          <li className="mb-2">
            <strong>Deep Learning Intelligence:</strong> At the heart of GS
            Notes lies a state-of-the-art AI engine that has been trained on a
            vast array of UPSC-relevant materials. This ensures the quality and
            relevance of every note it produces.
          </li>
          <li className="mb-2">
            <strong>Dynamic Update Capabilities:</strong> As the world of
            general studies is ever-evolving, GS Notes ensures that you stay
            updated. The tool continually updates its knowledge base, reflecting
            recent developments and current affairs pertinent to the UPSC
            syllabus.
          </li>
        </ul>

        <h4 className="text-2xl font-bold mb-4">Why Trust Our Tool?</h4>

        <p className="mb-4">
          Your preparation is personal, and we respect that. GS Notes is built
          on a platform that prioritizes user privacy, ensuring that your study
          topics and materials remain confidential. With an intuitive interface,
          GS Notes facilitates a seamless study experience. Whether you're
          deep-diving into a historical event or exploring current international
          relations, the tool is designed to serve aspirants with varying tech
          proficiency.
        </p>

        <p className="mb-4">
          Isn't it incredible how technology can simplify the daunting task of
          UPSC preparation?
        </p>

        <p className="mb-4">
          Now's the time to elevate your UPSC preparation strategy. Try out our
          premium product - <strong>Notes Making for UPSC</strong> - and let AI
          be your companion in your journey to cracking one of India's toughest
          exams.
        </p>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/Notes"
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

export default NotesTools;
