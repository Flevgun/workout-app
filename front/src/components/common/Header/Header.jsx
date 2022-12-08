import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router-dom";

import arrowImage from "../../../images/header/arrow.svg";
import userImage from "../../../images/header/user.svg";
import styles from "./Header.module.scss";

const Header = ({ backCallback }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.header}>
      {location.pathname !== '/' ? (
        <button type="button" onClick={backCallback}>
          <img src={arrowImage} alt="Auth" />
        </button>
      ) : (
        <button type="button" onClick={() => {
          navigate("/auth");
        }}>
          <img src={userImage} alt="Auth" />
        </button>
      )}

      <Hamburger />
    </header>
  );
};

export default Header;
