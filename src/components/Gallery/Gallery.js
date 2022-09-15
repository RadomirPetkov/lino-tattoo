import background from "./hand.jpg"
import letterTattooFirst from "./nadpis1.jpg"
import letterTattooSecond from "./nadpis2.jpg"
import letterTattooThird from "./nadpis3.jpg"
import backTattooFirst from "./back1.jpg"
import backTattooSecond from "./back2.jpg"
import backTattooThird from "./back3.jpg"
import handTattooFirst from "./hand1.jpg"
import handTattooSecond from "./hand2.jpg"
import handTattooThird from "./hand3.jpg"
import "./gallery.css"

export const Gallery = () => {


    return <div id="page-content-wrapper">

        <div className="first-section">

            <img className="background-img" src={background}></img>

            <div className="title-heading">
                <h1>Галерия</h1>
            </div>


        </div>



        <section id="barbers" className="section lb">


            <div className="heading center">
                <small>Тук ще откриете част от нашите татуировки</small>
                <hr className="grd1" />

            </div>

            <div className="gallery-section">
                <h3 className="heading center">Надписи</h3>
                <div className="gallery-tattoo-images">
                    <img src={letterTattooFirst} />
                    <img src={letterTattooSecond} />
                    <img src={letterTattooThird} />
                </div>
            </div>

            <div className="gallery-section">
                <h3 className="heading center">На ръка</h3>
                <div className="gallery-tattoo-images">
                    <img src={handTattooFirst} />
                    <img src={handTattooSecond} />
                    <img src={handTattooThird} />
                </div>
            </div>

            <div className="gallery-section">
                <h3 className="heading center">На гръб</h3>
                <div className="gallery-tattoo-images">
                    <img src={backTattooFirst} />
                    <img src={backTattooSecond} />
                    <img src={backTattooThird} />
                </div>
            </div>
        </section>



    </div>

}