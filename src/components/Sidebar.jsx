import React from "react";
import {  EmailIcon, TelegramIcon, LinkedinIcon } from "react-share";
import { FaGithub } from "react-icons/fa";
import "../components/Sidebar.css";
 
function Sidebar(){
  const links = [
    { href: "mailto:sharmapari10004@gmail.com", Icon: EmailIcon },
    { href: "https://t.me/pari_sharma2004", Icon: TelegramIcon },
    { href: "https://github.com/Parii-10", Icon: FaGithub },
    { href: "https://linkedin.com/in/pari-sharma-92173b2a3", Icon: LinkedinIcon }
  ];
  return (
    <div className="sidebar-container">
      {links.map(({ href, Icon }, index) => (
      <p key={index}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon size={32} round={true} />
        </a>
      </p>
      ))}
      
      <div ></div>
    </div>
  );
}

export default Sidebar;