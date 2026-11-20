import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import EventInfo from "../components/sections/EventInfo";
import AboutEvent from "../components/sections/AboutEvent";
import Schedule from "../components/sections/Schedule";
import Churches from "../components/sections/Churches";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <EventInfo />
                <AboutEvent />
                <Schedule />
                <Churches />

                {/* Próximas secciones:
                    Schedule
                    GalleryAccess
                    Location
                */}
            </main>

            <Footer />
        </>
    );
}