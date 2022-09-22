import logo from "./logo.jpg"
import "./navbar.css"
import { Link } from "react-router-dom"

export const Navbar = () => {



    return <div id="sidebar-wrapper">
        <div className="side-top">
            <div className="logo-sidebar">
                <Link to={'/'} className="link">
                    <img src={logo} alt="imageee" />
                </Link>
            </div>
            <div className="sidebar-name">
                <Link className="link" to={'/'}><span className="target">LINO</span> Tattoo</Link>
            </div>
            <ul className="sidebar-nav">
                <li>
                    <Link className="link" to={'/'}>
                        Начало
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>За нас</Link>
                </li>
                <li>
                    <Link to={'/gallery'}>Галерия</Link>
                </li>
                <li>
                    <Link to={'/prices'}>Цени</Link>
                </li>

                <li>
                    <Link to={'/contacts'}>Контакти</Link>
                </li>
            </ul>
        </div>
    </div>
    {/* End Sidebar-wrapper */ }
}