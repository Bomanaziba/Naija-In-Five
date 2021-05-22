import React from 'react';
import Person from './person';

function Host(props) {

    const personList = props.host.map(host => (
        <Person
            key={host.id}
            name={host.name}
            describe={host.describe}
            title={host.title}
            image={(host.image) ? host.image : './images/reader-1.jpg'}
        />
    ));

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
                                    <li className="">
                                        <img className="mu-rt-img" src="./images/fatasi.jpeg" alt="image" />
                                        <h5 className="mu-rt-name">Fortune Ataisi</h5>
                                        <span className="mu-rt-title">Host</span>
                                        <p>{props.describe}</p>
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