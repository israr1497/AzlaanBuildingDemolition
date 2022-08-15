
import { useTranslation } from "react-i18next";

const Home = () =>  {
  const { t } = useTranslation()
        return(

<div>

<section class="call-to-action-box no-padding">
<div class="banner-carousel banner-carousel-2 mb-0" id="home-section">
  <div class="banner-carousel-item">
    <div class="container">
        <div class="box-slider-content">
          <div class="box-slider-text">
              <h2 class="box-slide-title">{t("title")}</h2>
              <h1 class="box-slide-sub-title">{t("subtitle")}</h1>
              <p class="box-slide-description">{t("title_desc")}</p>
              <p>
                <a href="tel:0558308361" class="slider btn btn-success s-hidden">{t("contact_us")}</a>
              </p>
          </div>
        </div> 
    </div>
  </div>
</div>



  <div class="container">
    <div class="action-style-box">
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
  </div>
</section>

<section id="ts-features" class="ts-features">
  <div class="container">
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
</section>

<section id="facts" class="facts-area dark-bg">
  <div class="container">
    <div class="facts-wrapper">
        <div class="row">
          <div class="col-md-3 col-sm-6 ts-facts">
              <div class="ts-facts-img">
                <img loading="lazy" placeholder='project completed' src="assets/images/icon-image/fact1.png" alt="هدم المباني مجانا مقابل سكراب شغل في كل السعودية" />
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="100">0</span></h2>
                <h3 class="ts-facts-title">Total Projects</h3>
              </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div class="ts-facts-img">
                <img loading="lazy" placeholder='staff members' src="assets/images/icon-image/fact2.png" alt="residential demolition أفضل شركةهدم مباني مجانية" />
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="50">0</span></h2>
                <h3 class="ts-facts-title">Staff Members</h3>
              </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img loading="lazy" placeholder='work hour' src="assets/images/icon-image/fact3.png" alt="هدم مباني، قصر ، استراحة ، مخالفات وترحيل مجاني مقابل سكراب. أفضل شركةهدم مباني مجانية " />
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="1000">0</span></h2>
                <h3 class="ts-facts-title">Hours of Work</h3>
              </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img loading="lazy" placeholder='demolition experience' src="assets/images/icon-image/fact4.png" alt="demolition contractor in riyadh saudi arabia" />
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="4">0</span></h2>
                <h3 class="ts-facts-title">Countries Experience</h3>
              </div>
          </div>

        </div> 
    </div>
  </div>
  
</section>

<section id="ts-service-area" class="ts-service-area pb-0">
  <div class="container">
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
                <img loading="lazy" placeholder='building demolition' src="assets/images/icon-image/service-icon1.png" alt="demolition services in riyadh saudi arabia" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise1")}</h3>
                <p>{t("specalise1-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='structure demolition' src="assets/images/icon-image/service-icon2.png" alt="scrap metal buyer" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise2")}</h3>
                <p>{t("specalise2-def")} </p>
              </div>
          </div>
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='interior demolition' src="assets/images/icon-image/service-icon3.png"  alt="Free demolition for scrap" />
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
                <img loading="lazy" placeholder='concrete demolition' src="assets/images/icon-image/service-icon4.png" alt="villas demolition" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise4")}</h3>
                <p>{t("specalise4-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='waste disposal' src="assets/images/icon-image/service-icon5.png" alt="هدم مباني مجانابالرياض | مقاول هدم بالرياض | هدم المباني مجانا بالرياض" />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">{t("specalise5")}</h3>
                <p>{t("specalise5-def")}</p>
              </div>
          </div>

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img loading="lazy" placeholder='safety management' src="assets/images/icon-image/service-icon6.png" alt="هدم المباني مجانا. هدم مباني مجانا. مقاول هدم بالرياض من أفضل الشركات المتخصصة بكافة اعمال الهدم , نهدم المباني والمجمعات السكنيه" />
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

<section id="project-area" class="project-area solid-bg">
  <div class="container">
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
                <img class="img-fluid" placeholder='pump demolition' src="assets/images/project-img/buildingdemolish.jpg" alt="Azlan building demolition contractor" />
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
                <img class="img-fluid" placeholder='building demolish' src="assets/images/project-img/shiwal-demolition.jpg" alt="0558308361  هدم مباني" />
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
                <img class="img-fluid" placeholder='tower domolish' src="assets/images/project-img/tower-demolition.jpg" alt="هدم المباني مجانا. هدم مباني مجانا. مقاول هدم بالرياض من أفضل الشركات المتخصصة بكافة اعمال الهدم , نهدم المباني والمجمعات السكنيه" />
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
                <img class="img-fluid" placeholder='scrap collection' src="assets/images/project-img/pump-demolition.jpg" alt="هدم المباني مجانا بالرياض - هدم مباني مجانا- مقاول هدم بالرياض" />
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
                <img class="img-fluid" placeholder='hospital demolish' src="assets/images/project-img/home-demolish.jpg" alt="هدم المباني مجانا بالرياض - هدم مباني مجانا- مقاول هدم بالرياض" />
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
                <img class="img-fluid" placeholder='home demolition' src="assets/images/project-img/pump-demolish.jpg" alt="هدم المباني مجانا مقابل سكراب شغل في كل السعودية" />
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
  </div>
  
</section>



<section class="subscribe no-padding">
  <div class="">
    <div class="row">
        <div class="col-md-4">
          <div class="subscribe-call-to-acton">
              <h3>{t("help")}</h3>
              <h4>0558308361</h4>
          </div>
        </div>

        <div class="col-md-8">
          <div class="ts-newsletter row align-items-center">
            <h3 class="box-slide-sub-title">{t("contractor")}</h3>
            
          </div>
        </div>

    </div>
  </div>
  
</section>

<section id="news" class="news">
  <div class="container">
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
                    <img loading="lazy" class="img-fluid" placeholder="pump demolition" src="assets/images/project-img/building-demolish.jpg" alt="Building Demolition in Riyadh free for Scrap" />
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
                    <img loading="lazy" class="img-fluid" placeholder="demolish villa" src="assets/images/project-img/buildingdemolish.jpg" alt="هدم جميع انواع المباني" />
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
                    <img loading="lazy" class="img-fluid"  placeholder="Building demolition" src="assets/images/project-img/shiwal-demolition.jpg" alt="Azlan Building Demolition in riyadh saudi arabia" />
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

</div>

            
        )
    }


export default Home;