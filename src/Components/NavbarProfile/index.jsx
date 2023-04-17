import {
  faBuilding,
  faMailBulk,
  faBell,
  faRightFromBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import img from "../../Assets/Home/imgSection2.png";
import { useState, useEffect } from "react";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const NavbarProfile = ({ id }) => {
  const [login, setLogin] = useState("");
  const [profile, setProfile] = useState([]);
  const [role, setRole] = useState("");
  const router = useRouter();

  console.log(profile);

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
    setProfile(localStorage.getItem("id"));
    setRole(localStorage.getItem("role"));
    console.log(localStorage.getItem("id"));
  });

  // const [item, setItem] = useState(['']);

  const clearLocal = () => {
    localStorage.clear();
    router.push("/");
  };

  // useEffect(() => {
  //     const localLength = localStorage.getItem('user');
  //     if (!localLength) {
  //         console.log(localLength);
  //     } else {
  //         setItem(localLength)
  //     }

  // }, []);

  return (
    <>
      {login > 0 ? (
        <nav className="navbar bg-light shadow navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href={"/LandingPage"}>
              <FontAwesomeIcon
                icon={faEarlybirds}
                style={{ marginRight: "10px", fontSize: 25, color: "#5E50A1" }}
              />
              <span className="fw-bolder" style={{ fontSize: 25 }}>
                HeyDay
              </span>
            </Link>
            <button
              className={`navbar-toggler ${style.navbarToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-brands fa-xing"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-grid d-lg-block ms-lg-auto mt-4 mt-md-0">
                <Link
                  href={"/Login"}
                  className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`}
                  type="button"
                >
                  Masuk
                </Link>
                <Link
                  href={"/Register"}
                  className={`btn btn-outline-success me-md-2 me-0 ${style.btn1}`}
                  type="button"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar bg-light navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href={"/"}>
              <FontAwesomeIcon
                icon={faEarlybirds}
                style={{ marginRight: "10px", fontSize: 25, color: "#5E50A1" }}
              />
              <span className="fw-bolder" style={{ fontSize: 25 }}>
                HeyDay
              </span>
            </Link>
            <button
              className={`navbar-toggler ${style.navbarToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-brands fa-xing"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="ms-lg-auto mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end">
                <button className={`me-5 ${style.message}`}>
                  <FontAwesomeIcon icon={faMailBulk} />{" "}
                </button>
                <button className={`me-5 ${style.notif}`}>
                  <FontAwesomeIcon icon={faBell} />{" "}
                </button>
                <div className="btn-group dropdown-center">
                  <Link href={`#`} className={style.profile}>
                    <Image
                      className={`${style.img} img-fluid`}
                      src={profile?.image}
                      width={50}
                      height={50}
                      alt="photo"
                    />
                  </Link>
                  <button
                    type="button"
                    className={`dropdown-toggle  dropdown-toggle-split ${style["dropdown-toggle-split"]} ${style.toggleSplit}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className={`dropdown-menu ${style.drop}`}>
                    <li>
                      <Link
                        className="dropdown-item"
                        href={"/Login"}
                        onClick={clearLocal}
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                      </Link>
                    </li>
                    {role === "recruiter" ? (
                      <li>
                        <Link
                          className="dropdown-item"
                          href={`/EditRecruiter/${profile}`}
                        >
                          <FontAwesomeIcon icon={faGear} /> Edit Profile
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          className="dropdown-item"
                          href={`/EditWorker/${profile}`}
                        >
                          <FontAwesomeIcon icon={faGear} /> Edit Profile
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarProfile;
