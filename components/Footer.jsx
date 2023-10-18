import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if we're on the client side before accessing window
    if (typeof window !== "undefined") {
      // Listen for window resize events
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Update based on your breakpoint
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };

      // Initial check for screen size
      setIsSmallScreen(window.innerWidth < 768); // Update based on your breakpoint
    }
  }, []);

  return (
    <>
      <div className="footer bg-[#171717]">
        <div
          className={`${
            isSmallScreen
              ? "wrap flex flex-col justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4"
              : "wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4"
          }`}
          style={{ padding: 10 }}
        >
          <h1 className="text-3xl">VGyan.io</h1>
          <h4 className="text-1xl">copywright @ VenusRam 2023</h4>
          <h4>Made with ❤️ in Bharat </h4>
          <div className="flex gap-4 cursor-pointer">
            <a href="https://whatsapp.com/channel/0029Va9QyBAC6ZvnJeIF071a" target="_blank" style={{ color: "green" }}>
              {/* <i className="fa-brands fa-whatsapp border-[1px] border-green p-2 rounded-[100%] hover:bg-white hover:text-green"></i> */}
              <FontAwesomeIcon icon={faWhatsapp} className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black" />
            </a>
            {/* Other social icons */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
