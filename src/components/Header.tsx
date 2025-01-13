import { MouseEvent, MouseEventHandler, useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { VscClose, VscMenu } from "react-icons/vsc";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scroll = function (e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        const headerHeight = document.querySelector("#header")?.clientHeight as number;
        const { currentTarget } = e;
        const { id } = currentTarget.dataset;
        const target = document.getElementById(id as string);
        const targetOffset = target?.offsetTop as number;
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: targetOffset - headerHeight
        });
    } satisfies MouseEventHandler<HTMLAnchorElement>;

    return (
        <>
            <div
                id="header"
                className="flex justify-center p-4 bg-blue-600 text-white bg-opacity-70 backdrop-blur-md max-md:hidden shadow-sm fixed top-0 w-full left-0 z-50"
            >
                <div className="flex justify-between flex-1 max-w-screen-lg items-center">
                    <h3 className="font-bold">
                        <a onClick={scroll} href="#">
                            Onah Victor
                        </a>
                    </h3>
                    <div className="flex justify-around flex-1 items-center text-sm">
                        <div className="flex justify-between gap-3">
                            <a data-id="about" onClick={scroll} className="hover:underline" href="#about">
                                About Me
                            </a>
                            <a onClick={scroll} className="hover:underline" href="#services" data-id="services">
                                Services
                            </a>
                            <a onClick={scroll} className="hover:underline" href="#projects" data-id="projects">
                                Projects
                            </a>
                            <a onClick={scroll} className="hover:underline" href="#contact" data-id="contact">
                                Contact Me
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/victor-onah-066563274/"
                                className="h-8 w-8 flex justify-center items-center rounded-full border border-white text-white"
                            >
                                <IoLogoLinkedin />
                            </a>
                            <a
                                href="https://twitter.com/__allAboutJS"
                                className="h-8 w-8 flex justify-center items-center rounded-full border border-white text-white"
                            >
                                <IoLogoTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-[767px]:hidden flex justify-between items-center p-4 bg-blue-600 text-white bg-opacity-70 backdrop-blur-md shadow-sm fixed top-0 w-full left-0 z-50">
                <h3 className="font-bold">
                    <a onClick={scroll} href="#">
                        Onah Victor
                    </a>
                </h3>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="h-10 w-10 hover:bg-blue-400 active:scale-95 rounded-full flex justify-center items-center"
                >
                    <VscMenu />
                </button>
            </div>
            <div
                className={`${
                    isMenuOpen ? "-translate-x-0" : "-translate-x-full"
                } transition-transform flex flex-col fixed inset-0 bg-blue-600 text-white justify-between z-[99999]`}
            >
                <div className="flex flex-col justify-between gap-3 p-4">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="h-10 w-10 hover:bg-blue-400 active:scale-95 rounded-full flex justify-center
         items-center"
                        >
                            <VscClose />
                        </button>
                    </div>
                    <a
                        onClick={(e) => (scroll(e), setTimeout(() => setIsMenuOpen(false), 300))}
                        className="p-2 rounded-md hover:bg-blue-400 active:scale-95 transition-transform"
                        href="#about"
                        data-id="about"
                    >
                        About Me
                    </a>
                    <a
                        onClick={(e) => (scroll(e), setTimeout(() => setIsMenuOpen(false), 300))}
                        className="p-2 rounded-md hover:bg-blue-400 active:scale-95 transition-transform"
                        href="#services"
                        data-id="services"
                    >
                        Services
                    </a>
                    <a
                        onClick={(e) => (scroll(e), setTimeout(() => setIsMenuOpen(false), 300))}
                        className="p-2 rounded-md hover:bg-blue-400 active:scale-95 transition-transform"
                        href="#projects"
                        data-id="projects"
                    >
                        Projects
                    </a>
                    <a
                        onClick={(e) => (scroll(e), setTimeout(() => setIsMenuOpen(false), 300))}
                        className="p-2 rounded-md hover:bg-blue-400 active:scale-95 transition-transform"
                        href="#contact"
                        data-id="contact"
                    >
                        Contact Me
                    </a>
                </div>
                <div className="flex gap-4 justify-center p-4">
                    <a
                        href="https://linkedin.com/in/victor-onah-066563274/"
                        className="h-8 w-8 flex justify-center items-center rounded-full border border-white text-white"
                    >
                        <IoLogoLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/__allAboutJS"
                        className="h-8 w-8 flex justify-center items-center rounded-full border border-white text-white"
                    >
                        <IoLogoTwitter />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
