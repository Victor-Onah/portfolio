import { useEffect, useId, useRef } from "react";

const Projects = () => {
	const projects = [
		{
			name: "Mma Beauty Care",
			description:
				"Mma Beauty Care is a simple full-stack e-commerce website that deals on cosmetics and allows users to add items to their cart and place orders. It was built with Tailwind CSS, React JS, Express JS, Node JS and Mongo DB",
			link: "https://mma-beauty-care.netlify.app",
			imageUrl: "/images/mbc.png",
		},
		{
			name: "Iyke Bulkwill",
			description:
				"Iyke-Bulkwill.com is a full-stack e-commerce website which I built for a client (Mr. Iyke). The website allows users to find and purchase materials for interior decoration, security lights, lands, mobile accessories and so on. It was built with Tailwind CSS, Next Js, React JS, Express JS, Node JS and Mongo DB.",
			link: "https://iyke-bulkwill.com",
			imageUrl: "/images/iyke_bulkwill.png",
		},
		{
			name: "Naija Quotes",
			description:
				"Naija Quotes is a simple full-stack website. It was a fun project to build because it gave me the chance to practice my Vanilla JS without any frameworks. It was built with Vanilla JS, Tailwind CSS, Express JS, Node JS and Mongo DB.",
			link: "https://naijaquotes.onrender.com",
			imageUrl: "/images/naija_quotes.png",
		},
	];
	return (
		<div id="projects" className="bg-sky-50">
			<div className="max-w-6xl mx-auto px-4 py-14">
				<h2 className="font-bold text-2xl mb-4">My Projects</h2>
				<p className="mb-4 font-semibold">
					Here are some cool projects I've worked on
				</p>
				<div className="grid grid-cols-3 gap-x-4 gap-y-12 max-sm:grid-cols-1 max-md:grid-cols-2">
					{projects.map((project) => (
						<Project {...project} />
					))}
				</div>
			</div>
		</div>
	);
};

const Project = ({
	description,
	imageUrl,
	link,
	name,
}: {
	name: string;
	description: string;
	link: string;
	imageUrl: string;
}) => {
	const id = useId();
	const project = useRef<HTMLDivElement>(null);

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
				threshold: 0.33,
			}
		);
		observer.observe(project.current as HTMLDivElement);
	}, []);

	return (
		<div
			ref={project}
			className="hover:bg-slate-100 bg-slate-50 translate-y-12 opacity-0 [transition:_0.7s_linear_all] rounded-md shadow-sm hover:shadow-lg overflow-hidden h-fit"
			key={id}
		>
			<img src={imageUrl} alt={name} />
			<div className="p-4">
				<h3 className="font-semibold">{name}</h3>
				<p>{description}</p>
				<a
					className="p-2 rounded-full bg-slate-500 text-white active:scale-95 block w-fit mt-4"
					href={link}
				>
					View project
				</a>
			</div>
		</div>
	);
};

export default Projects;
