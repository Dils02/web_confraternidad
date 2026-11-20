import { useState } from "react";
import { Clock } from "lucide-react";
import { schedule } from "../../config/event";

function getInitialDay() {
    const today = new Date().toLocaleDateString("sv-SE");
    const index = schedule.findIndex((day) => day.iso === today);
    return index >= 0 ? index : 0;
}

export default function Schedule() {
    const [activeDay, setActiveDay] = useState(getInitialDay);
    const day = schedule[activeDay];

    return (
        <section id="programa">
            <div className="section-container">

                <div className="section-heading glass">
                    <span className="section-eyebrow">
                        <span className="gold-line" />
                        PROGRAMA
                    </span>

                    <h2>
                        Programa de <span>actividades</span>
                    </h2>

                    <p>
                        Tres días de comunión, adoración y estudio de la
                        Palabra. Selecciona el día para ver el detalle.
                    </p>
                </div>

                <div className="schedule-tabs" role="tablist">
                    {schedule.map((d, index) => (
                        <button
                            key={d.id}
                            role="tab"
                            aria-selected={index === activeDay}
                            className={`schedule-tab ${index === activeDay ? "active" : ""}`}
                            onClick={() => setActiveDay(index)}
                        >
                            <strong>{d.label}</strong>
                            <span>{d.date}</span>
                        </button>
                    ))}
                </div>

                <div className="schedule-list">
                    {day.items.map((item) => (
                        <article
                            key={`${item.time}-${item.title}`}
                            className={`schedule-item ${item.highlight ? "highlight" : ""}`}
                        >
                            <div className="schedule-time">
                                <Clock size={15} />
                                {item.time} hrs
                            </div>

                            <div className="schedule-body">
                                <h3>{item.title}</h3>

                                {item.details?.map((detail, i) => (
                                    <p key={i} className="schedule-detail">
                                        <strong>{detail.label}:</strong> {detail.value}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}