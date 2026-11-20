
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Programa", href: "#programa" },
    { label: "Iglesias", href: "#iglesias" },
    { label: "Galería", href: "#galeria" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#inicio" className="brand" onClick={closeMenu}>
                    <img
                        src="/assets/images/logo-iep.jpeg"
                        alt="Logo Iglesia Evangélica Pentecostal"
                        className="brand-logo"
                    />

                    <div className="brand-text">
                        <strong>IEP LOTA</strong>
                        <span>CUERPO DE JÓVENES</span>
                    </div>

                    <img
                        src="/assets/images/logo-jovenes.png"
                        alt="Escudo Amigos de Cristo"
                        className="brand-shield"
                    />
                </a>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#galeria"
                        className="nav-cta"
                        onClick={closeMenu}
                    >
                        Ver recuerdos
                    </a>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>

            </div>
        </header>
    );
}
