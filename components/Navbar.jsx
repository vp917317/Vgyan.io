import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Navbar() {
  const [durum, setDurum] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsDropdownOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsDropdownOpen1(false);
  };

  const handleDropdownClick1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbarcon").style.backgroundColor = "#ff1493";
      } else {
        document.querySelector(".navbarcon").style.backgroundColor = "rgb(0,0,0,0)";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <Image
          src="/images/vgyan.jpeg"
          alt="Vgyan Logo"
          width={70}
          height={70}
          className="rounded-full"
        />

<nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#DB7093]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="fa-brands border-[1px] border-black p-1 rounded-[50%] hover:bg-white hover:text-black">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="fa-brands border-[1px] border-black p-1 rounded-[50%] hover:bg-white hover:text-black">
              <AnchorLink href="#projects">Services</AnchorLink>
            </li>
            {/* <li className="fa-brands border-[1px] border-black p-1 rounded-[50%] hover:bg-white hover:text-black">
              <AnchorLink href="#skills">About us</AnchorLink>
            </li> */}
            

            <li className="fa-brands border-[0.5px] border-black p-1 rounded-[50%] hover:bg-white hover:text-black">
              <div className="relative group ">
                <button
                  id="dropdownDelayButton"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleDropdownClick}
                  //className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  className="inline-flex items-center"
                  //style={{ color:'#2f4f4f' }}
                >
                  Tools{" "}
                  <svg
                    className="w-4 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    id="dropdownDelay"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full left-0"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      <li>
                        <Link
                          href="/NewspaperAnalysis"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Newspaper Analysis
                        </Link>


                      </li>
                      <li>
                        <Link
                          href="/Editorial"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Editorial Analysis
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="Notes"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          GeneralScience Notes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/SmartNotes"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Smart Notes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/SmartStudent"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Smart StudentAI
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li className="fa-brands border-[0.5px] border-black p-1 rounded-[50%] hover:bg-white hover:text-black">
              <div className="relative group ">
                <button
                  id="dropdownDelayButton"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                  onClick={handleDropdownClick1}
                  //className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  className="inline-flex items-center"
                  //style={{ background: isDropdownOpen ? '#7FFFD4' : 'initial' }}
                >
                  About Us{" "}
                  <svg
                    className="w-4 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isDropdownOpen1 && (
                  <div
                    id="dropdownDelay"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full left-0"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      <li>
                        <Link
                          href="/AboutUs"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/PrivacyPolicy"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ContactUs"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Contact Us
                        </Link>
                      </li>
                      {/* <li>
                <a
                  href="/Smart_Notes"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Smart Notes
                </a>
              </li>
              <li>
                <a
                  href="/smartStudentAI"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Smart StudentAI
                </a>
              </li> */}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>

          <div className="icon text-lg flex gap-3  lg:gap-6 lg:my-8">
            <a
              href="https://whatsapp.com/channel/0029Va9QyBAC6ZvnJeIF071a"
              target="_blank"
              style={{ color: "white" }}
            >
              {/* <i className="fa-brands fa-whatsapp border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i> */}
              <FontAwesomeIcon icon={faWhatsapp} className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black" />

            </a>

            {/* <a href="" target="_blank" style={{color:'#7FFFD4'}}> 
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href=""
              target="_blank" style={{color:'#7FFFD4'}}
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a> */}
          </div>
          {/* <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold" style={{color:'#7FFFD4'}}>
              Let's Connect
            </button>
          </div> */}
        </nav>


        {/* <i
          onClick={() => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i> */}

        {/* <FontAwesomeIcon
  icon={faAccessibleIcon}
  className="text-white text-2xl cursor-pointer"
  onClick={() => setDurum(!durum)}
/> */}

<button
  className={`text-yellow-400 text-3xl cursor-pointer lg:block hidden`}
  onClick={(e) => setDurum(!durum)}
>
  ☰
</button>

      </div>
    </>
  );
}

export default Navbar;
