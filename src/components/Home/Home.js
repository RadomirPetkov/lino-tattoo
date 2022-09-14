import logo from "./logo.jpg"
import background from "./4.jpg"
import "./home.css"

export const Home = () => {




    return <>
        <div id="wrapper">
            {/* Sidebar-wrapper */}
            <div id="sidebar-wrapper">
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
            {/* Page Content */}
            <div id="page-content-wrapper">
                <a href="#menu-toggle" className="menuopener" id="menu-toggle">
                    <i className="fa fa-bars" />
                </a>

                <div className="container-fluid" id="first-section">

                    <img src={background}></img>

                    <div className="heading-text">
                        <h2>
                            Добре дошли в сайта на
                        </h2>

                        <h3 className="heading"><span className="target">LINO</span> TATTOO</h3>

                        <h4 className="lead">
                            Най-доброто студио в София за избора на всеки!
                        </h4>
                    </div>

                </div>
                {/* end container */}



                <section className="section nopad cac text-center">
                    <a href="#">
                        <h3>
                            Interesting our awesome barber services? Just drop an appointment
                            form below!
                        </h3>
                    </a>
                </section>
                <div className="section wb">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <div className="message-box">
                                    <h4>About</h4>
                                    <h2>Welcome to SMBarber</h2>
                                    <p className="lead">
                                        Quisque eget nisl id nulla sagittis auctor quis id. Aliquam
                                        quis vehicula enim, non aliquam risus. Sed a tellus quis mi
                                        rhoncus dignissim.
                                    </p>
                                    <p>
                                        {" "}
                                        Integer rutrum ligula eu dignissim laoreet. Pellentesque
                                        venenatis nibh sed tellus faucibus bibendum. Sed fermentum est
                                        vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus. Sed vitae
                                        rutrum neque. Ut id erat sit amet libero bibendum aliquam.
                                        Donec ac egestas libero, eu bibendum risus. Phasellus et
                                        congue justo.{" "}
                                    </p>
                                    <a
                                        href="#services"
                                        data-scroll=""
                                        className="btn btn-light btn-radius btn-brd grd1 effect-1"
                                    >
                                        Learn More
                                    </a>
                                </div>
                                {/* end messagebox */}
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                        <hr className="hr1" />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="about-tab">
                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#tab_a" data-toggle="tab">
                                                Our Mission
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab_b" data-toggle="tab">
                                                Why Us?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab_c" data-toggle="tab">
                                                About Us
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab_a">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Morbi scelerisque tortor mi, eget mattis velit sagittis
                                                id. Duis ornare mauris eu eros interdum, vitae finibus
                                                arcu ultricies. Donec vitae felis eleifend, dignissim erat
                                                a, pretium diam. Donec eu massa odio. Suspendisse et
                                                ornare lacus, pharetra imperdiet ligula.
                                            </p>
                                            <p>
                                                Vestibulum ac quam id lorem semper condimentum. Nulla vel
                                                ligula turpis. Nullam luctus, mi nec rhoncus gravida,
                                                tortor est semper purus, a feugiat sapien odio non urna.
                                                Fusce pellentesque neque ut nisi rhoncus imperdiet. Sed eu
                                                purus vel turpis consectetur convallis. Donec a dolor
                                                tellus. Phasellus dignissim erat nec ipsum condimentum
                                                sollicitudin.{" "}
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="tab_b">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in
                                                some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to
                                                use a passage of Lorem Ipsum, you need to be sure there
                                                isn't anything embarrassing hidden in the middle of text.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    User Experince
                                                </li>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    Full Devices
                                                </li>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    Awesome Design
                                                </li>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    Visual Impact
                                                </li>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    100% Sincronized
                                                </li>
                                                <li>
                                                    <i className="fa fa-circle-o" aria-hidden="true" />
                                                    Custom Support
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="tab_c">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in
                                                some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to
                                                use a passage of Lorem Ipsum, you need to be sure there
                                                isn't anything embarrassing hidden in the middle of text.
                                            </p>
                                        </div>
                                    </div>
                                    {/* tab content */}
                                </div>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                        <hr className="hr1" />
                        <div className="row text-center">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="service-widget">
                                    <div className="post-media wow fadeIn">
                                        <a
                                            href="uploads/barber_01.jpg"
                                            data-rel="prettyPhoto[gal]"
                                            className="hoverbutton global-radius"
                                        >
                                            <i className="flaticon-unlink" />
                                        </a>
                                        <img
                                            src="uploads/barber_01.jpg"
                                            alt=""
                                            className="img-responsive img-rounded"
                                        />
                                    </div>
                                    <h3>Show us Your Graft Style</h3>
                                    <p>
                                        Aliquam sagittis ligula et sem lacinia, ut facilisis enim
                                        sollicitudin. Proin nisi est, convallis nec purus vitae,
                                        iaculis posuere sapien. Cum sociis natoque.
                                    </p>
                                </div>
                                {/* end service */}
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="service-widget">
                                    <div className="post-media wow fadeIn">
                                        <a
                                            href="uploads/barber_02.jpg"
                                            data-rel="prettyPhoto[gal]"
                                            className="hoverbutton global-radius"
                                        >
                                            <i className="flaticon-unlink" />
                                        </a>
                                        <img
                                            src="uploads/barber_02.jpg"
                                            alt=""
                                            className="img-responsive img-rounded"
                                        />
                                    </div>
                                    <h3>Outstanding Barber Shop</h3>
                                    <p>
                                        Duis at tellus at dui tincidunt scelerisque nec sed felis.
                                        Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum
                                        fermentum erat. It nam auctor.{" "}
                                    </p>
                                </div>
                                {/* end service */}
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="service-widget">
                                    <div className="post-media wow fadeIn">
                                        <a
                                            href="uploads/barber_03.jpg"
                                            data-rel="prettyPhoto[gal]"
                                            className="hoverbutton global-radius"
                                        >
                                            <i className="flaticon-unlink" />
                                        </a>
                                        <img
                                            src="uploads/barber_03.jpg"
                                            alt=""
                                            className="img-responsive img-rounded"
                                        />
                                    </div>
                                    <h3>The Barber Materials</h3>
                                    <p>
                                        Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit
                                        amet lacus vitae massa sodales aliquam at eget quam. Integer
                                        ultricies et magna quis posuere.
                                    </p>
                                </div>
                                {/* end service */}
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end section */}
                <div id="barbers" className="section lb">
                    <div className="container-fluid">
                        <div className="section-title row text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <small>MEET OUR BABRER TEAM</small>
                                <h3>OUR BARBERS</h3>
                                <hr className="grd1" />
                                <p className="lead">
                                    Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                                    vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                                    dignissim.
                                </p>
                            </div>
                        </div>
                        {/* end title */}
                        <div className="row dev-list text-center">
                            <div
                                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget clearfix">
                                    <div className="hover-br">
                                        <img
                                            src="uploads/barber_team_01.jpg"
                                            alt=""
                                            className="img-responsive"
                                        />
                                        <div className="social-up-hover">
                                            <div className="footer-social">
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-github" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-title">
                                        <h3>Soren Bo Bostian</h3>
                                        <small>The Founder</small>
                                    </div>
                                    {/* end title */}
                                    <p>
                                        Hello guys, I am Soren from Sirbistana. I am senior art
                                        director and founder of The Barber Shop Company.
                                    </p>
                                </div>
                                {/*widget */}
                            </div>
                            {/* end col */}
                            <div
                                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                            >
                                <div className="widget clearfix">
                                    <div className="hover-br">
                                        <img
                                            src="uploads/barber_team_03.jpg"
                                            alt=""
                                            className="img-responsive"
                                        />
                                        <div className="social-up-hover">
                                            <div className="footer-social">
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-github" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-title">
                                        <h3>Bryan Saftler</h3>
                                        <small>The Barber</small>
                                    </div>
                                    {/* end title */}
                                    <p>
                                        Hello guys, I am Soren from Sirbistana. I am senior art
                                        director and barber of the Barber Shop Market.
                                    </p>
                                </div>
                                {/*widget */}
                            </div>
                            {/* end col */}
                            <div
                                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.6s"
                            >
                                <div className="widget clearfix">
                                    <div className="hover-br">
                                        <img
                                            src="uploads/barber_team_02.jpg"
                                            alt=""
                                            className="img-responsive"
                                        />
                                        <div className="social-up-hover">
                                            <div className="footer-social">
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-github" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="btn grd1">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-title">
                                        <h3>Matthew Bayliss</h3>
                                        <small>The Barber</small>
                                    </div>
                                    {/* end title */}
                                    <p>
                                        Hello guys, I am Soren from Sirbistana. I am senior art
                                        director and barber of the Barber Shop Website.
                                    </p>
                                </div>
                                {/*widget */}
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end section */}
                <div
                    id="testimonials"
                    className="parallax section db parallax-off"
                    style={{ backgroundImage: 'url("uploads/parallax_20.jpg")' }}
                >
                    <div className="container-fluid">
                        <div className="section-title row text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <small>LET'S SEE OUR TESTIMONIALS</small>
                                <h3>HAPPY TESTIMONIALS</h3>
                                <hr className="grd1" />
                                <p className="lead">
                                    Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                                    vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                                    dignissim.
                                </p>
                            </div>
                        </div>
                        {/* end title */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="testi-carousel owl-carousel owl-theme">
                                    <div className="testimonial clearfix">
                                        <div className="desc">
                                            <h3>
                                                <i className="fa fa-quote-left" /> Wonderful Support!
                                            </h3>
                                            <p className="lead">
                                                They have got my project on time with the competition with
                                                a sed highly skilled, and experienced &amp; professional
                                                team.
                                            </p>
                                        </div>
                                        <div className="testi-meta">
                                            <img
                                                src="uploads/testi_01.png"
                                                alt=""
                                                className="img-responsive alignright"
                                            />
                                            <h4>
                                                James Fernando <small>- Manager of Racer</small>
                                            </h4>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="desc">
                                            <h3>
                                                <i className="fa fa-quote-left" /> Awesome Services!
                                            </h3>
                                            <p className="lead">
                                                Explain to you how all this mistaken idea of denouncing
                                                pleasure and praising pain was born and I will give you
                                                completed.
                                            </p>
                                        </div>
                                        <div className="testi-meta">
                                            <img
                                                src="uploads/testi_02.png"
                                                alt=""
                                                className="img-responsive alignright"
                                            />
                                            <h4>
                                                Jacques Philips <small>- Designer</small>
                                            </h4>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="desc">
                                            <h3>
                                                <i className="fa fa-quote-left" /> Great &amp; Talented
                                                Team!
                                            </h3>
                                            <p className="lead">
                                                The master-builder of human happines no one rejects,
                                                dislikes avoids pleasure itself, because it is very pursue
                                                pleasure.{" "}
                                            </p>
                                        </div>
                                        <div className="testi-meta">
                                            <img
                                                src="uploads/testi_03.png"
                                                alt=""
                                                className="img-responsive alignright"
                                            />
                                            <h4>
                                                Venanda Mercy <small>- Newyork City</small>
                                            </h4>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="desc">
                                            <h3>
                                                <i className="fa fa-quote-left" /> Great &amp; Talented
                                                Team!
                                            </h3>
                                            <p className="lead">
                                                The master-builder of human happines no one rejects,
                                                dislikes avoids pleasure itself, because it is very pursue
                                                pleasure.{" "}
                                            </p>
                                        </div>
                                        <div className="testi-meta">
                                            <img
                                                src="uploads/testi_03.png"
                                                alt=""
                                                className="img-responsive alignright"
                                            />
                                            <h4>
                                                Venanda Mercy <small>- Newyork City</small>
                                            </h4>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                </div>
                                {/* end carousel */}
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end section */}
                <div className="copyrights">
                    <div className="container-fluid">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-links">
                                    <a href="#">Home</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">About</a>
                                    <a href="#">Faq</a>
                                    <a href="#">Contact</a>
                                </p>
                                <p className="footer-company-name">
                                    All Rights Reserved. © 2018 <a href="#">SMBarber</a> Design By :{" "}
                                    <a href="https://html.design/">html design</a>
                                </p>
                            </div>
                            <div className="footer-right">
                                <form method="get" action="#">
                                    <input placeholder="Subscribe our newsletter.." name="search" />
                                    <i className="fa fa-envelope-o" />
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* end container */}
                </div>
                {/* end copyrights */}
            </div>
        </div>
        {/* end wrapper */}
    </>

}