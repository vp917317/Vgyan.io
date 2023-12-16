import React, { useEffect, useState } from "react";
//import axios from "axios";
import Loader from "../components/Loader";
import "../styles/News.css";
import Footer from "../components/Footer";
import Link from "next/link";
import ToolsNav from "../components/ToolsNav";
import { collection, getDoc , doc} from 'firebase/firestore';
import firestore from '../Firebase';
import '../styles/index.css';
import Head from 'next/head';

function NewspaperAnalysis() {
  const [htmlData, setHtmlData] = useState("");
  const [isLoading, setLoading] = useState(true); // Show the loader by default

  useEffect(() => {
    // Get the current date in the format 'YYYY-MM-DD'
    const currentDate = new Date().toISOString().split('T')[0];
    const cachedData = localStorage.getItem(currentDate); // Check if cached data exists
  
    // Start loading
    setLoading(true);
  
    // If cached data exists, set it from local storage
    if (cachedData) {
      setHtmlData(cachedData);
      console.log("cached data")
      // Set a timeout to hide the loader after 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      // If cached data doesn't exist, fetch it from Firestore
      const documentRef = doc(firestore, 'test', currentDate);
  
      getDoc(documentRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data().data;
            setHtmlData(data); // Replace 'yourDataField' with the field containing your data
            localStorage.setItem(currentDate, data); // Cache the data in local storage
            console.log("ftched data")
          } else {
            console.log("No such document!");
          }
  
          // Set a timeout to hide the loader after 3 seconds
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
  
          // Set a timeout to hide the loader after 3 seconds
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
    }
  }, []);
  

 

  return (
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan Newspaper Analysis Today</title>
        <meta name="description" content="General Science Notes AI, your intelligent note-taking assistant.You can generate comprehensive notes on any topic, whether
              it's from NCERT books, or any other books , articles , topics etc.." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan Newspaper Analysis Today ",
              "description": " General Science Notes AI, your intelligent note-taking assistant.You can generate comprehensive notes on any topic, whether
              it's from NCERT books, or any other books , articles , topics etc..",
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
      {/* {isLoading ? (
        <Loader text="Loading Today's Analysis" time="3000" />
      ) : ( */}
        <div
         // className="flex flex-col justify-center items-center h-screen bg-white"
         class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl"
          style={{ background: "#ffe4e1", height: "100%" }}
        >
          <ToolsNav headline="Newspaper Analysis for Today" />
          <div
            className="article p-6 mx-auto max-w-3xl bg-gray-700 shadow-md rounded-md flex justify-center "
          >
            <div
              className="article"
              dangerouslySetInnerHTML={{ __html: htmlData }}
            />
          </div>
          
        </div>

      {/* )} */}
      <Footer />
    </>
  );
}

export default NewspaperAnalysis;
