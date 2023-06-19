import { useEffect, useState } from "react";
import close from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";

function MenuModal({ isActive, buttonHandler }) {
  const location = useLocation();
  const [path, setPath] = useState(useLocation().pathname);

  const [backgroundColor, setBackgroundColor] = useState("initial");
  const [visibility, setVisibility] = useState("hidden");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setBackgroundColor(isActive ? "white" : "");
    setVisibility(isActive ? "visible" : "hidden");
    setOpacity(isActive ? 1 : 0);
  }, [isActive]);

  return (
    <div
      className="menu-modal"
      style={{
        backgroundColor,
        visibility,
        opacity,
        transition: "all 0.25s ease",
      }}
    >
      <div className="menu-modal-close">
        <button onClick={buttonHandler}>
          <img src={close} className="header-menu-image" />
        </button>
      </div>
      <div className="menu-modal-inner">
        <Link to={"/"} className="menu-modal-link">
          <button onClick={buttonHandler}>
            <p className={`${path === "/" ? "menu-modal-active-link" : ""}`}>
              Work
            </p>
          </button>
        </Link>
        <Link to={"/contact"} className="menu-modal-link">
          <button onClick={buttonHandler}>
            <p
              className={`${
                path === "/contact" ? "menu-modal-active-link" : ""
              }`}
            >
              Contact
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuModal;
