import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation()
        return(
            <div>
            <section id="news" class="news call-to-action-box no-padding">
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
        <div class="col-12">
          <h2 class="section-title">{t("excellent")}</h2>
          <h3 class="section-sub-title">{t("recent-proj")}</h3>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="latest-post">
              <div class="latest-post-media">
                <a href="" class="latest-post-img">
                    <img loading="lazy" class="img-fluid" placeholder="pump demolition" src="assets/images/project-img/building-demolish.jpg" alt="أفضل شركةهدم مباني مجانية" />
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
                    <img loading="lazy" class="img-fluid" placeholder="demolish villa" src="assets/images/project-img/buildingdemolish.jpg" alt="Azlan Building Demolition free for Scrap in Riyadh" />
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
                    <img loading="lazy" class="img-fluid" placeholder="Building demolition" src="assets/images/project-img/shiwal-demolition.jpg" alt="هدم المباني مجانا مقابل سكراب شغل في كل السعودية" />
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

    {/* <div class="general-btn text-center mt-4">
        <a class="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
    </div> */}

  </div>

</section>
          
<a href="https://api.whatsapp.com/send?phone=+966558308361&text=%20%20%20%20"
 class="float" target="_blank">
<i class="fab fa-whatsapp my-float"></i>
</a>
            </div>
        )
    }

export default Team;