import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(typeof window !== 'undefined' && window.innerWidth >= 768);
  const router = useRouter();
  const currentLocation = router.pathname;

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(typeof window !== 'undefined' && window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`bg-gray-800 text-white transition-width duration-300 ${isExpanded ? 'w-70' : 'w-8'}`}>
      <div
        className={`text-center cursor-pointer p-4 ${isExpanded ? 'w-16' : 'w-12'}`}
        onClick={toggleSidebar}
      >
        {isExpanded ? (
          <i className="fas fa-arrow-left text-2xl"></i>
        ) : (
          <i className="fas fa-ellipsis-h text-1xl"></i>
        )}
      </div>
      <div className={`p-4 ${isExpanded ? 'block' : 'hidden'}`}>
        {/* Sidebar content */}
        <div className="text-2xl font-bold p-6" style={{ color: '#40e0d0', fontSize: '30px', fontStyle: 'italic' }}>
          VGyan.io
        </div>
        <nav className="px-6 py-4 space-y-2 flex flex-col mb-4">
          <Link href="/" >
            Home 🏠
          </Link>
          <Link href="/NewspaperAnalysis">
            NewsPaper Analysis 📰
          </Link>
          <Link href="/Notes">
            GS Notes 📋
          </Link>
          <Link href="/Editorial" > 
          {/* currentLocation={currentLocation} */}
            Editorial Analysis 👨🏻‍💻
          </Link>
          <Link href="/SmartNotes" >
            School Notes 📒
          </Link>
           <Link href="/SmartStudent" >
            Smart Student-AI 🌍
          </Link>
          {/* Add more pages as needed */}
        </nav>
      </div>
    </div>
  );
};

const NavLink = ({ to, currentLocation, children }) => {
  const isActive = currentLocation === to;
  return (
    <Link href={to}>
      <a className={`block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
        {children}
      </a>
    </Link>
  );
};

export default Sidebar;
