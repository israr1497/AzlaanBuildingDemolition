import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () =>   {

  const { t } = useTranslation()
        return(
            <div>
                <footer id="footer" class="footer bg-overlay">
    <div class="footer-main">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-6 footer-widget footer-about">
            <h3 class="widget-title">{t("into-title")}</h3>
            <h4 class="text-warning">{t("project_title")}</h4>
            {/* <img loading="lazy" width="200px" class="footer-logo" src="images/footer-logo.png" alt="Constra" /> */}
            <p>{t("about-def")}</p>
            <div class="footer-social">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100008279029496" aria-label="Facebook"><i
                      class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/Im_israr_Khan?t=WMUGbojhatoR3hBVXdFk8Q&s=08" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://www.facebook.com/profile.php?id=100008279029496" aria-label="Instagram"><i
                      class="fab fa-instagram"></i></a></li>
                <li><a  href="https://api.whatsapp.com/send?phone=+966558308361&text=%20%2020%" aria-label="Github" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
            <h3 class="widget-title">{t("working-h")}</h3>
            <div class="working-hours">
            {t("working-def")}
              <br/><br /> Monday - Friday: <span class="text-right">08:00 - 16:00 </span>
              <br /> Saturday: <span class="text-right">08:00 - 15:00</span>
              <br /> Sunday and holidays: <span class="text-right">09:00 - 12:00</span>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
            <h3 class="widget-title">{t("services_link")}</h3>
            <ul class="list-arrow">
              <li><a href="https://www.demolitioncontractor.qa/">Building Demolition</a></li>
              <li><a href="https://www.demolitioncontractor.qa/">Villas Demolition</a></li>
              <li><a href="https://www.demolitioncontractor.qa/">Duilding Waste disposal</a></li>
              <li><a href="https://www.demolitioncontractor.qa/">resthouses Demolition</a></li>
              <li><a href="https://www.demolitioncontractor.qa/">Demolish Homes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

        <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
          <button class="btn btn-primary" title="Back to Top">
            <i class="fa fa-angle-double-up"></i>
          </button>
        </div>
  </footer>
            </div>
        )
    }


export default Footer;