import React from 'react'


function FeedBack(props) {
    return (

        <section id="mu-contact">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-contact-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title">Drop Us A Message</h2>
								<span className="mu-header-dot"></span>
								<p>Send us a message. What do you not like, what do you like.</p>
							</div>
							<div className="mu-contact-content">

								<div id="form-messages"></div>
								<form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
									<div className="form-group">                
										<input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
									</div>
									<div className="form-group">                
										<input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" required />
									</div>              
									<div className="form-group">
										<textarea className="form-control" placeholder="Message" id="message" name="message" required></textarea>
									</div>
									<button type="submit" className="mu-send-msg-btn"><span>SUBMIT</span></button>
						        </form>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

    );
}

export default FeedBack;