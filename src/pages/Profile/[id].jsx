import LayoutLoginProfile from "@/Components/LayoutPage/LayoutLoginProfil";
import SectionPage from "@/Components/Section/LandingPage/SectionPage";
import Image from "next/image";
import style from "./style.module.css";
import img from "../../Assets/Home/imgSection3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPenFancy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../Assets/Profile/porto-1.png";
import MainProfile from "@/Components/LayoutProfile/MainProfile";
import LeftSide from "@/Components/LayoutProfile/LeftSide";
import RightSide from "@/Components/LayoutProfile/RightSide";
import Experience from "../../Assets/Profile/Experience/Icon.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Delete from "@/Components/ModalDelete/Delete";
import Edit from "@/Components/ModalEdit";
import { useDispatch } from "react-redux";
import { getDetailWorker } from "@/redux/actions/workerActions";
import { getSkillByUser } from "@/redux/actions/skillAction";
import { getPortfolioByUser } from "@/redux/actions/portfolioAction";
import { getExperienceByUser } from "@/redux/actions/experienceAction";
import {
  useDeleteExperienceMutation,
  useGetExperienceByIdQuery,
} from "@/features/experience/experienceApi";
import {
  useDeletePortfolioMutation,
  useGetPortfolioByIdQuery,
} from "@/features/portfolio/portfolioApi";
import { useGetWorkerByIdQuery } from "@/features/worker/workerApi";
import {
  useDeleteSkillsMutation,
  useGetSkillsByIdQuery,
} from "@/features/skill/skillsApi";
import { useGetWorkerProfileQuery } from "@/features/auth/Worker/authApi";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isShow, setIsShow] = useState(false);
  const [role, setRole] = useState("");

  // Get datas
  const { data: worker } = useGetWorkerByIdQuery(id);
  const { data: skill } = useGetSkillsByIdQuery(id);
  const { data: portfolio, isLoading } = useGetPortfolioByIdQuery(id);
  const { data: experience } = useGetExperienceByIdQuery(id);
  const { data: workerDetail } = useGetWorkerProfileQuery();
  const [
    deletePortfolio,
    {
      isSuccess: isSuccessDeletePortfolio,
      isLoading: isLoadingDeletePortfolio,
      isError: isErrorDeletePortfolio,
    },
  ] = useDeletePortfolioMutation();
  const [
    deleteExperience,
    {
      isSuccess: isSuccessDeleteExp,
      isLoading: isLoadingDeleteExp,
      isError: isErrorDeleteExp,
    },
  ] = useDeleteExperienceMutation();
  const [deleteSkill] = useDeleteSkillsMutation();

  // Handle Delete Experience and Portfolio

  const handlePortfolioDelete = async (id) => {
    await deletePortfolio(id);
  };
  const handleExpDelete = async (id) => {
    await deleteExperience(id);
  };
  const handleDeleteSkill = async (id) => {
    await deleteSkill(id);
  };

  // --------------------------------------

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [role]);

  // Edited portfolio

  useEffect(() => {
    if (isLoadingDeletePortfolio || isLoadingDeleteExp)
      return showLoading("Please wait ...");
    if (isSuccessDeletePortfolio || isSuccessDeleteExp)
      return successLoading(
        Swal.fire({
          title: "Success delete portfolio",
          icon: "success",
        })
      );
    if (isErrorDeletePortfolio || isErrorDeleteExp)
      return failedLoading("Error deleting portfolio");
  }, [
    isLoadingDeletePortfolio,
    isSuccessDeletePortfolio,
    isErrorDeletePortfolio,
    isLoadingDeleteExp,
    isSuccessDeleteExp,
    isErrorDeleteExp,
  ]);

  return (
    <LayoutLoginProfile id={id}>
      <div className={`${style.strapBrand} `}>
        <p className="container"></p>
      </div>
      <SectionPage embedSection={style.sectionProfile}>
        <MainProfile>
          <LeftSide>
            <div className="profileDesc">
              <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                <Image
                  crossOrigin="Anonymous"
                  width={150}
                  height={150}
                  alt="photo"
                  src={worker?.image === null ? "" : worker?.image}
                  className="img-thumbnail rounded-circle"
                ></Image>
              </div>
              <h5 className="fw-bolder">{worker?.name}</h5>
              <span className={style.work}>{worker?.jobdesk}</span>
              <p className={style.address}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginRight: "10px" }}
                />
                {worker?.address}
              </p>
              <span className={style.worker}>{worker?.jobdesk}</span>
              <p className={style.bio}>{worker?.description}</p>
              <div className="hireButton d-grid">
                <button className={`btn ${style.btn}`}> Hire</button>
              </div>
            </div>
            <div className="skills pt-5">
              <h5 className="fw-bolder">Skills</h5>
              <div className="listSkills">
                {skill?.map((item) => (
                  <>
                    <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>
                      {item.name}
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="contact">
              <h5 className="fw-bolder pt-5 pb-2">Contact</h5>
              <p>
                <FontAwesomeIcon icon={faGithub} /> github.rezaldhoarmadhani.com{" "}
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
          </LeftSide>

          <RightSide>
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
                <div className="row g-2">
                  {portfolio?.map((ex, i) => (
                    <div
                      className="col-12 col-md-6 col-lg-4 text-center"
                      key={i}
                    >
                      <div
                        className="px-3 pt-3 border bg-body-tertiary position-relative"
                        onMouseEnter={() => setIsShow(i)}
                        onMouseLeave={() => setIsShow(false)}
                      >
                        {isShow === i && (
                          <div className={`buttonAction `}>
                            <Edit
                              embedClass={style.btnEditPortfolio}
                              id={ex.id}
                            >
                              <FontAwesomeIcon
                                icon={faPenFancy}
                                style={{
                                  fontSize: "15px",
                                  padding: "5px 6px 2px 6px",
                                }}
                              ></FontAwesomeIcon>
                            </Edit>
                            <Delete
                              embedClass={style.btnDeletePortfolio}
                              id={ex.id_portfolio}
                              onclick={() =>
                                handlePortfolioDelete(ex?.id_portfolio)
                              }
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                  fontSize: "15px",
                                  padding: "5px 6px 2px 6px",
                                }}
                              ></FontAwesomeIcon>
                            </Delete>
                          </div>
                        )}

                        <Image
                          crossOrigin="Anonymous"
                          alt="photo"
                          src={ex?.image === undefined ? img1 : ex?.image}
                          width={100}
                          height={100}
                          className={style.img}
                        />
                        <p className="pt-4">{ex.name_portfolio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Seller"
                role="tabpanel"
                aria-labelledby="pills-Seller-tab"
                tabindex="0"
              >
                <div className="row jusitfy-content-center">
                  <div className="col-12 text-center">
                    {experience?.map((ex, i) => (
                      <div
                        className={`${style.rowExperience} row `}
                        key={i}
                        onMouseEnter={() => setIsShow(i)}
                        onMouseLeave={() => setIsShow(false)}
                      >
                        <div className="col-2">
                          <Image
                            className="img-fluid imgExperience"
                            src={
                              ex?.image === undefined ? Experience : ex?.image
                            }
                            width={80}
                            height={80}
                            alt=""
                          ></Image>
                        </div>
                        <div className="col-9 text-start position-relative">
                          <p className="fw-bolder">{ex.jobdesk}</p>
                          <p className>{ex.company_name}</p>
                          <div className="d-flex">
                            <p className="text-secondary mb-4">
                              {ex.date_start}
                            </p>
                            <span className="mx-2"> - </span>
                            <p className="text-secondary mb-4">{ex.date_end}</p>
                          </div>
                          <p className={style.exDescription}>
                            {ex.description}
                          </p>
                          <hr />

                          {isShow === i && (
                            <div className={`buttonAction `}>
                              <Edit
                                embedClass={style.btnEditPortfolio}
                                id={ex.id}
                              >
                                <FontAwesomeIcon
                                  icon={faPenFancy}
                                  style={{
                                    fontSize: "15px",
                                    padding: "5px 6px 2px 6px",
                                  }}
                                ></FontAwesomeIcon>
                              </Edit>
                              <Delete
                                embedClass={style.btnDeletePortfolio}
                                id={ex.id}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  style={{
                                    fontSize: "15px",
                                    padding: "5px 6px 2px 6px",
                                  }}
                                ></FontAwesomeIcon>
                              </Delete>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RightSide>
        </MainProfile>
      </SectionPage>
    </LayoutLoginProfile>
  );
};

export default Profile;
