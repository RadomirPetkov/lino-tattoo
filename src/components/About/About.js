import background from "../hand.jpg"


export const About = () => {


    return <div id="page-content-wrapper">

        <div className="first-section">

            <img className="background-img" src={background}></img>

            <div className="title-heading">
                <h1>За нас</h1>
            </div>


        </div>



        <section id="barbers" className="section lb">


            <div className="heading center">
                <small>Тук ще откриете част от нашите татуировки</small>
                <hr className="grd1" />

            </div>

           
        </section>



    </div>

    return
}