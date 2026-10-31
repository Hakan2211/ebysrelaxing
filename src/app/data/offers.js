import { Laptop, MapPin } from 'lucide-react';

// Single source of truth for the three offers (home price cards + Leistungen page).
const CALENDLY_PARAMS =
  'background_color=fff7f2&text_color=6a604d&primary_color=6a604d';

export const offers = [
  {
    id: 'gruppen',
    title: 'Gruppen-Special',
    price: '29€',
    format: 'Onlineworkshop',
    duration: '60 Minuten',
    location: 'Online',
    icon: Laptop,
    image: { src: '/ebru_visuals3.jpg', alt: 'Klangschalen und Kerzen' },
    features: ['60 Minuten', 'Yoga & PMR', 'EFT & Atem', 'Meditation & Klang'],
    url: `https://calendly.com/ebysrelaxing/gruppenevent?${CALENDLY_PARAMS}`,
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing Angebot',
    subtitle: 'Betriebliche Gesundheitsförderung',
    price: '149€',
    format: 'Präsenzkurs',
    duration: '60 Minuten',
    location: 'Raum Frankfurt',
    icon: MapPin,
    featured: true,
    image: { src: '/ebru3.jpg', alt: 'Ebru zeigt eine Dehnübung am Bürostuhl' },
    features: [
      '60 Minuten',
      'Raum Frankfurt',
      'In Ihren Firmenräumlichkeiten',
      'Angepasst an Ihre Bedürfnisse',
    ],
    url: `https://calendly.com/ebysrelaxing/business-yoga?${CALENDLY_PARAMS}`,
  },
  {
    id: 'astrologie',
    title: 'Astrologische Psychologie',
    price: '219€',
    format: 'Onlineberatung',
    duration: '75 Minuten',
    location: 'Online',
    icon: Laptop,
    image: { src: '/planet.png', alt: 'Illustration eines Planeten' },
    features: [
      '75 Minuten',
      'Geburtshoroskop',
      'Fünf-Schichten-Modell Deutung',
      'Alterspunkt-Analyse',
    ],
    url: `https://calendly.com/ebysrelaxing/astrologie?${CALENDLY_PARAMS}`,
  },
];

export const offerById = Object.fromEntries(offers.map((o) => [o.id, o]));
