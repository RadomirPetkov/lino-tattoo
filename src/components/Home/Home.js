import background from "./4.jpg"
import lino from "./lino.jpg"
import "./home.css"

export const Home = () => {




    return <>
        <div id="page-content-wrapper">
            <a href="#menu-toggle" className="menuopener" id="menu-toggle">
                <i className="fa fa-bars" />
            </a>

            <div className="container-fluid" id="first-section">

                <img src={background}></img>

                <div className="heading-text">
                    {/* <h2>
                            Добре дошли в сайта на
                        </h2> */}

                    <h3 className="heading"><span className="target">LINO</span> TATTOO</h3>

                    <h4 className="lead">
                        Най-доброто студио в града...
                    </h4>
                </div>

            </div>
            {/* end container */}




            <div className="second-section">



                <div className="message-box">

                    <section className="about-home">
                        <h2>За нас</h2>
                        <h2>Добре дошли с сайта на <span className="heading"> <span className="target">LINO</span> TATTOO</span></h2>
                        <p className="">
                            Нашето студио предлага персонализирани татуировки, като разполагаме също така и с изключително богат предварително подготвен каталог, отговарящ на желанието на голям брой клиенти.
                            Без значение дали е най-малка или най-голямата татуировка, Вие можете да разчитате на нас!
                            Студиото се намира в гр. София като държим изключително много на качеството, чистотата и точността при изработването на всяка татуировка.

                        </p>
                        <p>Работим само с предвариетлно запазен час, като работното ни време е изключително гъвкаво.</p>
                        <br />
                        <div className="link-btn">
                            <a href="#services" className="btn">
                                Научете повече за нас
                            </a>
                        </div>
                    </section>



                    <section className="about-home">
                        <h2>Защо да изберете нас</h2>
                        <p className="">
                            Стотици клиенти вече ни се довериха и останаха доволни!
                        </p>
                        <p>Консултацията е напълно безплатна, като можете да разгледате част от нашият каталог както ако ни посетите на място така и чрез нашата галерия.</p>
                        <br />
                        <div className="link-btn">
                            <a href="#services" className="btn">
                                Нашата галерия
                            </a>
                        </div>
                    </section>



                </div>
                {/* end container */}
            </div>
            {/* end section */}




            <section id="artist" className="section lb">


                <div className="">

                    <h3>Нашият главен герой</h3>
                    <hr className="grd1" />
                    <p className="lead">
                        Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                        vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                        dignissim.
                    </p>
                </div>



                <div className="artist-info">
                    <div >
                        <img
                            src={lino}
                            alt=""
                            className="artist-img"
                        />

                    </div>
                    <div className="widget-title">
                        <h3>Ивелино Иванов</h3>
                        <small>Основател</small>
                    </div>
                    {/* end title */}
                    <p className="par">
                        Ивелино притежава дългогодишен опит натрупан както на местна почва така и в чужбина.
                        Роден и израстнал в София, той е страстен привърженик на мастилото още от ранните си години.
                        Той обича да се фокусира върху това да бъде разнообразен, вместо да се придържа към един стил на татуиране, въпреки че любимото му нещо за татуиране е надпис.
                    </p>
                </div>
                {/*widget */}

            </section>
            {/* end section */}



            <footer className="copyrights">

                <div className="footer-left">
                    <p className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                        <a href="#">Contact</a>
                    </p>

                </div>
                <div className="footer-right">
                    <p className="footer-company-name">
                        All Rights Reserved. © 2022
                    </p>
                </div>

            </footer>
            {/* end copyrights */}


        </div>


    </>

}