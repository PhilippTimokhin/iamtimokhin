import React from "react";
import iamtimokhin from "../../images/iamtimokhin.png";
import instagram from "../../images/instagram.png";
import github from "../../images/github.png";

const Footer = () => {
	return (
		<React.Fragment>
			<footer className='footer footer--wrapper'>
				<div className='media footer__media'>
					<img src={iamtimokhin} alt='iamtimokhin' className='media__image' />
					<span className='media__logo'>iamtimokhin</span>
				</div>
				<div className='menu footer__menu'>
					<a href='#aboutme' className='menu__link'>
						about me
					</a>
					<a href='#experience' className='menu__link'>
						experience
					</a>
					<a href='#contactme' className='menu__link'>
						contact me
					</a>
				</div>
				<div className='social footer__social'>
					<a
						href='https://www.instagram.com/iamtimokhin/'
						className='social__link'>
						<img src={instagram} alt='instagram' className='social__image' />
					</a>
					<a href='https://github.com/PhilippTimokhin' className='social__link'>
						<img src={github} alt='github' className='social__image' />
					</a>
				</div>
				<div className='copy footer__copy'>
					<span className='copy__text'>
						made on react js by philipp timokhin
					</span>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
