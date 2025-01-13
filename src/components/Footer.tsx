const Footer = () => {
    return (
        <footer className="px-4 py-12 bg-zinc-800 text-zinc-400">
            <h4 className="font-semibold text-center">&copy; Onah Victor {new Date(Date.now()).getFullYear()}</h4>
        </footer>
    );
};

export default Footer;
