import React from "react";
import iamtimokhin from "../../images/iamtimokhin.png";

const Preview = () => {
	return (
		<React.Fragment>
			<section
				data-aos='fade-right'
				id='preview'
				className='preview preview--wrapper'>
				<div className='promo preview__promo'>
					<img
						src={iamtimokhin}
						alt='iamtimokhin'
						className='promo__logo hu__hu__'
					/>
					<span className='promo__title'>iamtimokhin</span>
					<span className='promo__title'>frontend developer</span>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Preview;
