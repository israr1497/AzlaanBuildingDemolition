import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation()
        return(
            <div>
            <section id="ts-service-area" class="ts-service-area pb-0 call-to-action-box no-padding">
  <div class="container">

  <div class="action-style-box mb-3 mt-3">
        <div class="row align-items-center">
          <div class="col-md-8 text-center text-md-left">
              <div class="call-to-action-text">
                <h1 class="action-title">{t("we_under")}</h1>
              </div>
          </div>
          <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
              <div class="call-to-action-btn">
                <a href="tel:0558308361" class="btn btn-success text-white">{t("contact_us")}</a>
              </div>
          </div>
        </div>
    </div> 

    <div class="row text-center">
        <div class="col-12">
          <h2 class="section-title">{t("specalise")}</h2>
          <h3 class="section-sub-title">{t("what")}</h3>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='building demolition' src="assets/images/icon-image/service-icon1.png" alt="هدم مباني" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise1")}</h3>
                <p>{t("specalise1-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='structure demolition' src="assets/images/icon-image/service-icon2.png" alt="هدم جميع انواع المباني" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise2")}</h3>
                <p>{t("specalise2-def")} </p>
              </div>
          </div>
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='interior demolition' src="assets/images/icon-image/service-icon3.png"  alt="مقاول هدم مباني في السعودية مقابل سكراب" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise3")}</h3>
                <p>{t("specalise3-def")}</p>
              </div>
          </div>

        </div>

        <div class="col-lg-4 text-center">
          <img loading="lazy" placeholder='demolition' class="img-fluid" src="asfsets/images/services/service-center.jpg" alt="" />
        </div>

        <div class="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='concrete demolition' src="assets/images/icon-image/service-icon4.png" alt="هدم المباني مجانا مقابل سكراب شغل في كل السعودية" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise4")}</h3>
                <p>{t("specalise4-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='waste disposal' src="assets/images/icon-image/service-icon5.png" alt="Building Demolition in Riyadh free for Scrap" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise5")}</h3>
                <p>{t("specalise5-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='safety management' src="assets/images/icon-image/service-icon6.png" alt="هدم جميع انواع المباني" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise6")}</h3>
                <p>{t("specalise6-def")}</p>
              </div>
          </div>
        </div>
    </div>

  </div>
  
</section>
<a href="https://api.whatsapp.com/send?phone=+966558308361&text=%20%20%20%20"
 class="float" target="_blank">
<i class="fab fa-whatsapp my-float"></i>
</a>                  
            </div>
        )
    }

export default Services;