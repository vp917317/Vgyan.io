import React ,{useState } from 'react';
import "../styles/News.css";
import Link from 'next/link';

function ToolsNav({headline}) {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const today = new Date();
    const formattedDate = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;
    const [htmlData, setHtmlData] = useState("");

  return (
    <div
          className="w-full flex justify-between items-center px-4 py-2"
          style={{ justifyContent: "space-evenly" }}
        >
          {/* Left side - can be empty if you have nothing to put here */}
          <div className="text-black font-bold text-xl"> VGyan</div>

          <h1
            className="text-white text-3xl font-bold tracking-wider text-center curved-underline"
            style={{
              marginTop: "15px",
              fontWeight: "bold",
              fontSize: "26px",
              color: "#48d1cc" /* Example style */,
            }}
          >
           {headline}
          </h1>

          {/* Right side - website name */}
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownVisible(!isDropdownVisible)}
              className="text-white font-bold text-xl px-2 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              style={{ marginRight: "1px" }}
            >
              ☰
            </button>
            {isDropdownVisible && (
              <div className="absolute right-10 mt-2 w-56 bg-white text-black shadow-lg rounded z-10">
                <Link href="/" className="block mx-4 py-2 hover:bg-gray-400">
                  Home
                </Link>
                <Link href="/NewspaperAnalysis" className="block mx-4 py-2 hover:bg-gray-400">
                  Newspaper Analysis 
                </Link>
                <Link
                  href="/Editorial"
                  className="block mx-4 py-2 hover:bg-gray-400"
                >
                  Editorial Analysis
                </Link>
                <Link
                  href="/Notes"
                  className="block mx-4 py-2 hover:bg-gray-400"
                >
                  General Science Notes
                </Link>
                <Link
                  href="/SmartNotes"
                  className="block mx-4 py-2 hover:bg-gray-400"
                >
                  Smart Notes
                </Link>
                <Link
                  href="/SmartStudent"
                  className="block mx-4 py-2 hover:bg-gray-400"
                >
                  Smart StudentAI
                </Link>
              </div>
            )}
          </div>
        </div>
  )
}

export default ToolsNav
