
import { CalendarDays, MapPin, Users } from "lucide-react";

const information = [
    {
        icon: CalendarDays,
        title: "Tres días de encuentro",
        description: "20, 21 y 22 de noviembre de 2026",
    },
    {
        icon: MapPin,
        title: "Lugar de encuentro",
        description: "Iglesia Evangélica Pentecostal, Lota",
    },
    {
        icon: Users,
        title: "Una misma fe",
        description: "Jóvenes de distintas iglesias de la misión",
    },
];

export default function EventInfo() {
    return (
        <section className="event-info">
            <div className="section-container">

                <div className="section-heading glass">
                    <span className="section-eyebrow">NUESTRO ENCUENTRO</span>
                    <h2>Un tiempo especial de <span>confraternidad</span></h2>
                    <p>
                        Compartiremos momentos de fe, comunión y adoración
                        junto a jóvenes de distintas congregaciones.
                    </p>
                </div>

                <div className="info-grid">
                    {information.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article className="info-card" key={item.title}>
                                <div className="info-icon">
                                    <Icon size={27} />
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
