import { useEffect, useRef } from "react";
import { FaBugSlash } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscDatabase } from "react-icons/vsc";

const services = [
    {
        name: "Training",
        description: "I offer instructor-led training in a way that fits with the way you  work.",
        icon: <GiTeacher />,
        background: "bg-green-100"
    },
    {
        name: "Consulting",
        description:
            "I offer information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.",
        icon: <ImOffice />,
        background: "bg-blue-100"
    },
    {
        name: "Responsive Web design",
        description:
            "I help design mobile friendly, world class websites  that helps scales your business and helps user experience get better.",
        icon: <MdOutlineDesignServices />,
        background: "bg-pink-100"
    },
    {
        name: "Database Development",
        description:
            "Equipped with skills of developing and maintaining databases, I could help develop scalable and optimized databases for your organization.",
        icon: <VscDatabase />,
        background: "bg-orange-100"
    },
    {
        name: "Customer Software Development",
        description: "I help develop technical solutions in form of software that answer to the needs of customers.",
        icon: <RiCustomerService2Fill />,
        background: "bg-zinc-100"
    },
    {
        name: "Software Testing",
        description:
            "I can help test an already built software for bugs and loopholes, including giving advice on how to improve and secure the existing software against crashes and hack attacks.",
        icon: <FaBugSlash />,
        background: "bg-white"
    }
];

const Services = () => {
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                if (entries[0].isIntersecting) {
                    entries[0].target.classList.remove("opacity-0");
                    entries[0].target.classList.remove("scale-105");
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }
        );
        observer.observe(servicesRef.current as HTMLDivElement);

        return () => observer.disconnect();
    }, []);
    return (
        <div id="services" className="max-w-6xl m-auto px-4 py-14">
            <div className="text-white">
                <h2 className="font-bold text-2xl">My Services</h2>
                <p className="mb-4 font-semibold">Here is a break down of the services I render </p>
            </div>
            <div
                ref={servicesRef}
                className="grid grid-cols-3 opacity-0 duration-[600ms] scale-105 transition-all max-sm:grid-cols-1 max-md:grid-cols-2"
            >
                {services.map((service) => (
                    <Service {...service} />
                ))}
            </div>
        </div>
    );
};

const Service = ({ name, description, icon, background }: (typeof services)[number]) => {
    return (
        <div className={`${background} p-4`}>
            <span className="text-3xl text-slate-600">{icon}</span>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Services;
