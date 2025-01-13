import { useEffect, useRef } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const About = () => {
    const about = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                if (entries[0].isIntersecting) {
                    entries[0].target.classList.remove("translate-y-8");
                    entries[0].target.classList.remove("scale-90");
                    entries[0].target.classList.remove("opacity-0");
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );
        observer.observe(about.current as HTMLDivElement);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="p-4">
            <div
                ref={about}
                id="about"
                className="z-50 bg-white max-w-screen-lg rounded-2xl backdrop-blur-sm text-center translate-y-8 scale-90 opacity-0 duration-[700ms] my-7 p-4 mx-auto"
            >
                <h2 className="font-bold text-2xl mb-6">About Me</h2>
                <p>
                    I am a dedicated Full Stack Web Developer with over three years of experience in web development. I
                    specializes in the MERN stack, crafting fast and scalable applications. I'm passionate about
                    leveraging the latest technologies, and I excel in delivering high-quality solutions. I am driven by
                    an unwavering commitment to perfection. Whether optimizing user interfaces or designing robust
                    backend systems, I approach every project with meticulous attention to detail, making sure I exceed
                    expectations.
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
        </div>
    );
};

export default About;
