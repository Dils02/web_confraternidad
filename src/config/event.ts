import type { ScheduleDay } from "../types/event";


export const eventConfig = {
    name: "Confraternidad de Jóvenes IEP Lota",

    date: {
        start: "2026-11-20T00:00:00",
        end: "2026-11-22T23:59:59",
        label: "20, 21 y 22 de noviembre de 2026",
    },

    location: {
        name: "Iglesia Evangélica Pentecostal",
        city: "Lota, Chile",
        address: "",
        mapsUrl: "",
    },

    identity: {
        logo: "/assets/images/logo-iep.png",
        primaryColor: "#102747",
        secondaryColor: "#24466D",
        accentColor: "#C6A04A",
    },

    multimedia: {
        driveUrl: "",
        qrImage: "/qr/qr-galeria.png",
    },

    bibleVerse: {
        text: "",
        reference: "",
    },
};

export const visitingChurches = [
    "Iquique",
    "Chillán",
    "Penco",
    "San Pedro de la Paz",
    "Lebu",
    "Laja",
    "Villarrica",
    "Coelemu",
    "Chiguayante",
    "Limache",
];

export const schedule: ScheduleDay[] = [
    {
        id: "viernes",
        iso: "2026-11-20",
        label: "Viernes",
        date: "20 de noviembre",
        items: [
            {
                time: "17:00",
                title: "Recepción de las delegaciones en el Templo Central",
                details: [
                    { label: "Luego", value: "Once en los comedores de la Iglesia" },
                ],
            },
            {
                time: "19:00",
                title: "Reunión General en el Templo Central",
                highlight: true,
                details: [
                    { label: "Preside", value: "Iglesia de Lebu" },
                    { label: "Acompañan", value: "Iglesia de Coelemu y San Pedro de la Paz" },
                    { label: "Cantan", value: "Coro Oficial y Cuarteto Vocal Jireh" },
                    { label: "Al término", value: "Distribución de las visitas a los hogares" },
                ],
            },
        ],
    },
    {
        id: "sabado",
        iso: "2026-11-21",
        label: "Sábado",
        date: "21 de noviembre",
        items: [
            { time: "08:00 - 08:30", title: "Desayuno en los hogares" },
            { time: "09:00 - 09:45", title: "Oración en el Templo Central" },
            {
                time: "10:00",
                title: "Reunión General en el Templo Central",
                highlight: true,
                details: [
                    { label: "Preside", value: "Iglesia de Chillán" },
                    { label: "Acompaña", value: "Iglesia de Laja" },
                ],
            },
            { time: "12:30 - 14:00", title: "Almuerzo en los comedores de la Iglesia" },
            {
                time: "14:30 - 15:30",
                title: "Estudio Jóvenes “Volviendo a las Sendas Antiguas”",
                details: [{ label: "Preside", value: "Iglesia de Chiguayante" }],
            },
            { time: "16:00", title: "Predicación desde el Parque de Lota" },
            { time: "17:45", title: "Once en los comedores del Templo Central" },
            {
                time: "19:00",
                title: "Reunión General en el Templo Central",
                highlight: true,
                details: [
                    { label: "Preside", value: "Iglesia de Iquique" },
                    { label: "Acompañan", value: "Iglesia de Limache y Penco" },
                    { label: "Cantan", value: "Coro de Niños (antes de la exhortación de la Palabra de Dios)" },
                    { label: "Cantan", value: "Coro de Juventud (después de la exhortación de la Palabra de Dios)" },
                ],
            },
        ],
    },
    {
        id: "domingo",
        iso: "2026-11-22",
        label: "Domingo",
        date: "22 de noviembre",
        items: [
            { time: "08:00 - 08:30", title: "Desayuno en los hogares" },
            {
                time: "09:00 - 09:45",
                title: "Estudio Jóvenes “Volviendo a las Sendas Antiguas”",
                details: [{ label: "Preside", value: "Iglesia de Limache" }],
            },
            {
                time: "10:00",
                title: "Reunión General en el Templo Central",
                highlight: true,
                details: [
                    { label: "Preside", value: "Iglesia de Villarrica" },
                    { label: "Acompañan", value: "Jefes de las delegaciones de Iquique, Chillán, Chiguayante y Lebu" },
                    { label: "Cantan", value: "Todas las delegaciones, incluyendo los Jóvenes de Lota" },
                ],
            },
            { time: "12:30 - 14:00", title: "Almuerzo en los comedores de la Iglesia" },
            { time: "15:00", title: "Retorno de las delegaciones a sus respectivas iglesias" },
        ],
    },
];

export const galleryUrl =
    "https://drive.google.com/drive/folders/1DAukPMeb2Y1GI7Pdg23jY4CJKKOfMWT9?usp=sharing";