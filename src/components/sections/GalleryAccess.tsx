import { Camera, ExternalLink } from "lucide-react";
import { galleryUrl } from "../../config/event";

export default function GalleryAccess() {
    return (
        <section id="galeria">
            <div className="section-container">
                <div className="gallery-card glass">

                    <span className="section-eyebrow">
                        <span className="gold-line" />
                        GALERÍA
                        <span className="gold-line" />
                    </span>

                    <h2 className="gallery-title">
                        Revive los <span>recuerdos</span>
                    </h2>

                    <p className="gallery-text">
                        Fotos y videos de la confraternidad, compartidos para
                        todos los jóvenes de las iglesias de la misión. Toca
                        el botón para verlos.
                    </p>

                    <a
                        href={galleryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary gallery-button"
                    >
                        <Camera size={18} />
                        Ver fotos y videos
                        <ExternalLink size={15} />
                    </a>

                </div>
            </div>
        </section>
    );
}