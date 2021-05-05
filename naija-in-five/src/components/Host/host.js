import React from 'react';


function Host(props) {

    return (
        <section id="mu-testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-testimonials-area">
                            <div className="mu-heading-area">
                                <h2 className="mu-heading-title">The Host</h2>
                                <span className="mu-header-dot"></span>
                            </div>

                            <div className="mu-testimonials-block">
                                <ul className="mu-testimonial-slide">

                                    <li>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                        <img className="mu-rt-img" src="images/bogoni.jpeg" alt="img" />
                                        <h5 className="mu-rt-name"> - B. Ogoni</h5>
                                        <span className="mu-rt-title">Host</span>
                                    </li>

                                    <li>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                        <img className="mu-rt-img" src="images/fatasi.jpeg" alt="img" />
                                        <h5 className="mu-rt-name"> F. Atasi</h5>
                                        <span className="mu-rt-title">Co-Host</span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default Host;