import { useEffect, useRef } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const About = () => {
	const about = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			function (entries, observer) {
				if (entries[0].isIntersecting) {
					entries[0].target.classList.remove("translate-y-12");
					entries[0].target.classList.remove("opacity-0");
					observer.disconnect();
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5,
			}
		);
		observer.observe(about.current as HTMLDivElement);
	}, []);

	return (
		<div
			ref={about}
			id="about"
			className="max-w-3xl text-center translate-y-12 opacity-0 [transition:_0.7s_linear_all] my-7 p-4 mx-auto"
		>
			<h2 className="font-bold text-2xl mb-6">About Me</h2>
			<p>
				Victor Onah is a dedicated Full Stack Web Developer currently serving as
				a Frontend Developer at Atrizult Practical Consulting. With over three
				years of experience, he specializes in the MERN stack, crafting fast and
				scalable applications. Passionate about leveraging the latest
				technologies, Victor excels in delivering high-quality solutions, driven
				by his unwavering commitment to perfection. Whether optimizing user
				interfaces or architecting robust backend systems, he approaches every
				project with meticulous attention to detail, ensuring to exceed
				expectations. Victor Onah embodies innovation and excellence in the
				dynamic field of web development.
			</p>
			<div className="flex gap-4 justify-center mt-6">
				<a
					href="https://linkedin.com/in/victor-onah-066563274/"
					className="h-8 w-8 flex justify-center items-center rounded-full border border-slate-400 text-slate-600"
				>
					<IoLogoLinkedin />
				</a>
				<a
					href="https://twitter.com/__allAboutJS"
					className="h-8 w-8 flex justify-center items-center rounded-full border border-slate-400 text-slate-600"
				>
					<IoLogoTwitter />
				</a>
			</div>
		</div>
	);
};

export default About;
