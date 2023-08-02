import "./movie-inner.scss"
import share from "../../assets/img/movie-inner-share.png"
import star from "../../assets/svg/movie-inner-star.svg"
import img12 from "../../assets/svg/movie-inner-img12.svg"
import calendar from "../../assets/svg/movie-inner-calender.svg"
import watch from "../../assets/svg/movie-inner-watch.svg"
import play from "../../assets/svg/movie-inner-play.svg"
import back from "../../assets/svg/movie-inner-back.svg"
import { useEffect, useState, useRef } from "react"
import { Logger } from "sass"
import { useParams, NavLink as Link } from "react-router-dom"
import ReactPlayer from "react-player"



function Movie_inner(a) {

    const elModal = useRef()
    const elInner = useRef()

    const [data, setData] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${movieId}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    let item = data

    console.log(item);

    return (
        <section className="section-movie-inner">
            <img className="bg-img" src={item.bg} alt="error" />
            <div className="container">
                <div className="movie-inner-box">
                    <Link className={"navlink1"} to={"/about"}><img src={back} alt="error" /> Back</Link>
                    <ul className="movie-inner-link">
                        <li className="movie-inner-links">
                            <img className="movie-inner-links-imgs" src={item.img} alt="error" />
                        </li>
                        <li className="movie-inner-links2">
                            <h3 className="movie-inner-text">new episod <h2 className="movie-inner-name">{item?.name}</h2> </h3>
                            <div className="movie-inner-other-things">
                                <p className="movie-inner-film">Movie</p>
                                <div className="movie-inner-quality">{item.quality}</div>
                                <p className="movie-inner-film-types">{item.genre}</p>
                                <span className="movie-inner-time"> <img src={watch} alt="error" />{item.time}</span>
                                <span className="movie-inner-year"><img src={calendar} alt="error" /> {item.year}</span>
                            </div>
                            <div className="movie-inner-tizer">
                                <span className="movie-inner-share"><img src={share} alt="error" /> Share</span>
                                <span className="movie-inner-rating">Rate The Show  <span className="movie-inner-status"><img src={star} alt="error" /> {item.rating}</span> </span>
                                <button className="movie-inner-btn" onClick={(()=>{
                                    elModal.current.classList.add("modal-open")
                                })}>  <img src={play} alt="error"/> Play Now</button>

                            </div>
                            
                            <p className="movie-inner-about">Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character in Free City who is initially unaware that he is a video game character.</p>
                        </li>
                    </ul>
                    <div className="modal" ref={elModal} onClick={((evt)=>{
                                if(evt.target.matches(".modal")){
                                    elModal.current.classList.remove("modal-open")
                                    console.log("true");
                                    elInner.current.style.display = "none"
                                }
                                else{
                                    console.log("false");
                                }
                            })}>
                                <div className="inner-modal" >
                                <ReactPlayer url={item.url}  ref={elInner} />
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}

export default Movie_inner