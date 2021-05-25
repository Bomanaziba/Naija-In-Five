import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { add } from '../../apis/feedbackapis'
 

function FeedBack(props) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const { handleSubmit } = useForm();


	function handleChangeName(e) {
		setName(e.target.value);
	  }
	
	function handleChangeEmail(e) {
		setEmail(e.target.value);
	  }

	function handleChangeMessage(e) {
		setMessage(e.target.value);
	  }
	
	const onSubmit = async data => {
		try {
		   await add({ name, email, message });
		   alert("feedback sent");
		   setName("")
		   setEmail("")
		   setMessage("")
		} catch (error) {
			console.log(error);
			alert("feedback not sent")
		}
	}
	
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
								<form id="ajax-contact" onSubmit={handleSubmit(onSubmit)} className="mu-contact-form">
									<div className="form-group">                
										<input type="text" value={name} className="form-control" placeholder="Name" id="name" onChange={handleChangeName} name="name" required />
									</div>
									<div className="form-group">                
										<input type="email" value={email} className="form-control" placeholder="Enter Email" id="email" onChange={handleChangeEmail} name="email" required />
									</div>              
									<div className="form-group">
										<textarea className="form-control" value={message} placeholder="Message" id="message" onChange={handleChangeMessage} name="message" required></textarea>
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