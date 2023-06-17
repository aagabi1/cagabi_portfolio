import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../stylesheets/header.css";

function Header() {
  const location = useLocation();
  const [path, setPath] = useState(useLocation().pathname);
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <div className="header-left">
        <p>
          <a href="/">COURAGE AGABI</a>
        </p>
      </div>
      <div className="header-right">
        <a
          className={`header-link ${path == "/" ? "header-active-link" : ""}`}
          href="/"
        >
          Work
        </a>
        <a
          className={`header-link ${
            path == "/contact" ? "header-active-link" : ""
          }`}
          href="/contact"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
