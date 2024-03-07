import { MouseEvent, MouseEventHandler, useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { VscClose, VscMenu } from "react-icons/vsc";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scroll = function (e: MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		const headerHeight = document.querySelector("#header")
			?.clientHeight as number;
		const { currentTarget } = e;
		const { id } = currentTarget.dataset;
		const target = document.getElementById(id as string);
		const targetOffset = target?.offsetTop as number;
		window.scrollTo({
			behavior: "smooth",
			left: 0,
			top: targetOffset - headerHeight,
		});
	} satisfies MouseEventHandler<HTMLAnchorElement>;

	return (
		<>
			<div
				id="header"
				className="flex justify-center p-4 bg-white max-md:hidden shadow-sm sticky top-0 w-full left-0"
			>
				<div className="flex justify-between flex-1 max-w-screen-lg items-center">
					<h3 className="font-bold text-slate-600">Onah Victor</h3>
					<div className="flex justify-around flex-1 items-center">
						<div className="flex justify-between gap-3">
							<a
								data-id="about"
								onClick={scroll}
								className="p-2 rounded-full hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
								href="#about"
							>
								About Me
							</a>
							<a
								onClick={scroll}
								className="p-2 rounded-full hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
								href="#services"
								data-id="services"
							>
								Services
							</a>
							<a
								onClick={scroll}
								className="p-2 rounded-full hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
								href="#projects"
								data-id="projects"
							>
								Projects
							</a>
							<a
								onClick={scroll}
								className="p-2 rounded-full hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
								href="#contact"
								data-id="contact"
							>
								Contact Me
							</a>
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
				</div>
			</div>
			<div className="min-[767px]:hidden flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 w-full left-0">
				<h3 className="font-bold text-slate-600">Onah Victor</h3>
				<button
					onClick={() => setIsMenuOpen(true)}
					className="h-10 w-10 hover:bg-slate-200 active:scale-95 rounded-full flex justify-center items-center"
				>
					<VscMenu />
				</button>
				<div
					className={`${
						isMenuOpen ? "-translate-x-0" : "-translate-x-full"
					} transition-transform flex flex-col fixed inset-0 bg-white justify-between`}
				>
					<div className="flex flex-col justify-between gap-3 p-4">
						<div className="flex justify-end">
							<button
								onClick={() => setIsMenuOpen(false)}
								className="h-10 w-10 hover:bg-slate-200 active:scale-95 rounded-full flex justify-center
         items-center"
							>
								<VscClose />
							</button>
						</div>
						<a
							onClick={(e) => (
								scroll(e), setTimeout(() => setIsMenuOpen(false), 300)
							)}
							className="p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
							href="#about"
							data-id="about"
						>
							About Me
						</a>
						<a
							onClick={(e) => (
								scroll(e), setTimeout(() => setIsMenuOpen(false), 300)
							)}
							className="p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
							href="#services"
							data-id="services"
						>
							Services
						</a>
						<a
							onClick={(e) => (
								scroll(e), setTimeout(() => setIsMenuOpen(false), 300)
							)}
							className="p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
							href="#projects"
							data-id="projects"
						>
							Projects
						</a>
						<a
							onClick={(e) => (
								scroll(e), setTimeout(() => setIsMenuOpen(false), 300)
							)}
							className="p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 active:scale-95 transition-transform"
							href="#contact"
							data-id="contact"
						>
							Contact Me
						</a>
					</div>
					<div className="flex gap-4 justify-center p-4">
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
			</div>
		</>
	);
};

export default Header;
