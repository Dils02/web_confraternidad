
import { BookOpen } from "lucide-react";

export default function AboutEvent() {
    return (
        <section id="nosotros" className="about-section">
            <div className="about-container">

                <div className="about-emblem">
                    <img
                        src="/assets/images/logo-iep.jpeg"
                        alt="Iglesia Evangélica Pentecostal"
                    />
                </div>

                <div className="about-content glass">
                    <span className="section-eyebrow">
                        NUESTRA IDENTIDAD
                    </span>

                    <h2>
                        Jóvenes unidos por una misma <span>fe y esperanza</span>
                    </h2>

                    <p>
                        La Confraternidad de Jóvenes IEP Lota será un espacio
                        de encuentro entre hermanos de distintas iglesias de
                        nuestra misión, donde podremos compartir, fortalecer
                        nuestra comunión y crecer juntos en la fe.
                    </p>

                    <div className="about-verse">
                        <BookOpen size={25} />

                        <div>
                            <strong>Unidos en Cristo</strong>
                            <span>Una generación, una fe, un propósito.</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
