// pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactUs from '@/components/Contact';
import Head from 'next/head';
import AboutUs from './AboutUs';
//import { Outlet } from 'react-router-dom';
// import ReactAppWrapper from './ReactAppWrapper';
import '../styles/index.css'

function Home() {
  return (
    <>

<Head>
        {/* Set the page title and meta description for SEO */}
        <title>Vgyan.io</title>
        <meta name="description" content="All in one Exam-Tool . Welcome to Vgyan.io, where cutting-edge technology meets comprehensive exam preparation. Dive into a reservoir of up-to-date current affairs, editorial breakdowns, and in-depth notes, all curated and presented by our advanced AI. Gear up for UPSC and other competitive exams with a unique edge that keeps you a step ahead." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Vgyan.io",
              "description": "At Vigyan.io, our unwavering passion lies in harnessing the power of cutting-edge technology and its seamless integration with education, ushering in a groundbreaking era for how individuals preparing for exams approach their studies.",
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

      <Header />
      <Skills />
      <Projects />
      <ContactUs/>
      <Footer />
      {/* <ReactAppWrapper/> */}
      {/* <Outlet/> */}
    </>
  );
}

export default Home;
