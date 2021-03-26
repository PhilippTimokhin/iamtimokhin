import React from "react";
import iamtimokhin from "../../images/iamtimokhin.png";

const Header = () => {
	return (
		<React.Fragment>
			<header className='header header--wrapper'>
				<div className='media header__media'>
					<img src={iamtimokhin} alt='iamtimokhin' className='media__image' />
					<a href='#preview' className='media__logo'>
						iamtimokhin
					</a>
				</div>
				<nav className='menu header__menu'>
					<ul className='menu__item'>
						<li className='menu__list'>
							<a href='#aboutme' className='menu__link'>
								about me
							</a>
						</li>
						<li className='menu__list'>
							<a href='#experience' className='menu__link'>
								experience
							</a>
						</li>
						<li className='menu__list'>
							<a href='#contactme' className='menu__link'>
								contact me
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
