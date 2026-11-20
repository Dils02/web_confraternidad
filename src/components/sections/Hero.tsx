
import { motion } from "motion/react";
import { ArrowDown, CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section id="inicio" className="hero">

            <div className="hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-eyebrow">
                        <span className="gold-line" />
                        IGLESIA EVANGÉLICA PENTECOSTAL
                    </span>

                    <h1>
                        CONFRATERNIDAD
                        <span> DE JÓVENES</span>
                    </h1>

                    <div className="hero-title-detail">
                        <span />
                        <strong>IEP LOTA</strong>
                        <span />
                    </div>

                    <p className="hero-description">
                        Tres días de comunión, adoración y crecimiento
                        espiritual. Unidos en Cristo, compartiendo nuestra fe
                        como una generación con propósito.
                    </p>

                    <div className="hero-details">

                        <div className="hero-detail">
                            <CalendarDays size={20} />
                            <span>20, 21 y 22 de noviembre, 2026</span>
                        </div>

                        <div className="hero-detail">
                            <MapPin size={20} />
                            <span>Lota, Región del Biobío, Chile</span>
                        </div>

                    </div>

                    <div className="hero-actions">
                        <a href="#programa" className="button-primary">
                            Conoce el programa
                        </a>

                        <a href="#nosotros" className="button-secondary">
                            Conoce más
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    className="hero-logo-container"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="hero-logo-glow" />

                    <div className="hero-logo-frame">
                        <img
                            src="/assets/images/logo-jovenes.jpeg"
                            alt="Escudo del Cuerpo de Jóvenes Amigos de Cristo de Lota"
                            className="hero-logo"
                        />
                    </div>

                    <div className="hero-logo-caption">
                        <span>AMIGOS DE CRISTO</span>
                        <span>CUERPO DE JÓVENES · LOTA</span>
                    </div>
                </motion.div>

            </div>

            <a href="#nosotros" className="hero-scroll">
                <span>DESCUBRE MÁS</span>
                <ArrowDown size={17} />
            </a>

        </section>
    );
}
