import React, {useState, useEffect} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMenu , IoClose  }  from "react-icons/io5";
import "../components/Navbar.css";

function Navbar(){
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" }
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");


  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (name) => {
    setActiveItem(name); 
  };

  useEffect(() => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="navbar-container">
      <p>PS</p>
      <button className="menu-button" onClick={handleMenuClick}>
        {menuOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </button>
      <ul className={`nav-item ${menuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <AnchorLink 
              className="nav-link "
              href={item.href}
              onClick={() => handleItemClick(item.name)}>
                <span className={`nav-link ${activeItem === item.name ? "active" : ""}`}>
                  {item.name}
                </span>
                
              </AnchorLink>
          </li>
        ))}
      </ul>
      <button className="nav-button"><a href="https://linkedin.com/in/pari-sharma-92173b2a3" target="_blank" rel="noopener norefferrer">Connect with me</a></button>
    </div>
  );
}

export default Navbar;