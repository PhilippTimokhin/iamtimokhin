import React from "react";
import resume from "../../skills/resume.jpg";

const Preview = () => {
	return (
		<React.Fragment>
			<section
				data-aos='fade-right'
				id='contactme'
				className='contact contact--wrapper'>
				<div className='info contact__info'>
					<span className='info__title'>
						chapter three. my contacts & resume
					</span>
				</div>
				<div className='data contact__data'>
					<span className='data__title'>iamtimokhin</span>
					<span className='data__phone'>
						phone:
						<a className='phone__link' href='tel:+79222226242'>
							+7(922)-222-62-42
						</a>
					</span>
					<span className='data__email'>mail: philipp.timokhin@mail.ru</span>
					<span className='data__resume'>
						<a className='resume__link' href={resume} download>
							click if u want to download my resume
						</a>
					</span>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Preview;
