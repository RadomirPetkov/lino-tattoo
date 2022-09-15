import logo from "./logo.jpg"
import "./navbar.css"


export const Navbar = () =>{



    return <div id="sidebar-wrapper">
    <div className="side-top">
        <div className="logo-sidebar">
            <a href="index.html">
                <img src={logo} alt="imageee" />
            </a>
        </div>
        <div className="sidebar-name">
            <a href="index.html"><span className="target">LINO</span> Tattoo</a>
        </div>
        <ul className="sidebar-nav">
            <li>
                <a className="active" href="index.html">
                    Начало
                </a>
            </li>
            <li>
                <a href="about.html">За нас</a>
            </li>
            <li>
                <a href="services.html">Услуги</a>
            </li>
            <li>
                <a href="barbers.html">Татуисти</a>
            </li>
            <li>
                <a href="appointment.html">Галерия</a>
            </li>
            <li>
                <a href="contact.html">Контакти</a>
            </li>
        </ul>
    </div>
</div>
{/* End Sidebar-wrapper */}
}