import "./header.scss"
import {NavLink as Link} from "react-router-dom"

function Header(){
    return(
        <section className="section-header">
            <div className="container">
                <header className="header-box">
                  <nav className="header-nav">
                       <ul className="header-link">
                            <li className="aheader-links">
                              <Link className={"navlink"} to={"/"}>Home</Link>
                            </li>
                            <li className="aheader-links">
                              <Link className={"navlink"} to={"/about"}>About</Link>
                            </li>
                            <li className="aheader-links">
                              <Link className={"navlink"} to={"/info"}>Info</Link>
                            </li>
                            <li className="aheader-links">
                              <Link className={"navlink"} to={"/user"}>user</Link>
                            </li>
                       </ul>
                  </nav>
                </header>
            </div>
        </section>
    )
}
export default Header