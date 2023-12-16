import React ,{ useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/Notes.css";
import '../styles/index.css'
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Head from 'next/head';
import Nav from "../components/Nav";

function SmartNotes() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChatStarted, setHasChatStarted] = useState(false);
  const [isLoaderLoading, setisLoaderLoading] = useState(true);

  const chatContainerRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Define your breakpoint

  // useEffect(() => {
  //   // Listen for window resize events
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 768); // Update based on your breakpoint
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Listen for window resize events
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };

      // Set the initial state based on window width
      setIsSmallScreen(window.innerWidth < 768);

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = process.env.API_ENDPOINT_SCHOOLNOTES//"https://bot1-394316.et.r.appspot.com/schoolNotes";
    console.log(message);
    setHasChatStarted(true);
    setIsLoading(true);

    axios
      .post(url, { message }) // Sending the message as a string within an object
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data },
        ]); // Assuming your response contains a 'message' field
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const parseHTMLString = (htmlString) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, "text/html");

    // Loop through elements and apply inline styles
    parsedHtml.querySelectorAll("h2").forEach((element) => {
      element.classList.add("circle-heading");
      element.classList.add("circle-container");
    });

    parsedHtml.querySelectorAll("p").forEach((element) => {
      element.style.fontSize = "16px"; // Example font size
      element.style.lineHeight = "1.5"; // Example line height
      element.style.marginBottom = "15px";
      element.classList.add("circle-paragraph");
    });

    parsedHtml.querySelectorAll("h4", "h3").forEach((element) => {
      element.style.fontSize = "18px"; // Example font size
      element.style.marginTop = "10px"; // Example margin
      element.style.backgroundColor = "#BE91E8";
      element.classList.add("circle-keyHeading");
    });

    parsedHtml.querySelectorAll("ul").forEach((ulElement) => {
      // Apply list-style-type style to the <ul> element to display bullets
      ulElement.style.listStyleType = "disc"; // You can use 'disc', 'circle', or 'square' for different bullet types
      ulElement.style.paddingTop = "10px";
      ulElement.style.marginBottom = "10px";
      ulElement.classList.add("circle-keyPoints");
    });

    return (
      <div dangerouslySetInnerHTML={{ __html: parsedHtml.body.innerHTML }} />
    );
  };

  const handleExampleMessage = (message) => {
    setInputValue(message);
    setHasChatStarted(true); // set chat to started
    sendMessage(message);
  };

  useEffect(() => {
    // Simulate loading for 3 seconds and then set isLoading to false
    const timer = setTimeout(() => {
      setisLoaderLoading(false);
    }, 3000);

    // Cleanup the timer if the component unmounts or the effect re-runs
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Smart Notes - Vgyan.io  </title>
        <meta name="description" content="SmartNotes AI, your intelligent note-taking assistant. You can generate comprehensive notes on any topic, whether
              it's from school NCERT books, college materials like MBA,
              Engineering, CA, CS, and more." />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Smart Notes - Vgyan.io ",
              "description": "SmartNotes AI, your intelligent note-taking assistant. You can generate comprehensive notes on any topic, whether
              it's from school NCERT books, college materials like MBA,
              Engineering, CA, CS, and more.",
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
      {/* {isLoaderLoading ? (
        <Loader text="Fetching the Smart Notes Machine" time="4000" />
      ) : ( */}
        <div
          className="mainNotes"
          style={{
            background: "#ffe4e1",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <Sidebar /> */}
          {isSmallScreen ? (
            <Nav bgColor="rgb(31 41 55)" tool="tool" />
          ) : (
            <Sidebar />
          )}
          {/* <div className="p-2">
           <h1 className="text-center font-bold text-2xl">GS-Notes</h1>
         </div> */}
          <div
            className={`${
              isSmallScreen
                ? "mx-auto px-4 sm:px-6 max-w-[92%] screen-xxl"
                : "container mx-auto max-w-[800px] mt-2 smallScreen"
            }`}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div className="flex flex-col h-screen bg-white border border-black-300 rounded-lg shadow-lg">
              {/* <div className="p-2">
           <h1 className="text-center font-bold text-2xl">GS-Notes</h1>
         </div> */}
              <div
                className="flex-grow p-6 overflow-y-auto"
                ref={chatContainerRef}
                style={{ flex: 1, overflowY: "auto" }}
              >
                {hasChatStarted ? (
                  chatLog.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      } mb-4`}
                    >
                      <div
                        className={`${
                          message.type === "user"
                            ? "bg-blue-500"
                            : "bg-gray-800"
                        } text-${
                          message.type === "user" ? "white" : "black"
                        } rounded-lg px-5 py-3 max-w-2/3`}
                      >
                        {parseHTMLString(message.message)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    className="h-full flex flex-col justify-center items-center"
                    style={{
                      justifyContent: "initial",
                      height: isSmallScreen ? "300px" : "500px",
                    }}
                  >
                    {/* This space intentionally left blank if there's no chat yet */}

                    <div className="text-gray-400 mb-4">VGyan.IO</div>
                    <p className="text-gray-400 mb-4">
                      SmartNotes AI, your intelligent note-taking assistant.
                    </p>
                    <text className="text-blue-400 mb-4">
                      You can generate comprehensive notes on any topic, whether
                      it's from school NCERT books, college materials like MBA,
                      Engineering, CA, CS, and more.
                    </text>
                    <text className="text-blue-400 mb-4">
                      Type your topic below and get detailed notes or try the most aksed topic given below .
                    </text>
                  </div>
                )}

                <div className="p-4 flex flex-col">
                  {!hasChatStarted && (
                    <>
                      <p style={{ marginBottom: 10 }}> Most asked topics  </p>
                      <div className="p4 flex flex-row">
                        <button
                          onClick={() =>
                            handleExampleMessage("Nuclear fission and fusion")
                          }
                          className="text-grey-500 block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300 mb-4"
                          style={{ border: "1px solid", margin: "5px" }}
                        >
                          Nuclear Fission & Fusion ➤
                        </button>
                        <button
                          onClick={() => handleExampleMessage("DSA Notes")}
                          className="text-grey-500 block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300 mb-4"
                          style={{ border: "1px solid", margin: "5px" }}
                        >
                          DSA Notes ➤
                        </button>
                        <button
                          onClick={() =>
                            handleExampleMessage("Different Types of Microbes")
                          }
                          className="text-grey-500 block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300 mb-4"
                          style={{ border: "1px solid", margin: "5px" }}
                        >
                          Different Types of Microbes ➤
                        </button>
                        {/* Add more example buttons here if required */}
                      </div>
                    </>
                  )}
                </div>

                {isLoading && (
                  <div
                    key={chatLog.length}
                    className="flex flex-col justify-start mb-4"
                  >
                    {/* <div className="bg-gray-300 rounded-lg p-4 text-black max-w-2/3"> */}
                    <text
                      style={{
                        fontWeight: "bold",
                        color: "purple",
                        marginBottom: "5px",
                      }}
                    >
                      Creating Magic ✍️ ...{" "}
                    </text>
                    <div className="loader w-10 h-10 border-t-4 border-green-500 rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex-none p-6"
                style={{ flexShrink: 0 }}
              >
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    className="flex-grow px-4 py-2 focus:outline-none"
                    placeholder="Type your message here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 px-4 py-2 text-white font-semibold focus:outline-none hover:bg-blue-600 transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
}

export default SmartNotes;
