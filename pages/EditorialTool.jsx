import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import '../styles/index.css'

function EditorialTool() {
  // const [isLoading, setisLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading for 3 seconds and then set isLoading to false
  //   const timer = setTimeout(() => {
  //     setisLoading(false);
  //   }, 3000);

  //   // Cleanup the timer if the component unmounts or the effect re-runs
  //   return () => clearTimeout(timer);
  // }, []);

  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader when the link is clicked

    // Simulate loading for 3 seconds and then navigate to the link
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      router.push("/Editorial"); // Navigate to the specific link
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
        <Loader text="Loading Today's Editorial Analysis ..." /> 
        
      </div>
    );
  }

  return (

    <>


<Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan Editorial Analysis Tool</title>
        <meta name="description" content="Welcome to the UPSC Editorial Analysis Tool, your go-to resource for
            insightful analysis of daily newspaper editorials tailored to
            benefit UPSC aspirants. Our cutting-edge AI technology is designed
            to dissect and decode editorials authored by experts, offering a
            comprehensive understanding of diverse perspectives on crucial
            topics." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan editorial analysis tool",
              "description": "Welcome to the UPSC Editorial Analysis Tool, your go-to resource for
              insightful analysis of daily newspaper editorials tailored to
              benefit UPSC aspirants. Our cutting-edge AI technology is designed
              to dissect and decode editorials authored by experts, offering a
              comprehensive understanding of diverse perspectives on crucial
              topics.",
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
              Editorial
              <span className="text-purple-600 italic"> Analysis </span>
              for UPSC Aspirants
            </h2>
          </div>

          <p className="mb-4" style={{ marginTop: "30px" }}>
            Welcome to the UPSC Editorial Analysis Tool, your go-to resource for
            insightful analysis of daily newspaper editorials tailored to
            benefit UPSC aspirants. Our cutting-edge AI technology is designed
            to dissect and decode editorials authored by experts, offering a
            comprehensive understanding of diverse perspectives on crucial
            topics. Whether you're preparing for the Civil Services Examination
            or aiming to stay informed about pressing issues, our tool empowers
            you with the knowledge and critical thinking skills needed to excel
            in your UPSC journey. Dive into the world of editorial analysis and
            unlock the wisdom within the words.
          </p>
          <p className="mb-4">
            <p
              style={{ color: "#1f5156", fontWeight: "bold", fontSize: "18px" }}
            >
              Now you can get editorial analysis at just one click in under 10
              seconds . With the precision of AI
            </p>
            <br></br>
            <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
              Isn't it amazing ?
            </p>
            <br></br>
            So let's try out our premuiun product EditorialAnalysis for UPSC .
          </p>

          <p className="mb-2" style={{ fontSize: "12px" }}>
            *While out AI tool will give the most precise response on the web ,
            it can one's in a while distract from heavy traffic on our website .
            So , in this case please wait a minute for new response .
          </p>

          <div className="flex justify-center items-center h-full">
            <Link
              href="/Editorial"
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

          <h4 className="text-2xl font-bold mb-4">
            {" "}
            How Does the UPSC Editorial Analysis Tool Work?{" "}
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Summarization:</strong> Our tool provides concise and
              well-structured summaries of editorials, distilling the key
              arguments, viewpoints, and recommendations. This simplifies the
              understanding of complex issues and saves valuable time.
            </li>
            <li className="mb-2">
              <strong>Contextualization::</strong> We provide historical context
              and background information related to the editorial's subject
              matter. This contextualization aids in building a holistic
              understanding of the topic, crucial for UPSC exam preparation.
            </li>
            <li className="mb-2">
              <strong>Critical Analysis:</strong> Our tool breaks down the
              editorial's arguments, identifies the author's perspective, and
              highlights the strengths and weaknesses of the arguments
              presented. This critical analysis fosters independent thinking and
              helps aspirants form their own opinions.
            </li>
            <li className="mb-2">
              <strong>Vocabulary Enhancement:</strong> Editorials often contain
              advanced vocabulary. Our tool identifies and explains challenging
              terms, enriching your vocabulary while ensuring you grasp the
              editorial's nuances.
            </li>
            <li className="mb-2">
              <strong>Cross-Referencing:</strong> We link editorials on related
              topics, enabling aspirants to explore different viewpoints and
              connect the dots between various issues.
            </li>
          </ul>

          <h4 className="text-2xl font-bold mb-4">
            Benefits of Our AI-Powered Editorial Analysis:
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Time Efficiency:</strong> Save time by accessing
              well-structured editorial summaries and analysis, allowing you to
              focus on other aspects of your UPSC preparation.
            </li>
            <li className="mb-2">
              <strong>Accuracy & Precision:</strong> Our AI system is trained on
              a vast dataset of UPSC-relevant content, ensuring that it picks
              out articles and points that are most likely to benefit you in
              your preparation.
            </li>
            <li className="mb-2">
              <strong>In-Depth Understanding:</strong> Gain a deep understanding
              of complex issues, thanks to our contextualization and critical
              analysis features.
            </li>
            <li className="mb-2">
              <strong>Diverse Perspectives:</strong> Explore a range of
              perspectives presented by different editorial authors, helping you
              develop a well-rounded understanding of various subjects.
            </li>
            <li className="mb-2">
              <strong>Independent Thinking:</strong> Our tool promotes
              independent thinking by encouraging you to critically evaluate
              arguments and form your own opinions.
            </li>
            <li className="mb-2">
              <strong>Vocabulary Enrichment:</strong> Enhance your vocabulary
              and language skills, a valuable asset for the UPSC examination.
            </li>
          </ul>

          <h4 className="text-2xl font-bold mb-4">
            Start Your UPSC Journey with Us
          </h4>

          <p className="mb-4">
            Are you ready to embark on your UPSC journey armed with the
            knowledge, insights, and critical thinking skills required to
            succeed? Dive into the world of editorial analysis with our UPSC
            Editorial Analysis Tool and unlock your full potential. Stay
            informed, stay prepared, and excel in the Civil Services
            Examination. Your path to success starts here.
          </p>

          <p className="mb-4">
            Isn't it incredible how technology can simplify the daunting task of
            UPSC preparation?
          </p>

          <p className="mb-4">
            Now's the time to elevate your UPSC preparation strategy. Try out
            our premium product - <strong>EditoralAnalysis for UPSC</strong> -
            and let AI be your companion in your journey to cracking one of
            India's toughest exams.
          </p>
          <div className="flex justify-center items-center h-full">
            <Link
              href="/Editorial"
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

export default EditorialTool;
