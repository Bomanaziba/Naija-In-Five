import React from 'react'
import NewsPaper from './newspaper'


function PaperStand(props) {

    const newsPaperList = props.newspaper.map(paper => (
        <NewsPaper 
            key = {paper.id}
            name = {paper.name}
            url = { paper.url}
            coverpage = {(paper.coverpage) ? paper.coverpage : './images/reader-1.jpg'}
        />
    ));

    return (
        <section id="mu-book-overview">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-book-overview-area">

                            <div className="mu-heading-area">
                                <h2 className="mu-heading-title">Paper Stand</h2>
                                <span className="mu-header-dot"></span>
                                <p>Cover page from Nigerian popular newspaper, view the coverpage by linking on them. Click more details to visit the website</p>
                            </div>
                            <div className="mu-book-overview-content">
                                <div className="row">
                                    { newsPaperList }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaperStand;