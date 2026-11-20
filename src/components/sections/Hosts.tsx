import { MapPin } from "lucide-react";
import { hosts } from "../../config/event";

export default function Hosts() {
    return (
        <section id="anfitriones">
            <div className="section-container">

                <div className="section-heading glass">
                    <span className="section-eyebrow">
                        <span className="gold-line" />
                        ANFITRIONES
                        <span className="gold-line" />
                    </span>

                    <h2>
                        Anfitriones de <span>iglesias invitadas</span>
                    </h2>

                    <p>
                        Hermanos que reciben y acompañan a cada delegación
                        durante la confraternidad.
                    </p>
                </div>

                <div className="hosts-grid">
                    {hosts.map((item) => (
                        <article key={item.church} className="host-card">
                            <h3>
                                <MapPin size={17} />
                                {item.church}
                            </h3>

                            <dl>
                                <div>
                                    <dt>Anfitrión</dt>
                                    <dd>Hno. {item.host}</dd>
                                </div>

                                <div>
                                    <dt>Coanfitrión</dt>
                                    <dd>Hno. {item.cohost}</dd>
                                </div>
                            </dl>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}