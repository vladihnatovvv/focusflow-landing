import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="wrap">
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <Header />
            <main id="main" className="main">
                <Hero />
                <Features />
                <Steps />
                <Pricing />
                <Reviews />
            </main>
            <Footer />
        </div>
    );
};

export default App;
