import React from "react";
import img from "../../Assets/Home/imgSection5.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../../pages/Home/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSkillByUser } from "@/redux/actions/skillAction";

const CardWorker = ({ name, id, jabatan, address, i, photo }) => {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState([{}]);

  useEffect(() => {
    dispatch(getSkillByUser(setSkill, id));
  }, [dispatch, id]);

  return (
    <>
      <li key={i} className="list-group-item py-3">
        <div className="row">
          <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
            <Image
              className="img-thumbnail"
              crossOrigin="anonymouse"
              width={80}
              height={80}
              src={photo}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "100%",
              }}
              alt=""
            ></Image>
          </div>
          <div className={`col-lg-9 col-9 col-sm-10 ${style.body}`}>
            <h4>{name}</h4>
            <span>{jabatan}</span>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {address}
            </p>
            <div className={`d-flex ${style.listSkills}`}>
              {skill?.slice(0, 5).map((listskills, i) => (
                <>
                  <p key={i} className={`btn text-nowrap me-2 ${style.skills}`}>
                    {listskills?.name}
                  </p>
                </>
              ))}
            </div>
          </div>
          <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
            <Link
              href={`/Profile/${id}`}
              className={`btn text-wrap  btn-block ${style.seeProfil}`}
            >
              <FontAwesomeIcon icon={faEye} /> Profil
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardWorker;
