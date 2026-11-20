import TopBanner from "../components/layout/TopBanner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import EventInfo from "../components/sections/EventInfo";
import AboutEvent from "../components/sections/AboutEvent";
import Schedule from "../components/sections/Schedule";
import Churches from "../components/sections/Churches";
import GalleryAccess from "../components/sections/GalleryAccess";
import Leadership from "../components/sections/Leadership";

export default function Home() {
    return (
        <>
            <Navbar />
            <TopBanner />

            <main>
                <Hero />
                <EventInfo />
                <AboutEvent />
                <Leadership />
                <Schedule />
                <Churches />
                <GalleryAccess />

                {/* Próxima sección:
                    Location
                */}
            </main>

            <Footer />
        </>
    );
}