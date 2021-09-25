import React from 'react';

function Introductory(props) {

    return (
        <section id="mu-hero">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-6 col-sm-push-6">
                        <div className="mu-hero-right">
                            <img src="images/news-on-the-go.jpeg" alt="Ebook img" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-sm-pull-6">
                        <div className="mu-hero-left">
                            <h1>What Matters In Five.</h1>
                            <p>Add five miuntes of Nigerian news update to your morning routine. Get all that matters in five minutes, instead of getting lost in hours of unending news. Monday to Friday, 8am (WAT)</p>
                            <a href="#mu-video-review" class="mu-primary-btn">Listen Now!</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}

export default Introductory;