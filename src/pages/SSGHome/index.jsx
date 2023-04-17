import LayoutPage from '@/Components/LayoutPage/LayoutPage'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import React from 'react'
import style from './style.module.css'
import axios from 'axios'
import CardWorker from '@/Components/CardListWorker'

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await axios.get('http://localhost:3020/worker')

    return {
        props: {
            response: res.data,
        },
    }
}

export default function Home({ response }) {
    console.log(response);

    return (

        

    // Render posts...
    <LayoutPage>

        <div className={`${style.strapBrand} `}>
            <p className='container'>Top Jobs</p>
        </div>
        <SectionPage>
            <div className={`${style.searching} mt-4 mb-4`}>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="row py-5">
                <div className="col-12">
                    <div className="card" style={{ width: "100%" }}>
                        <ul className="list-group list-group-flush">
                            {response.map(users => (
                                <CardWorker
                                    name={users.name}
                                    address={users.place}
                                    jabatan={users.jobdesk}
                                    id={users.id}
                                />
                            ))}

                        </ul>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mb-5 mt-2">
                <div className="col-5  d-grid justify-content-center" >
                    <nav aria-label="Page navigation example">
                        <ul className={`pagination ${style.pagination}`}>
                            <li className={`page-item ${style.pageItem} me-2`}>
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item me-2"><a className="page-link" href="#">1</a></li>
                            <li className="page-item me-2"><a className="page-link" href="#">2</a></li>
                            <li className="page-item me-2">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </SectionPage>
    </LayoutPage>
    )

}