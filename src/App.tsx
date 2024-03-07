import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<About />
			<Skills />
			<Services />
			<Projects />
			<Contact />
            <Footer />
		</>
	);
}

export default App;
