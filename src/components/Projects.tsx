import { useEffect, useRef } from "react";

const projects = [
    {
        name: "Ankr Airdrop Telegram Bot",
        link: "https://t.me/ankr_airdrop_bot",
        imageUrl: "/images/ankr-airdrop.png"
    },
    {
        name: "Lendsqr Dashboard",
        link: "https://victor-onah-lendsqr-fe-test.onrender.com/dashboard",
        imageUrl: "/images/lendsqr.png"
    },
    {
        name: "DoWell E-commerce Shop",
        link: "https://victor-onah.github.io/dowell-shop/",
        imageUrl: "/images/dowell-shop.png"
    },
    {
        name: "Naija Quotes",
        link: "https://naija-quotes.onrender.com/",
        imageUrl: "/images/naija-quotes.png"
    },
    {
        name: "EthVault Crypto Wallet",
        link: "https://ethvault.onrender.com/.com",
        imageUrl: "/images/ethvault.png"
    },
    {
        name: "Simple Text Editor",
        link: "https://simple-rich-text-editor.onrender.com",
        imageUrl: "/images/rich-text-editor.png"
    },
    {
        name: "Password Generator",
        link: "https://password-generator-7coh.onrender.com",
        imageUrl: "/images/password-generator.png"
    }
];

const Projects = () => {
    return (
        <div className="p-4">
            <div id="projects" className="bg-purple-500 text-white max-w-screen-xl rounded-xl">
                <div className="max-w-6xl mx-auto px-4 py-7 space-y-4">
                    <div>
                        <h2 className="font-bold text-2xl">My Projects</h2>
                        <p>Here are some projects I've worked on</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2">
                        {projects.map((project) => (
                            <Project key={project.name} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Project = ({ imageUrl, link, name }: (typeof projects)[number]) => {
    const projectRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                if (entries[0].isIntersecting) {
                    entries[0].target.classList.remove("opacity-0");
                    entries[0].target.classList.remove("scale-90");
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );
        observer.observe(projectRef.current as HTMLAnchorElement);

        return () => observer.disconnect();
    }, []);

    return (
        <a
            ref={projectRef}
            href={link}
            className="hover:bg-purple-800/30 bg-purple-800 duration-[700ms] shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between rounded-2xl opacity-0 scale-90"
        >
            <img className="h-full block flex-1" src={imageUrl} alt={name} />
            <h3 className="font-semibold p-3 text-center">{name}</h3>
        </a>
    );
};

export default Projects;
