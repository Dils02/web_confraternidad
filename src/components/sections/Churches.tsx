import { MapPin } from "lucide-react";
import { visitingChurches } from "../../config/event";

export default function Churches() {
    return (
        <section id="iglesias">
            <div className="section-container churches-grid">

                <div className="glass">
                    <span className="section-eyebrow">
                        <span className="gold-line" />
                        BIENVENIDOS A LOTA
                    </span>

                    <h2 className="churches-title">
                        Iglesias <span>de visita</span>
                    </h2>

                    <p className="churches-text">
                        Jóvenes de distintas ciudades se reúnen con nosotros
                        en esta confraternidad.
                    </p>

                    <ul className="church-list">
                        {visitingChurches.map((city) => (
                            <li key={city}>
                                <MapPin size={16} />
                                {city}
                            </li>
                        ))}
                    </ul>
                </div>

                <img
                    className="churches-poster"
                    src="/assets/images/bienvenidos-lota.jpeg"
                    alt="Bienvenidos a Lota. Confraternidad de jóvenes: Volviendo a las sendas antiguas"
                />

            </div>
        </section>
    );
}