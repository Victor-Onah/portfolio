import { useEffect, useId, useRef } from "react";
import { FaBugSlash } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscDatabase } from "react-icons/vsc";

const Services = () => {
	const services = [
		{
			name: "Training",
			description:
				"I offer instructor-led training in a way that fits with the way you  work.",
			icon: <GiTeacher />,
		},
		{
			name: "Consulting",
			description:
				"I offer information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.",
			icon: <ImOffice />,
		},
		{
			name: "Responsive Web design",
			description:
				"I help design mobile friendly, world class websites  that helps scales your business and helps user experience get better.",
			icon: <MdOutlineDesignServices />,
		},
		{
			name: "Database Development",
			description:
				"Equipped with skills of developing and maintaining databases, I could help develop scalable and optimized databases for your organization.",
			icon: <VscDatabase />,
		},
		{
			name: "Customer Software Development",
			description:
				"I help develop technical solutions in form of software that answer to the needs of customers.",
			icon: <RiCustomerService2Fill />,
		},
		{
			name: "Software Testing",
			description:
				"I can help test an already built software for bugs and loopholes, including giving advice on how to improve and secure the existing software against crashes and hack attacks.",
			icon: <FaBugSlash />,
		},
	];
	return (
		<div id="services" className="max-w-6xl m-auto px-4 py-14">
			<h2 className="font-bold text-2xl mb-4">My Services</h2>
			<p className="mb-4 font-semibold">
				Here is a break down of the services I render{" "}
			</p>
			<div className="grid grid-cols-3 gap-x-4 gap-y-12 max-sm:grid-cols-1 max-md:grid-cols-2">
				{services.map((service) => (
					<Service {...service} />
				))}
			</div>
		</div>
	);
};

const Service = ({
	name,
	description,
	icon,
}: {
	name: string;
	description: string;
	icon: React.ReactNode;
}) => {
	const id = useId();
	const service = useRef<HTMLDivElement>(null);

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
		observer.observe(service.current as HTMLDivElement);
	}, []);

	return (
		<div
			ref={service}
			className="hover:bg-indigo-100 translate-y-12 opacity-0 [transition:_0.7s_linear_all] bg-indigo-50 p-4 rounded-md shadow-sm hover:shadow-lg"
			key={id}
		>
			<span className="text-3xl text-slate-600">{icon}</span>
			<h3 className="font-semibold text-lg">{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Services;
