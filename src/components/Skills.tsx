import { useEffect, useId, useRef, useState } from "react";
import {
	IoLogoCss3,
	IoLogoGithub,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoReact,
	IoLogoSass,
} from "react-icons/io5";
import {
	SiExpress,
	SiGit,
	SiMongodb,
	SiMongoose,
	SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
	const skills = [
		{ name: "Git", value: 80, icon: <SiGit /> },
		{ name: "GitHub", value: 85, icon: <IoLogoGithub /> },
		{ name: "HTML", value: 90, icon: <IoLogoHtml5 /> },
		{ name: "CSS", value: 87, icon: <IoLogoCss3 /> },
		{ name: "SASS", value: 75, icon: <IoLogoSass /> },
		{ name: "Tailwind CSS", value: 80, icon: <SiTailwindcss /> },
		{ name: "Javascript", value: 81, icon: <IoLogoJavascript /> },
		{ name: "Vanilla JS", value: 90, icon: <IoLogoJavascript /> },
		{ name: "React JS", value: 77, icon: <IoLogoReact /> },
		{ name: "Next JS", value: 80, icon: <TbBrandNextjs /> },
		{ name: "Node JS", value: 75, icon: <IoLogoNodejs /> },
		{ name: "Express JS", value: 85, icon: <SiExpress /> },
		{ name: "Mongo DB", value: 75, icon: <SiMongodb /> },
		{ name: "Mongoose", value: 78, icon: <SiMongoose /> },
	];
	return (
		<div className="bg-slate-50">
			<div className="max-w-5xl mx-auto px-4 py-14">
				<h2 className="font-bold text-2xl mb-4">My Skills</h2>
				<p className="mb-4 font-semibold">
					Here is a visual representation of my skills.
				</p>
				<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-12">
					{skills.map((skill) => (
						<Skill key={skill.name} {...skill} />
					))}
				</div>
			</div>
		</div>
	);
};

const Skill = ({
	name,
	value,
	icon,
}: {
	name: string;
	value: number;
	icon: React.ReactNode;
}) => {
	const progressBar = useRef<HTMLSpanElement>(null);
	const [percentage, setPercentage] = useState<number>(0);
	const id = useId();

	useEffect(() => {
		const observer = new IntersectionObserver(
			function (entries, observer) {
				if (entries[0].isIntersecting) {
					setPercentage(value);
					observer.disconnect();
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 1,
			}
		);
		observer.observe(progressBar.current as HTMLSpanElement);
	}, []);
	return (
		<div key={id}>
			<div className="flex gap-2 items-center text-slate-600">
				<span className="text-lg">{icon}</span>
				<p className="font-semibold">{name}</p>
			</div>
			<div className="flex gap-2 items-center">
				<div className="w-full h-[3px] bg-slate-100 flex-1">
					<span
						style={{ width: `${percentage}%` }}
						ref={progressBar}
						className="block [transition:_1s_linear_width] h-full bg-slate-400"
					></span>
				</div>
				<span>{percentage}%</span>
			</div>
		</div>
	);
};
export default Skills;
