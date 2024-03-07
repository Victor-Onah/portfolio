import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const About = () => {
	return (
		<div id="about" className="max-w-3xl text-center my-7 p-4 mx-auto">
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
					href="#"
					className="h-8 w-8 flex justify-center items-center rounded-full border border-slate-400 text-slate-600"
				>
					<IoLogoLinkedin />
				</a>
				<a
					href="#"
					className="h-8 w-8 flex justify-center items-center rounded-full border border-slate-400 text-slate-600"
				>
					<IoLogoTwitter />
				</a>
			</div>
		</div>
	);
};

export default About;
