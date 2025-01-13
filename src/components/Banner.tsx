import Circles from "./Circles";

const Banner = () => {
    return (
        <header className="flex justify-center items-center px-4 py-28 relative mt-[72px]">
            <Circles />
            <div className="flex flex-col gap-4 text-center">
                <div className="z-10 text-white">
                    <p className="font-semibold text-xl">HI THERE</p>
                    <h1 className="text-6xl font-bold">I AM ONAH VICTOR</h1>
                    <p className="text-3xl font-extrabold">A Full-stack Web Developer</p>
                </div>
            </div>
        </header>
    );
};

export default Banner;
