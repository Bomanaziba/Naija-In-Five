import React from 'react';
import Paper from './paperpopup';



function NewsPaper(props) {

    return (
        <div className="col-md-3 col-sm-6">
            <div className="mu-book-overview-single">
                <span className="mu-book-overview-icon-box">
                    <img src={props.coverpage} alt="No Coverpage Avialable"/>
                </span>
                <Paper name={props.name} coverpage={props.coverpage} />
                <p><a href={props.url} target="_blank">More Details</a></p>
            </div>
        </div>
    );
}

export default NewsPaper;