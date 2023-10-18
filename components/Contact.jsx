import React, { useState } from "react";
import Loader from "./Loader"; // Ensure your loader component is correctly imported
import { Link } from "react-router-dom";


function ContactUs() {
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // State to manage loader visibility

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show the loader
    //https://bot1-394316.et.r.appspot.com/contact
    try {
      const response = await fetch(
        "https://bot1-394316.et.r.appspot.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        setIsSent(true);
        setFormData({
          // Reset the form
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsSent(false); // Resetting the isSent after 3 seconds
        },6000);
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
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
        <Loader text="We are saving your details ..." />
      </div>
    );
  }

  if (isSent) {
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
        <h2 style={{ color: "purple", fontSize: "24px", fontWeight: "bold" }}>
          Thank You for contacting us , Will get back to you soon ..
        </h2>
      </div>
    );
  }

  return (
   
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-8" >
    <div className="relative py-3 sm:max-w-xl sm:mx-auto" >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
        <div className="text-center pb-6">
          <h1 className="text-3xl">Contact Us!</h1>
          <p className="text-red-300">
            *Fill up the form below or send direct email at - <strong>contact@vgyan.io</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{display:'flex' , justifyContent:'center' , flexDirection:'column' , alignItems:'center'}}>
          {/* Config */}
          <input
            className="shadow mb-4 appearance-none border rounded-3xl w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="shadow mb-4 appearance-none border rounded-3xl w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="shadow mb-4 appearance-none border rounded-3xl w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Subject"
            name="_subject"
            value={formData._subject}
            onChange={handleChange}
            required
          />
          <textarea
            className="shadow mb-4 min-h-0 appearance-none border rounded-3xl h-64 w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ height: '121px' }}
          />
          <input
            className="cursor-pointer float-left shadow bg-purple-600 hover:bg-indigo-700 text-white w-[50%] sm:w-half font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send ➤" style={{borderRadius:'20px' , height:'45px'}}
          />
        </form>
      </div>
    </div>
  </div>
  );
}

export default ContactUs;