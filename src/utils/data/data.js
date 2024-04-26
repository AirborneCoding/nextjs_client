import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
export const sublinks = [
    {
        page: '/',
        links: [
            {
                label: 'payment', icon: <FaCreditCard />, url: '/products'
            },
            {
                label: 'terminal', icon: <FaCreditCard />, url: '/products'
            },
            { label: 'connect', icon: <FaCreditCard />, url: '/products' },
        ],
    },
    {
        page: 'observatory',
        links: [
            {
                label: 'plugins', icon: <FaBook />, url: '/products'
            },
            {
                label: 'libraries', icon: <FaBook />, url: '/products'
            },
            {
                label: 'help', icon: <FaBook />, url: '/products'
            },
            { label: 'billing', icon: <FaBook />, url: '/products' },
        ],
    },
    {
        page: 'statistics',
        links: [],
    },
    {
        page: 'articles',
        links: [
            {
                label: 'about', icon: <FaBriefcase />, url: '/products'
            },
            { label: 'customers', icon: <FaBriefcase />, url: '/products' },
        ],
    },
    {
        page: 'publications',
        links: [],
    },
    {
        page: 'collaborations',
        links: [],
    },
    {
        page: 'missions',
        links: [],
    }
];




// ----------

export const sublinks2 = [
    {
        target: "home",
        page: { fr: 'Accueil', ar: 'الرئيسية' },
        links: [
            // { label: { fr: 'Présentation', ar: 'تقديم' }, url: '/content/presentation' },
            // { label: { fr: 'Structuration organisationnelle', ar: 'الهيكلة النتظيمية' }, url: '/Structuration organisationnelle' },
            // { label: { fr: 'Tâches de référence', ar: 'المهام المرجعية' }, icon: <FaCreditCard />, url: '/Tâches de référence' },
            // { label: { fr: 'Tâches', ar: 'المهام' }, icon: <FaCreditCard />, url: '/Tâches' },
        ],
    },
    {
        target: "observatory",
        page: { fr: 'Observatoire', ar: 'المرصد' },
        links: [
            // { label: { fr: "Présentation de l'observatoire", ar: 'تقديم المرصد' }, url: '/Tâches' },
            // { label: { fr: 'Tâches et spécialisations', ar: 'المهام والاختصاصات' }, url: '/Tâches' },
            // { label: { fr: 'Textes de référence', ar: 'النصوص المرجعية' }, url: 'observatory/texts' },
            { label: { fr: "Présentation de l'observatoire", ar: 'تقديم المرصد' }, url: '/Tâches' },
            { label: { fr: 'Tâches et spécialisations', ar: 'المهام والاختصاصات' }, url: '/Tâches' },
            { label: { fr: 'Textes de référence', ar: 'النصوص المرجعية' }, url: 'observatory/texts' },
        ],
    },
    {
        target: "statistics",
        page: { fr: 'Statistiques', ar: 'الإحصائيات' },
        links: [],
    },
    {
        target: "articles",
        page: { fr: 'Articles', ar: 'المقالات' },
        links: [],
    },
    {
        target: "publications",
        page: { fr: 'Publications', ar: 'الإصدارات' },
        links: [],
    },
    {
        target: "collaborations",
        page: { fr: 'Collaboration et partenariats', ar: 'التعاون والشراكات' },
        links: [],
    },
    // {
    //     target: "missions",
    //     page: { fr: 'Missions', ar: 'المهام' },
    //     links: [],
    // },
    {
        target: "videos",
        page: { fr: 'Ouverture médiatique', ar: 'التغطيات الإعلامية' },
        links: [],
    },
];
