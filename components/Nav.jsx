import React, { useState } from 'react'
//import { Link } from 'react-router-dom';
import log from '../public/images/log.jpeg';
import "../styles/NavBar.css";
import Link from 'next/link';


function Nav({bgColor , tool}) {

  const style = {
    backgroundColor: bgColor
};
    const [click, setClick] = useState(false);
    const navClassName = tool === "tool" ? "navbar-tool" : "navbar";
    const iconClassName = tool === "tool" ? "icon-tool" : "nav-icon";
    const logoClassName = tool === "tool" ? "logo-tool" : "nav-logo";

  const handleClick = () => setClick(!click);
  return (
    <nav className={navClassName} style={style}>
    <div className="nav-container">
        <Link exact href="/" className={logoClassName}>
        VGyan.io
        {/* <i className="fas fa-code"></i> */}
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            exact
            href="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            exact
            href="/NewspaperAnalysis"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            NewspaperAnalysis
          </Link>
        </li>
        <li className="nav-item">
          <Link
            exact
            href="/Editorial"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            EditorialAnalysis
          </Link>
        </li>
        <li className="nav-item">
          <Link
            exact
            href="/Notes"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            GS Notes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            exact
            href="/SmartNotes"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Smart Notes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            exact
            href="/SmartStudent"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Smart Student-AI
          </Link>
        </li>
      </ul>
      <div className={iconClassName} onClick={handleClick}>
        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
        <button
  // className={`text-yellow-400 text-3xl cursor-pointer lg:block hidden`}
  // onClick={(e) => setDurum(!durum)}
>
  ☰
</button>
      </div>
    </div>
  </nav>

   )
}

export default Nav
