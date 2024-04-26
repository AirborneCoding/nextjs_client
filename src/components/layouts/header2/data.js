import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'home',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;


/* 
    "Navbar": {
        "Home": "Accueil",
        "Observatory": "Observatoire",
        "Statistics": "Statistiques",
        "Articles": "Articles",
        "Publications": "Publications",
        "Reports": "Rapports et réalisations",
        "Missions": "Missions",
        "Contact": "Contact",
        "Collaborations": "Collaboration et partenariats",
        "search": "rechercher",
        "title": "Observatoire National de la Délinquance"
    },
*/


/* 

  "Navbar": {
    "Home": "الرئيسية",
    "Observatory": "المرصد",
    "Statistics": "الإحصائيات",
    "Articles": "المقالات",
    "Publications": "الإصدارات",
    "Reports": "التقارير والإنجازات",
    "Missions": "المهام",
    "Contact": "اتصال",
    "Collaborations":"التعاون والشراكات",
    "search": "بحث",
    "title": "المرصد الوطني للإجرام"
  },
  
  */