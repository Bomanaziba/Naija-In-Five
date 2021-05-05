import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle, faSpotify } from '@fortawesome/free-brands-svg-icons'

function Introductory(props) {


    const rssFeedURL = "https://anchor.fm/s/55f84918/podcast/rss";
    const [audioUrl, setAudioUrl] = useState({});


    fetch(rssFeedURL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        setAudioUrl(data.querySelectorAll("enclosure")[0].getAttribute("url"));
    });
    

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
                            <h1>Get latest news update in five minutes from our podcast.</h1>
                            <p>Add five miuntes of news update to your morning routine. Get all that matters in five minutes, instead of getting lost in hours of unending news. Monday to Friday, 8am (WAT)</p>
                            <p>Listen Now!</p>

                            <audio preload="auto" src={audioUrl} controls type="audio/mpeg" />
                            
                            <span>*Avaliable in <a href="https://podcasts.apple.com/ng/podcast/naija-in-five/id1562505783" target="_blank"><FontAwesomeIcon icon={faApple} /> podcast</a>, <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81NWY4NDkxOC9wb2RjYXN0L3Jzcw==" target="_blank"><FontAwesomeIcon icon={faGoogle} /> podcast</a>, <a href="https://anchor.fm/news-alphax" target="_blank">Anchor Fm</a>, and <a href="https://open.spotify.com/show/7mtQyTHSEosHgjP1ZQY0rJ" target="_blank"><FontAwesomeIcon icon={faSpotify} /> Spotify</a>.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}

export default Introductory;