import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import Image from 'next/image'
import style from './style.module.css'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../Assets/Profile/porto-1.png'
import MainProfile from '@/Components/LayoutProfile/MainProfile'
import LeftSide from '@/Components/LayoutProfile/LeftSide'
import RightSide from '@/Components/LayoutProfile/RightSide'
import Experience from '../../Assets/Profile/Experience/icon.png'
import axios from 'axios'
import { useRouter } from 'next/router';


export async function getServerSideProps({params}) {
    // const { data } = await axios.get(`http://localhost:3020/worker/${params.id}`);
    // const  {list} = await axios.get(`http://localhost:3020/skills/?id_user=${params.id}`);
    const data  = await axios.get(`http://localhost:3020/worker/${params.id}`);
    const list  = await axios.get(`http://localhost:3020/skills/?id_user=${params.id}`);
    const porto = await axios.get(`http://localhost:3020/portfolio/?id_user=${params.id}`);
    const expe = await axios.get(`http://localhost:3020/experience/?id_user=${params.id}`);


    if (!data || !list || !porto || !expe) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            worker: data.data, skill: list.data, portfolio : porto.data, experience : expe.data,
        },
    };
}

const Profile = ({worker, skill, portfolio, experience}) => {
    // const router = useRouter();
    // const { id } = router.query
    // console.log(worker);
    // console.log(skill);

    if (!worker || !skill || !portfolio || !experience) {
        return <h1>Data not found.</h1>;
    }

    return (
        <LayoutLoginProfile>
            <div className={`${style.strapBrand} `}>
                <p className='container'></p>
            </div>
            <SectionPage embedSection={style.sectionProfile}>
                <MainProfile>
                    <LeftSide>
                        <div className="profileDesc">
                            <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                                <Image src={img} className='img-thumbnail rounded-circle'></Image>
                            </div>
                            <h5 className='fw-bolder'>{worker.name}</h5>
                            <span className={style.work}>{worker.jobdesk}</span>
                            <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{worker.place}</p>
                            <span className={style.worker}>{worker.jobdesk}</span>
                            <p className={style.bio}>{worker.Bio}</p>
                            <div className="hireButton d-grid">
                                <button className={`btn ${style.btn}`}> Hire</button>
                            </div>
                        </div>
                        <div className="skills pt-5">
                            <h5 className="fw-bolder">Skills</h5>
                            <div className="listSkills">
                                {skill?.map(item => (
                                    <>
                                        <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>{item.skill}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="contact">
                            <h5 className="fw-bolder pt-5 pb-2">Contact</h5>
                            <p><FontAwesomeIcon icon={faGithub} /> github.dhimasswara.com </p>
                            <p><FontAwesomeIcon icon={faFacebook} /> Dhimas Pandu Yogaswara</p>
                            <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                            <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                        </div>

                    </LeftSide>

                    <RightSide>

                        <ul className="nav nav-pills mb-3 justify-content-start" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className='navpills-home active' id="pills-Customer-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer"
                                    aria-selected="true">Portofolio</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className='navpills-home' id="pills-Seller-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller"
                                    aria-selected="false">Pengalaman Kerja</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                                <div className="row g-2">
                                    {portfolio.map(ex => (
                                    <div className="col-12 col-md-6 col-lg-4 text-center">
                                        <div className="px-3 pt-3 border bg-body-tertiary">
                                            <Image src={img1} className={style.img} />
                                            <p className='pt-4'>{ex.porfolio}</p>
                                        </div>
                                    </div>
                                    ))}

                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                                <div className="row jusitfy-content-center">
                                    <div className="col-12 text-center">
                                        {experience?.map(ex => (
                                        <div className={`${style.rowExperience} row `}>
                                            <div className="col-2">
                                                <Image className='img-fluid' src={Experience} alt=""></Image>
                                            </div>
                                            <div className="col-9 text-start">
                                                <p className='fw-bolder'>{ex.jobdesk}</p>
                                                <p className>{ex.workplace}</p>
                                                <p className='text-secondary mb-4'>{ex.date}</p>
                                                <p className={style.exDescription}>{ex.desc}</p>
                                                <hr />
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