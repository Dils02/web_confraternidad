import { pastor, directiva } from "../../config/event";
import type { TeamMember } from "../../types/event";

function MemberCard({ member, featured }: { member: TeamMember; featured?: boolean }) {
    return (
        <article className={`member-card ${featured ? "featured" : ""}`}>
            <div className="member-photo">
                <img src={member.photo} alt={member.name} loading="lazy" />
            </div>
            <h3>{member.name}</h3>
            <span>{member.role}</span>
        </article>
    );
}

export default function Leadership() {
    return (
        <section id="directiva">
            <div className="section-container">

                <div className="section-heading glass">
                    <span className="section-eyebrow">
                        <span className="gold-line" />
                        NUESTRO EQUIPO
                        <span className="gold-line" />
                    </span>

                    <h2>
                        Quienes <span>nos guían</span>
                    </h2>

                    <p>
                        Conoce al pastor y a la directiva del Cuerpo de
                        Jóvenes que organizan esta confraternidad.
                    </p>
                </div>

                <div className="leadership-pastor">
                    <MemberCard member={pastor} featured />
                </div>

                <div className="leadership-grid">
                    {directiva.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </div>

            </div>
        </section>
    );
}