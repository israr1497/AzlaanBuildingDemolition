import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Header = () => {
	const { t } = useTranslation(["common", "home"]);
        return(
          <div>
           
  <header id="navbar_top" class="header-one">
  

  { 
    <div class="site-navigation ">
    <div class="container">
        <div class="row">
          <div class=" col-lg-4 col-md-4 ">
                <a class="" href="/">
                  <h2 class="text-warning float-left main-title">{t("project_title")}</h2>
                </a>
                <button class="navbar-toggler ChangeToggle navbar-dark p-0 float-right border-light d-md-none" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon float-md-right"></span>
                </button>
          </div>
          <div class="col-lg-8 col-md-8">
              <nav class="navbar navbar-expand-md navbar-dark p-0 ">
                <div id="navbar-collapse collapsibleNavbar" class="collapse navbar-collapse text-center">
                    <ul class="nav navbar-nav mr-auto w-100 justify-content-end">
                      <li class="nav-item dropdown active">
                        <Link class="nav-link dropdown-toggle" to="/">
                         {t("home_link")}
                        </Link>  
                      </li>

                      <li class="nav-item dropdown ">
                        <Link class="nav-link dropdown-toggle" to="/about">
                         {t("about_link")}
                        </Link>
                      </li>
              
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="/services">
                          {t("services_link")}
                        </Link>
                      </li>
              
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="/projects">
                          {t("projects_link")}
                        </Link>
                      </li>
              
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="/team">
                          {t("teams_link")}
                        </Link>
                      </li>
                      
                    </ul>
                </div>
                 
    
              </nav>
          </div>
          
        </div>
        
        

    </div>
    

  </div>
   }
  
          </header>
            </div>
        )
    }


export default Header;