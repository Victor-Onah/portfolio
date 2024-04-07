import { useEffect, useRef } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Banner = () => {
	const banner = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			function (entries, observer) {
				if (entries[0].isIntersecting) {
					entries[0].target.classList.remove("-translate-x-12");
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
		observer.observe(banner.current as HTMLElement);
	}, []);

	return (
		<header
			ref={banner}
			className="flex justify-center -translate-x-12 opacity-0 [transition:_0.7s_linear_all] items-center bg-zinc-100 h-[400px] p-4"
		>
			<div className="flex flex-col gap-4">
				<div className="text-slate-600">
					<p className="font-semibold text-xl">HI THERE</p>
					<h1 className="text-3xl font-bold">I AM ONAH VICTOR</h1>
					<p className="text-6xl font-extrabold">A Full-stack Web Developer</p>
				</div>
				<div className="flex gap-4">
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
		</header>
	);
};

export default Banner;
