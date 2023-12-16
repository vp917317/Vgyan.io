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
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title>About us - Vgyan.io</title>
        <meta name="description" content="At the heart of our mission lies the steadfast commitment to
                empower individuals of all backgrounds with the essential
                knowledge and an array of powerful tools indispensable for
                triumphing in the realm of competitive examinations. We are
                relentless in our pursuit of rendering learning not only
                accessible but also remarkably efficient and profoundly
                effective." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "About Us - Vgyan.io",
              "description": "At the heart of our mission lies the steadfast commitment to
              empower individuals of all backgrounds with the essential
              knowledge and an array of powerful tools indispensable for
              triumphing in the realm of competitive examinations. We are
              relentless in our pursuit of rendering learning not only
              accessible but also remarkably efficient and profoundly
              effective.",
              "publisher": {
                "@type": "Organization",
                "name": "vgyan.io", // Replace with your website's name
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://imgtr.ee/images/2023/09/23/0ab9e1d72544a7035e90772385108976.jpeg" 
                }
              }
            }
          `}
        </script>

      </Head>
    <Nav bgColor="#f08080" />
    <Skills />
    <Footer/>
    </>
  )
}
