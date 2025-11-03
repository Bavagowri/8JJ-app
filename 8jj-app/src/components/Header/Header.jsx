import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate
import "./Header.css";
import logo from "../../images/8JJ LOGO.png";

const Header = () => {
  const navigate = useNavigate(); //Create navigate instance

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,ta,hi,kn,ml,te",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
   <header className="header">
    <div className="translate-spacer" />  {/* Left spacer */}
      <div className="logo-wrapper" onClick={() => navigate("/")}>
        <img src={logo} alt="8JJ logo" className="logo" />
      </div>
      <div className="translate-box">
        <div id="google_translate_element"></div>
      </div>
</header>

  );
};

export default Header;
