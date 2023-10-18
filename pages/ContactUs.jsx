import React, { useState } from "react";
import Loader from "../components/Loader"; // Ensure your loader component is correctly imported
import '../styles/index.css'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contac from "@/components/Contact";


function ContactUs() {
 
  return (
   <>
   <Nav bgColor="red"/>
   <Contac/>
   <Footer/>
   </>
    
  );
}

export default ContactUs;