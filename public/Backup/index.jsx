import LayoutPage from "@/Components/LayoutPage/LayoutPage";
import SectionPage from "@/Components/Section/LandingPage/SectionPage";
import Image from "next/image";
import style from "./style.module.css";
import img from "../../Assets/Home/imgSection.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../Assets/Profile/porto-1.png";

const Profile = () => {
  return (
    <LayoutPage>
      <div className={`${style.strapBrand} `}>
        <p className="container"></p>
      </div>
      <SectionPage embedSection={style.sectionProfile}>
        <div class="row justify-content-between">
          <div class={`col-10 col-md-3 ${style.leftSide}`}>
            <div className="profileDesc">
              <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                <Image
                  src={img}
                  className="img-thumbnail rounded-circle"
                ></Image>
              </div>
              <h5 className="fw-bolder">Rezaldho Armadhani</h5>
              <span className={style.work}>Front End Developer</span>
              <p className={style.address}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginRight: "10px" }}
                />{" "}
                Lorem Ipsum
              </p>
              <span className={style.worker}>Information Technology Staff</span>
              <p className={style.bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
              <div className="hireButton d-grid">
                <button className={`btn ${style.btn}`}> Hire</button>
              </div>
            </div>
            <div className="skills pt-5">
              <h5 className="fw-bolder">Skills</h5>
              <div className="listSkills">
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                  Python
                </p>
              </div>
            </div>
            <div className="contact">
              <h5 className="fw-bolder pt-5 pb-2">Contact</h5>
              <p>
                <FontAwesomeIcon icon={faGithub} /> github.RezaldhoArmadhani.com{" "}
              </p>
              <p>
                <FontAwesomeIcon icon={faFacebook} /> Rezaldho Armadhani
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} /> Rezaldho Armadhani
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} /> Rezaldho Armadhani
              </p>
            </div>
          </div>
          <div class={`col-8 col-md-8  ${style.rightSide}`}>
            <ul
              className="nav nav-pills mb-3 justify-content-start"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="navpills-home active"
                  id="pills-Customer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Customer"
                  type="button"
                  role="tab"
                  aria-controls="pills-Customer"
                  aria-selected="true"
                >
                  Portofolio
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="navpills-home"
                  id="pills-Seller-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Seller"
                  type="button"
                  role="tab"
                  aria-controls="pills-Seller"
                  aria-selected="false"
                >
                  Pengalaman Kerja
                </a>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-Customer"
                role="tabpanel"
                aria-labelledby="pills-Customer-tab"
                tabindex="0"
              >
                <div class="row g-2">
                  <div class="col-12 col-md-6 col-lg-4 text-center">
                    <div class="p-3 border bg-light">
                      <Image src={img1} className={style.img} />
                      <p>Project management web</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 text-center">
                    <div class="p-3 border bg-light">
                      <Image src={img1} className={style.img} />
                      <p>Project management web</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 text-center">
                    <div class="p-3 border bg-light">
                      <Image src={img1} className={style.img} />
                      <p>Project management web</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Seller"
                role="tabpanel"
                aria-labelledby="pills-Seller-tab"
                tabindex="0"
              >
                <div class="row jusitfy-content-center">
                  <div class="col-12 text-center">
                    <div class="p-3 border ">
                      <span>Cant find anything 😥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionPage>
    </LayoutPage>
  );
};

export default Profile;
