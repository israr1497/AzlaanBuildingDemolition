import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation()
        return(
            <div>
           <section id="project-area" class="project-area solid-bg call-to-action-box no-padding">
  <div class="container">

  <div class="action-style-box mb-3 mt-3">
        <div class="row align-items-center">
          <div class="col-md-8 text-center text-md-left">
              <div class="call-to-action-text">
                <h1 class="action-title">{t("contractor")}</h1>
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
      <div class="col-lg-12">
        <h2 class="section-title">{t("excellent")}</h2>
        <h3 class="section-sub-title">{t("recent-proj")}</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-12">


        <div class="row shuffle-wrapper">
          <div class=" shuffle-sizer"></div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/buildingdemolish.jpg" aria-label="project-img">
                <img class="img-fluid" placeholder='pump demolition' src="assets/images/project-img/buildingdemolish.jpg" alt="هدم المباني مجانا مقابل سكراب شغل في كل السعودية" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish1")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish1-exp")}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/shiwal-demolition.jpg" aria-label="project-img" >
                <img class="img-fluid" placeholder='building demolish' src="assets/images/project-img/shiwal-demolition.jpg" alt="هدم مباني، قصر ، استراحة ، مخالفات وترحيل مجاني مقابل سكراب. أفضل شركةهدم مباني مجانية" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish2")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish2-exp")}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/tower-demolition.jpg" aria-label="project-img">
                <img class="img-fluid" placeholder='tower domolish' src="assets/images/project-img/tower-demolition.jpg" alt="demolition contractor in riyadh saudi arabia" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish3")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish3-exp")}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/pump-demolition.jpg" aria-label="project-img">
                <img class="img-fluid" placeholder='scrap collection' src="assets/images/project-img/pump-demolition.jpg" alt="Free demolition for scrap" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish4")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish4-exp")}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/home-demolish.jpg" aria-label="project-img">
                <img class="img-fluid" placeholder='hospital demolish' src="assets/images/project-img/home-demolish.jpg" alt="villas demolition" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish5")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish5-exp")}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;residential&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href="assets/images/project-img/pump-demolish.jpg" aria-label="project-img">
                <img class="img-fluid" placeholder='home demolition' src="assets/images/project-img/pump-demolish.jpg" alt="old building demolition" />
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="">{t("demolish6")}</a>
                  </h3>
                  <p class="project-cat">{t("demolish6-exp")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="col-12">
        <div class="general-btn text-center">
          <a class="btn btn-primary" href="projects.html">View All Projects</a>
        </div>
      </div> */}

    </div>


    <div class="row text-center mt-5">
        <div class="col-12">
          <h2 class="section-title">Demolition Projects</h2>
          <h3 class="section-sub-title">{t("recent-proj")}</h3>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="latest-post">
              <div class="latest-post-media">
                <a href="" class="latest-post-img">
                    <img loading="lazy" class="img-fluid" placeholder="pump demolition" src="assets/images/project-img/building-demolish.jpg" alt="Azlan building demolition contractor" />
                </a>
              </div>
              <div class="post-body">
                <h4 class="post-title">
                    <a href="" class="d-inline-block">{t("recent-proj-1")}</a>
                </h4>
                <div class="latest-post-meta">
                    <span class="post-item-date">
                      <i class="fa fa-clock-o"></i> July 20, 2022
                    </span>
                </div>
              </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="latest-post">
              <div class="latest-post-media">
                <a href="" class="latest-post-img">
                    <img loading="lazy" class="img-fluid" placeholder="demolish villa" src="assets/images/project-img/buildingdemolish.jpg" alt="0558308361  هدم مباني" />
                </a>
              </div>
              <div class="post-body">
                <h4 class="post-title">
                    <a href="" class="d-inline-block disabled">{t("recent-proj-2")}</a>
                </h4>
                <div class="latest-post-meta">
                    <span class="post-item-date">
                      <i class="fa fa-clock-o"></i> June 17, 2021
                    </span>
                </div>
              </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="latest-post">
              <div class="latest-post-media">
                <a href="" class="latest-post-img">
                    <img loading="lazy" class="img-fluid" placeholder="Building demolition" src="assets/images/project-img/shiwal-demolition.jpg" alt="هدم مباني" />
                </a>
              </div>
              <div class="post-body">
                <h4 class="post-title">
                    <a href="" class="d-inline-block disabled">{t("recent-proj-3")}</a>
                </h4>
                <div class="latest-post-meta">
                    <span class="post-item-date">
                      <i class="fa fa-clock-o"></i> Aug 13, 2019
                    </span>
                </div>
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

export default Projects;