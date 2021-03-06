import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import { useTranslation } from "react-i18next";
import { ReactComponent as HeaderImage } from "../Images/header.svg";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="dagpengekalkulator">
      <div className="content">
        <div className="text">
          <Sidetittel>{t("HEADER.TITTEL")}</Sidetittel>
        </div>
        <div role="presentation" className="header__svgContainer">
          <HeaderImage />
        </div>
      </div>
    </div>
  );
};
export default Header;
