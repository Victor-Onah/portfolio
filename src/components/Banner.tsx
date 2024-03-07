import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Banner = () => {
	return (
		<header className="flex justify-center items-center bg-slate-100 h-[400px] p-4">
			<div className="flex flex-col gap-4">
				<div className="text-slate-600">
					<p className="font-semibold text-xl">HI THERE</p>
					<h1 className="text-3xl font-bold">I AM ONAH VICTOR</h1>
					<p className="text-6xl font-extrabold">A Full-stack Web Developer</p>
				</div>
				<div className="flex gap-4">
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
		</header>
	);
};

export default Banner;
