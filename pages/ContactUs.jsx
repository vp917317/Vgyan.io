import React, { useState } from "react";
import Loader from "../components/Loader"; // Ensure your loader component is correctly imported
import '../styles/index.css'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contac from "@/components/Contact";


function ContactUs() {
 
  return (
   <>
   
<Head>
        {/* Set the page title and meta description for SEO */}
        <title>Contact Us - Vgyan.io </title>
        <meta name="description" content="Get in touch with us - Vgyan.io" />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Contact Us - vgyan.io",
              "description": " Get in touch with us - Vgyan.io",
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
   <Nav bgColor="red"/>
   <Contac/>
   <Footer/>
   </>
    
  );
}

export default ContactUs;