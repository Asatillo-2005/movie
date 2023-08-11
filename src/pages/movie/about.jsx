import { useEffect, useState } from "react"
import "./about.scss"
import { NavLink as Link } from "react-router-dom"
import vector from "../../assets/svg/movie-vector.svg"
import star1 from "../../assets/svg/movie-star1.svg"



function About() {

    const [getData, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie")
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    let data = getData

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <section className="section-movie">
            <div className="container">
                <div className="about-box">
                    <div className="about-container">
                        {
                            data?.map((item, index) => {
                                
                                console.log(item);
                                return (
                                    <div className="content">
                                        <Link to={`/movie_inner/${item.id}`} a={index} ><img className="content-img" src={item.img} alt="error" /> </Link>
                                        <div className="name-year-time-status">
                                            <div className="name-year">
                                                <p className="content-name">{item.name.slice(0, 15)}</p>
                                                <span className="content-year">{item.year}</span>
                                            </div>
                                            <div className="quality-time-status">
                                                <p className="content-qualty">{item.quality}</p>
                                                <div className="status111">
                                                <span className="content-time-status"> <img src={vector} alt="error" /> {item.time} min </span>
                                                <span className="content-status"> <img src={star1} alt="error" /> {item.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>

    )
}

export default About