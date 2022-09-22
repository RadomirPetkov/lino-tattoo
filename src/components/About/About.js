import background from "../hand.jpg"
import studio from "./studio.jpg"
import "./about.css"
import {Link} from "react-router-dom"


export const About = () => {


    return <div id="page-content-wrapper">

        <div className="first-section">

            <img className="background-img" src={background}></img>

            <div className="title-heading">
                <h1>За нас</h1>
            </div>


        </div>



        <section id="barbers" className="section">


            <div className="heading center">
                <small>Кои сме ние?</small>
                <hr className="grd1" />

            </div>

            <p className="par">
                Студиото е създадено през 2012 година като държим на използването на съвременен подход в изкуството на татуировките и изпълняваме вашите желания така, че вие се превръщате в наши приятели. Имаме собствена концепция на работа и можем да ви помогнем да изберете най-подходящото за вас изображение. Работим в атмосфера на перфектна хигиена, уют и комфорт, като се грижим изцяло за вашата безопасност и добро преживяване. Използваме само еднократни материали и стерилизирани инструменти. Боите, с които изработваме татуировките, са безопасни за човека и за неговото здраве и са придружени от необходимите сертификати. С опита, който сме натрупали през дългогодишната ни практика, гарантираме отличен краен резултат на добра цена.
            </p>
            <p className="par">
                Ако имате белези, нежелана пигментация и други подобни неудобства, които ви пречат да се наслаждавате на живота, елате при нас и ще превърнем мястото от тялото, което обикновено криете от околните, в красива рисунка, подчертаваща индивидуалността ви.
            </p>


            <div className="link-btn">
                <Link to="/contacts" className="btn">
                    Контакти
                </Link>
            </div>


            <div id="studio-img">
                <img src={studio} />

            </div>

        </section>



    </div>


}