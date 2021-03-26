import React from "react";
import html from "../../skills/HTML.gif";
import css from "../../skills/CSS.gif";
import scss from "../../skills/SCSS.gif";
import js from "../../skills/JS.gif";
import bem from "../../skills/BEM.gif";
import react from "../../skills/react js.gif";
import canva from "../../skills/canva.gif";
import figma from "../../skills/figma.gif";
import github from "../../skills/github.gif";
import materialui from "../../skills/materialui.gif";
import materialize from "../../skills/materialize.gif";
import bootstrap from "../../skills/bootstrap.gif";
import english from "../../skills/english.gif";

const About = () => {
	const experience = [
		{
			name: "html",
			description:
				"html is the foundation of all web pages. without html, you wouldn’t be able to organize text or add images or videos to your web pages. html is the beginning of everything you need to know to create engaging web pages!",
			img: html,
		},
		{
			name: "css",
			description:
				"without css, every web page would be drab plain text and images that flowed straight down the page. with css, you can add color and background images and change the layout of your page — your web pages can feel like works of art!",
			img: css,
		},
		{
			name: "sass/scss",
			description:
				"sass is an easy-to-use styling language that helps reduce a lot of the repetition and maintainability challenges of traditional css. learning sass will not only let you scale styles when working on big web development projects, it will also make it much faster and more efficient to write reusable styles from scratch for smaller projects.",
			img: scss,
		},
		{
			name: "bem methodology",
			description:
				"bem (block, element, modifier) is a component-based approach to web development. the idea behind it is to divide the user interface into independent blocks. this makes interface development easy and fast even with a complex ui, and it allows reuse of existing code without copying and pasting.",
			img: bem,
		},
		{
			name: "java-script",
			description:
				"java-script is among the most powerful and flexible programming languages of the web. it powers the dynamic behavior on most websites, including this one.",
			img: js,
		},
		{
			name: "react js",
			description:
				"reactjs offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. it’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. there’s never been a better time to learn react.",
			img: react,
		},
		{
			name: "canva",
			description:
				"thousands of custom templates and stock images, easy-to-use editing features, and more! view templates. view plans. sign up online. categories: marketing templates, social media templates, business templates.",
			img: canva,
		},
		{
			name: "figma",
			description:
				"figma helps teams create, test, and ship better designs from start to finish.",
			img: figma,
		},
		{
			name: "github",
			description:
				"github is a popular source code hosting and development service that supports distributed teams working on large and small software projects, particularly open-source projects.",
			img: github,
		},
		{
			name: "material-ui",
			description:
				"react components for faster and easier web development. build your own design system, or start with material design.",
			img: materialui,
		},
		{
			name: "materialize",
			description:
				"created and designed by google, material design is a design language that combines the classic principles of successful design along with innovation and technology. google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.",
			img: materialize,
		},
		{
			name: "bootstrap",
			description:
				"if you want to quickly create a website without writing tons of css from scratch, then bootstrap four might be the framework you’re looking for. in this course, you’ll see how bootstrap makes it easy to layout and create interactive and responsive sites.",
			img: bootstrap,
		},
		{
			name: "english language",
			description:
				"all over the world, it professionals and software developers are required to know english at a high level in order to be able to work with colleagues and help clients.",
			img: english,
		},
	];
	return (
		<React.Fragment>
			<section id='experience' className='experience experience--wrapper'>
				<div className='info experience__info'>
					<span className='info__title'>
						chapter two. my experience & stack
					</span>
				</div>
				<div className='skills experience__skills'>
					{experience.map((inner) => (
						<div data-aos='fade-right' className='wrapper__skills'>
							<div className='skills__image'>
								<img className='image__p' src={inner.img} alt='' />
							</div>
							<div className='skills__program'>
								<span className='skills__text'>{inner.name}</span>
							</div>
							<div className='skills__description'>
								<span className='skills__text'>{inner.description}</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
