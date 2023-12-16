import React , {useEffect , useState} from "react";
import Nav from "../components/Nav";
import Link from 'next/link';
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import "../styles/News.css";
import { useRouter } from "next/router";
import '../styles/index.css'


function NewspaperA() {
 
  // const [isLoading , setisLoading] = useState(true);

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
  
    // Simulate loading for 3 seconds
    setTimeout(() => {
      // Navigate to the specific link first
      router.push("/NewspaperAnalysis");
  
      // After navigation is complete, hide the loader
      setTimeout(() => {
        setIsLoading(false);
      }, 0); // Use a very short delay (e.g., 0 milliseconds) to ensure it runs after navigation
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
        <Loader text="Loading Today's Analysis ..." /> 
        
      </div>
    );
  }

  
  return (
    <>
  
  <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan Newspaper Analysis Tool</title>
        <meta name="description" content="Now you can get newspaper analysis ( daily current affairs )for UPSC  at just one click in under 10 seconds . With the precision of AI . Isn't it great ? So let's try out our premuiun product NewspaperAnalysis for UPSC ." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan Newspaper Analysis Tool",
              "description": "Now you can get newspaper analysis ( daily current affairs )for UPSC  at just one click in under 10 seconds . With the precision of AI . Isn't it great ? So let's try out our premuiun product NewspaperAnalysis for UPSC .",
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
    {/* {isLoading ? (<Loader text="Loading" time="3000" />) : ( */}
    
      
      
      <div
        className="p-8 bg-gray-100 rounded-lg shadow-md"
        style={{ marginTop: "10px" }}
      >
        <div className="curvedUnderline">
          <h2 className="text-3xl font-bold mb-4" style={{ margin: 0 }}>
            Newspaper
            <span className="text-purple-600 italic"> Analysis </span>
            for UPSC Aspirants
          </h2>
        </div>

        <p className="mb-4" style={{ marginTop: "30px" }}>
          Keeping up with daily news is a crucial aspect of UPSC preparation.
          With the vast amount of information published every day, it becomes
          challenging to discern what's essential for the exam. Our Newspaper
          Analysis tool, powered by AI, simplifies this task by analyzing daily
          news and highlighting the most relevant topics for UPSC aspirants.
        </p>
        <p className="mb-4">
          <p style={{ color: "#1f5156", fontWeight: "bold", fontSize: "18px" }}>
            Now you can get newspaper analysis ( daily current affairs ) at just
            one click in under 10 seconds . With the precision of AI
          </p>
          <br></br>
          <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
            Isn't it great ?
          </p>
          <br></br>
          So let's try out our premuiun product NewspaperAnalysis for UPSC .
        </p>

        <p className="mb-2" style={{ fontSize: "12px" }}>
          *While out AI tool will give the most precise response on the web , it
          can one's in a while distract from heavy traffic on our website . So ,
          in this case please wait a minute for new response .
        </p>

         <div className="flex justify-center items-center h-full">
          <Link 
            href="/NewspaperAnalysis"
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
          Benefits of Our AI-Powered Newspaper Analysis:
        </h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Instant Insights:</strong> No more hours spent pouring over
            multiple newspapers. Get a comprehensive analysis at just one click,
            delivered in under 10 seconds.
          </li>
          <li className="mb-2">
            <strong>Accuracy & Precision:</strong> Our AI system is trained on a
            vast dataset of UPSC-relevant content, ensuring that it picks out
            articles and points that are most likely to benefit you in your
            preparation.
          </li>
          <li className="mb-2">
            <strong>Regular Updates:</strong> As the UPSC syllabus and current
            affairs evolve, so does our AI. It constantly learns from new data,
            ensuring you always receive the most up-to-date information.
          </li>
          <li className="mb-2">
            <strong>Saves Time & Energy:</strong> Focus more on understanding
            and internalizing content rather than searching for it. The hours
            you save can be invested in revising or exploring other essential
            areas.
          </li>
        </ul>

        <h4 className="text-2xl font-bold mb-4">Why Trust Our Tool?</h4>

        <p className="mb-4">
          Our team of experienced educators and tech professionals have come
          together to create a product that bridges the gap between traditional
          UPSC preparation methods and the need for quick, efficient learning in
          today's fast-paced world. We believe in continuous improvement, and
          your feedback plays an essential role in the tool's ongoing
          refinement.
        </p>

        <p className="mb-4">
          Isn't it incredible how technology can simplify the daunting task of
          UPSC preparation?
        </p>

        <p className="mb-4">
          Now's the time to elevate your UPSC preparation strategy. Try out our
          premium product - <strong>NewspaperAnalysis for UPSC</strong> - and
          let AI be your companion in your journey to cracking one of India's
          toughest exams.
        </p>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/NewspaperAnalysis"
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
      
      <Footer />
    </>
  );
}

export default NewspaperA;
