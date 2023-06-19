import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylesheets/header.css";
import menu from "../assets/menu.svg";
import MenuModal from "./MenuModal";

function Header() {
  const location = useLocation();
  const [path, setPath] = useState(useLocation().pathname);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false);

  const handleToggleMenu = () => {
    console.log("Button clicked");
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        console.log("small screen");
        setShowMenuBtn(true);
      } else {
        console.log("large screen");
        setShowMenuBtn(false);
      }
    };

    // Set initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <header>
      <div className="header-left">
        <p>
          <Link to={"/"}>COURAGE AGABI</Link>
        </p>
      </div>
      <div className="header-right">
        {showMenuBtn ? (
          <div>
            <MenuModal isActive={toggleMenu} buttonHandler={handleToggleMenu} />
            <div className="header-menu">
              <button onClick={handleToggleMenu}>
                <img src={menu} className="header-menu-image" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Link to={"/"}>
              <p
                className={`header-link ${
                  path === "/" ? "header-active-link" : ""
                }`}
              >
                Work
              </p>
            </Link>
            <Link to={"/contact"}>
              <p
                className={`header-link ${
                  path === "/contact" ? "header-active-link" : ""
                }`}
              >
                Contact
              </p>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
