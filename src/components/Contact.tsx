import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col justify-center items-center gap-1 px-4 py-12 text-white">
            <div className="text-center">
                <h2 className="font-bold text-3xl">Get In Touch</h2>
                <p>Need any of my services?</p>
                <p>Don't hesitate to reach out to me here or on any of my social media handles.</p>
            </div>
            <div className="flex gap-4 my-4 text-center">
                <a
                    href="https://linkedin.com/in/victor-onah-066563274/"
                    className="h-8 w-8 flex justify-center items-center rounded-full border border-white"
                >
                    <IoLogoLinkedin />
                </a>
                <a
                    href="https://twitter.com/__allAboutJS"
                    className="h-8 w-8 flex justify-center items-center rounded-full border border-white"
                >
                    <IoLogoTwitter />
                </a>
            </div>
            <div>
                <div className="flex items-center gap-4 hover:underline">
                    <span>
                        <GoMail />
                    </span>
                    <a href="mailto:victoronah.dev@gmail.com">victoronah.dev@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 hover:underline">
                    <span>
                        <BsTelephone />
                    </span>
                    <a href="tel:+2349035495410">+234 903 549 5410</a>
                </div>
                <div className="flex items-center gap-4 hover:underline">
                    <span>
                        <BsWhatsapp />
                    </span>
                    <a href="https://wa.me/2349035495410">+234 903 549 5410</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
