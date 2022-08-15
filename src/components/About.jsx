import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation()
        return(
          
          <section id="ts-features" class="ts-features call-to-action-box no-padding">


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

            <div class="row">
                <div class="col-lg-6">
                  <div class="ts-intro">
                      <h2 class="into-title">{t("into-title")}</h2>
                      <h3 class="into-sub-title">{t("into_sub_title")}</h3>
                      <p> {t("about_intro")}</p>
                  </div>
        
                  <div class="gap-20"></div>
        
                  <div class="row">
                      <div class="col-md-6">
                        <div class="ts-service-box">
                            <span class="ts-service-icon">
                              <i class="fas fa-trophy"></i>
                            </span>
                            <div class="ts-service-box-content">
                              <h3 class="service-box-title">{t("icon1")}</h3>
                            </div>
                        </div>
                      </div>
        
                      <div class="col-md-6">
                        <div class="ts-service-box">
                            <span class="ts-service-icon">
                              <i class="fas fa-sliders-h"></i>
                            </span>
                            <div class="ts-service-box-content">
                              <h3 class="service-box-title">{t("icon2")}</h3>
                            </div>
                        </div>
                      </div>
                  </div>
        
                  <div class="row">
                      <div class="col-md-6">
                        <div class="ts-service-box">
                            <span class="ts-service-icon">
                              <i class="fas fa-thumbs-up"></i>
                            </span>
                            <div class="ts-service-box-content">
                              <h3 class="service-box-title">{t("icon3")}</h3>
                            </div>
                        </div>
                      </div>
        
                      <div class="col-md-6">
                        <div class="ts-service-box">
                            <span class="ts-service-icon">
                              <i class="fas fa-users"></i>
                            </span>
                            <div class="ts-service-box-content">
                              <h3 class="service-box-title">{t("icon4")}</h3>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
        
                <div class="col-lg-6 mt-4 mt-lg-0">
                  <h3 class="into-sub-title">{t("values")}</h3>
                  <p>{t("value-intro")}</p>
        
                  <div class="accordion accordion-group" id="our-values-accordion">
                      <div class="card">
                        <div class="card-header p-0 bg-transparent" id="headingOne">
                            <h2 class="mb-0">
                              <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  {t("card1-title")}
                              </button>
                            </h2>
                        </div>
                      
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                            <div class="card-body">
                            {t("card1")}
        
                            </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header p-0 bg-transparent" id="headingTwo">
                            <h2 class="mb-0">
                              <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              {t("card2-title")}
                              </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                            <div class="card-body">
                            {t("card2")}
                            </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header p-0 bg-transparent" id="headingThree">
                            <h2 class="mb-0">
                              <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              {t("card3-title")}
                              </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                            <div class="card-body">
                            {t("card3")}
                            </div>
                        </div>
                      </div>
                  </div>
                  
        
                </div>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=+966558308361&text=%20%20%20%20"
 class="float" target="_blank">
<i class="fab fa-whatsapp my-float"></i>
</a>
        </section>
        )
    }

export default About;