import { useEffect, useRef } from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Contact = () => {
	const contact = useRef<HTMLDivElement>(null);

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
		observer.observe(contact.current as HTMLDivElement);
	}, []);
	return (
		<div
			id="contact"
			ref={contact}
			className="flex flex-col justify-center [transition:_0.7s_linear_all] items-center gap-4 p-4 translate-y-12 opacity-0"
		>
			<h2 className="font-bold text-3xl">Get In Touch</h2>
			<p>Need any of my services?</p>
			<p>
				Don't hesitate to reach out to me here or on any of my social media
				handles.
			</p>
			<div className="flex gap-4 my-4 text-center">
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
			<div>
				<div className="flex items-center gap-4 hover:underline mb-4">
					<span>
						<GoMail />
					</span>
					<a href="mailto:victoronah.dev@gmail.com">victoronah.dev@gmail.com</a>
				</div>
				<div className="flex items-center gap-4 hover:underline mb-4">
					<span>
						<BsTelephone />
					</span>
					<a href="tel:+2349035495410">+234 903 549 5410</a>
				</div>
				<div className="flex items-center gap-4 hover:underline mb-4">
					<span>
						<BsWhatsapp />
					</span>
					<a href="https://wa.me/2348176128668">+234 817 612 8668</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
