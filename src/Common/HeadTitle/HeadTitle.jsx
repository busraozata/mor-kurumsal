import React from "react";
import "./HeadTitle.scss";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai"
/* useLocation */
import { useTranslation } from "react-i18next";

export default function HeadTitle(props) {
  const { t } = useTranslation();

  /* const location = useLocation(); */
  return (
    <section
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sub-banner d-flex align-items-end justify-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <h1>{location.pathname.replace("-", " ").split("/")[1]}</h1> */}
            <h1>{props.title}</h1>
            <div className="d-flex align-items-center justify-content-start">
              <Link to="/">{t("homePage")}</Link>
              <AiOutlineRight />
              <Link to="#">
                {/*   {location.pathname.replace("-", " ").split("/")[1]} */}
                {props.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
