import React from "react";
import iam from "../../images/iam.jpg";

const About = () => {
	return (
		<React.Fragment>
			<section
				data-aos='fade-right'
				id='aboutme'
				className='about about--wrapper '>
				<div className='info about__info'>
					<span className='info__title'>chapter one. about me</span>
					<img src={iam} alt='iamtimokhin' className='info__image blob' />
					<span className='info__text'>
						"it all started in 2013 when a good friend of mine introduced me to
						web development. we started learning html, and quickly after i got
						into css, at that point i was mind blown by it's power! i started
						learning jquery to enhance my "web powers", but after a while,
						realizing that jquery is built on top of javascript, i dropped it
						and started learning vanilla js, and when i felt that i understood
						what is going on under the hood, i picked reactjs to help me on the
						long run on the front-end. i also love creating tutorials on various
						topics ranging from: how to create different web components or web
						applications to how to solve coding challenges. "
					</span>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
