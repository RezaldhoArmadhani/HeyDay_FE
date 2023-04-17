import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className="container">
        <div className="brand">
          <div className="row mb-3">
            <div className="col-md-8 col-12">
              <FontAwesomeIcon
                icon={faEarlybirds}
                style={{ fontSize: 30, marginRight: "10px" }}
              />
              <span style={{ fontSize: 30 }}>HeyDay</span>
            </div>
          </div>
          <div className="row description">
            <div className="col-md-8 col-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                beatae eum quod dicta, blanditiis quidem, nulla fugit
                repellendus veritatis tempore ullam sint officia. Veritatis
                quibusdam quam sit! Laudantium, facilis, odit debitis
                consequatur ut expedita aliquam, molestiae perferendis sunt
                distinctio asperiores quod magnam quas eum libero ratione quis
                hic maiores! Quis?
              </p>
            </div>
          </div>
          <hr style={{ border: "1.5px solid white" }} />
          <div className="row d-flex flex-column-reverse flex-sm-row justify-content-between">
            <div className="col-12 col-md-4 text-md-start text-center ">
              <p>2020 HeyDay. All right reserved</p>
            </div>
            <div className="col-12">
              {/* <span className='me-5'>085832095871</span>
                        <span>dhimasswara08@gmail.com</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
