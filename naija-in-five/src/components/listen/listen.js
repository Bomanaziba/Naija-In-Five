import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle, faSpotify } from '@fortawesome/free-brands-svg-icons';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Listen(props) {

    const rssFeedURL = "https://anchor.fm/s/55f84918/podcast/rss";
    const [audioUrl, setAudioUrl] = useState({});
    const [podCastTitle, setPodCastTitle] = useState('');

    fetch(rssFeedURL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            setAudioUrl(data.querySelectorAll("enclosure")[0].getAttribute("url"));
            setPodCastTitle(data.querySelectorAll("item")[0].firstElementChild.innerHTML);
        });


    return (

        <section id="mu-video-review">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-video-review-area">

                            <div className="mu-heading-area">
                                <h2 className="mu-heading-title">
                                    Listen Now
                                </h2>
                                <span className="mu-header-dot"></span>
                                <p>
                                    <span>Avaliable on <a className="audio-hero-anchor" href="https://podcasts.apple.com/ng/podcast/naija-in-five/id1562505783" target="_blank"><FontAwesomeIcon icon={faApple} /> podcast</a>, <a className="audio-hero-anchor" href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81NWY4NDkxOC9wb2RjYXN0L3Jzcw==" target="_blank"><FontAwesomeIcon icon={faGoogle} /> podcast</a>, <a className="audio-hero-anchor" href="https://anchor.fm/news-alphax" target="_blank">Anchor Fm</a>, and <a className="audio-hero-anchor" href="https://open.spotify.com/show/7mtQyTHSEosHgjP1ZQY0rJ" target="_blank"><FontAwesomeIcon icon={faSpotify} /> Spotify</a>.</span>
                                </p>
                            </div>

                            <div className="mu-video-review-content">
                                <AudioPlayer
                                    autoPlay
                                    src={ audioUrl }
                                    header={ podCastTitle.slice(9, podCastTitle.length-3) }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Listen;