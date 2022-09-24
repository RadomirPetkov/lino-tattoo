import background from "../hand.jpg"
import "./contacts.css"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "../../.config"

export const Contacts = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY })


    return <div id="page-content-wrapper">

        <div className="first-section">

            <img className="background-img" src={background}></img>

            <div className="title-heading">
                <h1>Контакти</h1>
            </div>


        </div>



        <section id="barbers" className="section">


            <div className="heading center">
                <small>Как да ни намерите</small>
                <hr className="grd1" />

            </div>

            <div className="contact-section">
                <div className="contact-box">
                    <i className="bi-telephone-fill"></i>
                    <p>0898836373</p>
                </div>
                <div className="contact-box">
                    <i className="bi-geo-alt-fill"></i>
                    <p>бул. „Добринова скала“ 365, 1336 ж.к. Люлин 3, София</p>

                </div>
                <div className="contact-box">
                    <i className="bi-globe"></i>
                    <p>Посетете нашата фейсбук страница</p>
                    <a href="https://www.facebook.com/LinoTatto" target="_blank">Lino tattoo</a>
                </div>
            </div>

            <div className="map-section">
                <div className="contact-form">

                    <form id="send-message">
                        <div className="contact-name">
                            <label htmlFor="name">Име</label>
                            <input placeholder="Иван Иванов"></input>
                        </div>
                        <div className="contact-phone">
                            <label htmlFor="phone">Телефон</label>
                            <input placeholder="088*******"></input>
                        </div>
                        <div className="contact-email">
                            <label htmlFor="email">Email</label>
                            <input placeholder="sample@gmail.com" input="email"></input>
                        </div>
                        <div className="contact-message">
                            <label htmlFor="message">Съобщение</label>
                            <input placeholder=""></input>
                        </div>
                        <div>
                            <button className="contact-button btn" type="submit"> Изпрати</button>
                        </div>
                    </form>
                </div>
                {isLoaded
                    ? <GoogleMap zoom={12} center={{ lat: 42.71353402268442, lng: 23.29691354047912 }} mapContainerClassName="map-container">
                        <MarkerF position={{ lat: 42.72367589472162, lng: 23.2420315576713 }} />
                    </GoogleMap>


                    : <p>loading..</p>}
            </div>

        </section>


    </div>

}