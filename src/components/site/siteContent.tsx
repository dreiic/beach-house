/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "mne" | "eng";

const siteContent = {
  mne: {
    nav: {
      brand: "Bungalovi",
      suffix: "Resort Home",
      houses: "Kuće",
      experience: "Odmor",
      gallery: "Galerija",
      location: "Lokacija",
      reserve: "Rezerviši",
      languageLabel: "Promijeni jezik",
    },
    hero: {
      eyebrow: "Ulcinj · Velika plaža",
      title: "Bungalovi Resort Home",
      emphasis: "na samoj obali mora.",
      text: "Probudite se uz šum talasa i uživajte u pogledu na more direktno sa prostrane terase.",
      primary: "Pošalji upit",
      secondary: "Pogledaj kuće",
      metaLeft: "Parking · Wi-Fi",
      metaCenter: "Skroluj za više",
      metaRight: "Plaža · Borova šuma",
    },
    trust: {
      items: [
        {
          k: "01",
          t: "Na obali mora",
          d: "Smještaj direktno uz plažu, bez potrebe za vožnjom.",
        },
        {
          k: "02",
          t: "Borova šuma",
          d: "Prirodna hladovina, mir i privatnost tokom cijelog dana.",
        },
        {
          k: "03",
          t: "Za 4–6 osoba",
          d: "Dvije spavaće sobe, kupatilo i prostrana terasa.",
        },
        {
          k: "04",
          t: "Komfor za boravak",
          d: "Klima, frižider, Wi-Fi, parking i ljetnja kuhinja.",
        },
      ],
    },
    bungalows: {
      eyebrow: "Smještaj · 4–6 osoba",
      title: "Kuće uz more.",
      emphasis: "Mir za cijelu porodicu.",
      intro:
        "Kuće su uređene za prijatan i opuštajući boravak, u hladovini borove šume i nekoliko koraka od plaže.",
      rows: [
        {
          n: "01",
          name: "Kuća na obali",
          capacity: "4–6 osoba · dvije spavaće sobe",
          price: "direktan upit",
          note: "Idealno mjesto za miran porodičan odmor, sa kupatilom, udobnim prostorom za boravak i morem odmah ispred Vas.",
        },
        {
          n: "02",
          name: "Prostrana terasa",
          capacity: "Pogled na more · baldahin zavjese",
          price: "privatnost i hlad",
          note: "Terasa je zaklonjena baldahin zavjesama, stvorena za jutarnju kafu, čitanje i večernji odmor uz zvuk talasa.",
        },
        {
          n: "03",
          name: "Dvorište i sadržaji",
          capacity: "Ograđeno dvorište · parking",
          price: "za bezbrižan boravak",
          note: "Gostima su na raspolaganju ljetnja uslužna kuhinja, osnovno posuđe, parking i sigurno dvorište za igru djece.",
        },
      ],
      cta: "Pošalji upit",
    },
    experience: {
      eyebrow: "Iskustvo boravka",
      title: "Mir koji osjetite",
      emphasis: "od prvog trenutka",
      paragraphs: [
        "Smješteni tik uz more, u hladovini borove šume, bungalovi nude rijedak spoj prirode, tišine i privatnosti.",
        "Jutra počinju uz zvuk talasa, a dan protiče bez žurbe – između plaže, odmora i trenutaka koji ostaju.",
        "Prostor je osmišljen za potpunu udobnost, bilo da dolazite kao par, porodica ili društvo.",
      ],
      quote: "Ovdje vrijeme uspori – i to je ono što ga čini posebnim.",
      note: "Idealno za one koji žele mir, prirodu i osjećaj potpunog odmora, bez kompromisa.",
      terraceTitle: "Terasa i privatnost",
      terraceText:
        "Prostrana terasa sa zavjesama pruža intimu i mir – savršeno mjesto za jutarnju kafu ili večernji odmor, okruženi prirodom i tišinom.",
      details: [
        ["Kapacitet", "4–6 osoba"],
        ["Raspored", "dvije odvojene spavaće sobe"],
        ["Udobnost", "klima, frižider i Wi‑Fi"],
        ["Dvorište", "ograđeno i pogodno za djecu"],
        ["Kuhinja", "ljetnja uslužna kuhinja"],
        ["Parking", "obezbijeđen za goste"],
      ],
      imageAltTop: "Terasa bungalova uz more",
      imageAltBottom: "Dvorište u borovoj šumi",
      imageAltSmall: "Jutarnji ambijent terase",
    },
    testimonials: {
      eyebrow: "Za porodice · miran boravak",
      title: "Šta Vas očekuje.",
      note: "Priroda · plaža · privatnost",
      quotes: [
        {
          text: "Smještaj na samoj obali mora, uz mir borove šume.",
          author: "Lokacija",
          place: "Velika plaža",
        },
        {
          text: "Prostrana terasa za jutarnju kafu i večernji odmor.",
          author: "Terasa",
          place: "Pogled na more",
        },
        {
          text: "Ograđeno dvorište i sadržaji za bezbrižnu igru djece.",
          author: "Porodica",
          place: "Sigurno dvorište",
        },
      ],
    },
    gallery: {
      eyebrow: "Galerija",
      title: "More, hlad",
      emphasis: "i miran ritam odmora.",
      alt: [
        "Velika plaža u zlatnom satu",
        "Palme i večernje svjetlo",
        "Terasa i morski povjetarac",
        "Detalji odmora na pijesku",
        "Bungalov u borovoj šumi",
        "Veče uz more",
      ],
    },
    how: {
      title: "Rezervacija",
      emphasis: "direktno i jednostavno.",
      text: "Pošaljite nam termin i broj gostiju. Odgovaramo lično, sa svim informacijama za Vaš boravak.",
      steps: [
        {
          n: "01",
          t: "Pošaljite upit",
          d: "Navedite datume, broj osoba i sve posebne napomene za boravak.",
        },
        {
          n: "02",
          t: "Dobijte odgovor",
          d: "Javljamo dostupnost, detalje smještaja i uslove direktne rezervacije.",
        },
        {
          n: "03",
          t: "Uživajte uz more",
          d: "Dolazite direktno na plažu, bez gužve i bez potrebe za vožnjom.",
        },
      ],
    },
    location: {
      eyebrow: "Lokacija · Ulcinj",
      title: "Velika plaža,",
      emphasis: "na samoj obali mora.",
      text: "Prirodno okruženje, borova šuma i blizina plaže čine ovo mjesto savršenim izborom za odmor daleko od gradske gužve.",
      facts: [
        ["Do plaže", "nekoliko koraka"],
        ["Restorani i marketi", "u blizini"],
        ["Ulcinj stari grad", "12 min autom"],
        ["Ada Bojana", "10 min autom"],
        ["Parking", "obezbijeđen"],
      ],
      mapCta: "Otvori mapu →",
    },
    inquiry: {
      eyebrow: "Upit",
      title: "Rezervišite boravak",
      emphasis: "direktno sa nama.",
      text: "Za dostupnost i sve detalje možete nas kontaktirati telefonom, Instagramom ili poslati kratak upit.",
      thanksTitle: "Hvala.",
      thanksText: "WhatsApp razgovor je otvoren sa popunjenom porukom.",
      whatsappIntro: "Poštovani, želim poslati upit za Bungalovi Resort Home.",
      fields: {
        name: "Ime i prezime",
        namePlaceholder: "Ana Jovanović",
        email: "Email",
        emailPlaceholder: "ana@example.com",
        arrival: "Dolazak",
        departure: "Odlazak",
        guests: "Broj gostiju",
        preference: "Napomena",
        preferencePlaceholder: "Porodični odmor · djeca · terasa",
        message: "Poruka",
        messagePlaceholder: "Datumi, broj osoba ili dodatne napomene...",
      },
      privacy: "Vaše podatke ne dijelimo. Odgovaramo direktno i lično.",
      submit: "Pošalji upit",
    },
    footer: {
      title: "Bungalovi",
      emphasis: "Resort Home.",
      text: "Smještaj na samoj obali mora, u hladovini borove šume na Velikoj plaži u Ulcinju.",
      contact: "Kontakt",
      phone: "069 634 6761",
      phoneHref: "tel:+382696346761",
      messaging: "Viber · WhatsApp",
      address1: "Velika plaža, Ulcinj",
      address2: "Crna Gora",
      follow: "Instagram",
      facebook: "Facebook",
      facebookHref: "https://www.facebook.com/OdmoruUlcinju/?ref=NONE_xav_ig_profile_page_web#",
      map: "Mapa",
      bottom: "Priroda · plaža · komfor",
    },
  },
  eng: {
    nav: {
      brand: "Bungalovi",
      suffix: "Resort Home",
      houses: "Houses",
      experience: "Stay",
      gallery: "Gallery",
      location: "Location",
      reserve: "Reserve",
      languageLabel: "Change language",
    },
    hero: {
      eyebrow: "Ulcinj · Velika Plaža",
      title: "Bungalovi Resort Home",
      emphasis: "right on the shore.",
      text: "Wake up to the sound of waves and enjoy a sea view directly from your spacious terrace.",
      primary: "Send inquiry",
      secondary: "View houses",
      metaLeft: "Parking · Wi-Fi",
      metaCenter: "Scroll to explore",
      metaRight: "Beach · Pine forest",
    },
    trust: {
      items: [
        {
          k: "01",
          t: "On the shore",
          d: "Beachfront accommodation with no need to drive to the sea.",
        },
        {
          k: "02",
          t: "Pine forest",
          d: "Natural shade, calm and privacy throughout the day.",
        },
        {
          k: "03",
          t: "For 4–6 guests",
          d: "Two separate bedrooms, a bathroom and a spacious terrace.",
        },
        {
          k: "04",
          t: "Easy comfort",
          d: "A/C, fridge, Wi-Fi, parking and a summer service kitchen.",
        },
      ],
    },
    bungalows: {
      eyebrow: "Stay · 4–6 guests",
      title: "Houses by the sea.",
      emphasis: "Quiet for the whole family.",
      intro:
        "The houses are arranged for a comfortable, relaxed stay in the shade of the pines, just steps from the beach.",
      rows: [
        {
          n: "01",
          name: "Shore House",
          capacity: "4–6 guests · two bedrooms",
          price: "direct inquiry",
          note: "A peaceful family stay with a bathroom, comfortable living space and the sea right in front of you.",
        },
        {
          n: "02",
          name: "Spacious Terrace",
          capacity: "Sea view · canopy curtains",
          price: "privacy and shade",
          note: "The terrace is sheltered with canopy curtains, made for morning coffee, reading and slow evenings by the waves.",
        },
        {
          n: "03",
          name: "Yard and Amenities",
          capacity: "Fenced yard · parking",
          price: "easy family stay",
          note: "Guests have access to a summer service kitchen, basic dishes, parking and a safe fenced yard for children.",
        },
      ],
      cta: "Send inquiry",
    },
    experience: {
      eyebrow: "Stay experience",
      title: "A calm you feel",
      emphasis: "from the first moment",
      paragraphs: [
        "Set right by the sea, in the shade of the pine forest, the bungalows offer a rare mix of nature, quiet and privacy.",
        "Mornings begin with the sound of waves, and the day moves slowly between the beach, rest and moments that stay with you.",
        "The space is designed for complete comfort, whether you arrive as a couple, a family or with friends.",
      ],
      quote: "Here, time slows down – and that is what makes it special.",
      note: "Ideal for those who want peace, nature and the feeling of complete rest, without compromise.",
      terraceTitle: "Terrace and privacy",
      terraceText:
        "The spacious terrace with curtains gives intimacy and calm – a perfect place for morning coffee or an evening rest, surrounded by nature and quiet.",
      details: [
        ["Capacity", "4–6 guests"],
        ["Layout", "two separate bedrooms"],
        ["Comfort", "A/C, fridge and Wi‑Fi"],
        ["Yard", "fenced and child-friendly"],
        ["Kitchen", "summer service kitchen"],
        ["Parking", "provided for guests"],
      ],
      imageAltTop: "Bungalow terrace by the sea",
      imageAltBottom: "Yard in the pine forest",
      imageAltSmall: "Morning terrace atmosphere",
    },
    testimonials: {
      eyebrow: "For families · peaceful stays",
      title: "What awaits you.",
      note: "Nature · beach · privacy",
      quotes: [
        {
          text: "Beachfront accommodation in the calm of the pine forest.",
          author: "Location",
          place: "Velika Plaža",
        },
        {
          text: "A spacious terrace for morning coffee and quiet evenings.",
          author: "Terrace",
          place: "Sea view",
        },
        {
          text: "A fenced yard and outdoor space for children to play safely.",
          author: "Family",
          place: "Safe yard",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Sea, shade",
      emphasis: "and an easy holiday rhythm.",
      alt: [
        "Velika Plaža at golden hour",
        "Palms in evening light",
        "Terrace and sea breeze",
        "Holiday details on the sand",
        "Bungalow in the pine forest",
        "Evening by the sea",
      ],
    },
    how: {
      title: "Booking",
      emphasis: "direct and simple.",
      text: "Send us your dates and number of guests. We reply personally with everything you need for your stay.",
      steps: [
        {
          n: "01",
          t: "Send inquiry",
          d: "Share your dates, number of guests and any notes for your stay.",
        },
        {
          n: "02",
          t: "Get a reply",
          d: "We send availability, accommodation details and direct booking terms.",
        },
        {
          n: "03",
          t: "Enjoy the sea",
          d: "Arrive directly at the beach, away from the crowd and without extra driving.",
        },
      ],
    },
    location: {
      eyebrow: "Location · Ulcinj",
      title: "Velika Plaža,",
      emphasis: "right on the shore.",
      text: "The natural setting, pine forest and beachside position make this a calm choice away from city noise.",
      facts: [
        ["To the beach", "a few steps"],
        ["Restaurants and markets", "nearby"],
        ["Ulcinj old town", "12 min by car"],
        ["Ada Bojana", "10 min by car"],
        ["Parking", "provided"],
      ],
      mapCta: "Open map →",
    },
    inquiry: {
      eyebrow: "Inquiry",
      title: "Reserve your stay",
      emphasis: "directly with us.",
      text: "For availability and details, contact us by phone, Instagram or send a short inquiry.",
      thanksTitle: "Thank you.",
      thanksText: "A WhatsApp chat has opened with your message ready to send.",
      whatsappIntro: "Hello, I would like to send an inquiry for Bungalovi Resort Home.",
      fields: {
        name: "Your name",
        namePlaceholder: "Anna Jovanović",
        email: "Email",
        emailPlaceholder: "anna@example.com",
        arrival: "Arrival",
        departure: "Departure",
        guests: "Guests",
        preference: "Note",
        preferencePlaceholder: "Family stay · children · terrace",
        message: "Message",
        messagePlaceholder: "Dates, number of guests or any additional notes...",
      },
      privacy: "We never share your details. We reply directly and personally.",
      submit: "Send inquiry",
    },
    footer: {
      title: "Bungalovi",
      emphasis: "Resort Home.",
      text: "Beachfront accommodation in the shade of the pine forest on Velika Plaža in Ulcinj.",
      contact: "Contact",
      phone: "069 634 6761",
      phoneHref: "tel:+382696346761",
      messaging: "Viber · WhatsApp",
      address1: "Velika Plaža, Ulcinj",
      address2: "Montenegro",
      follow: "Instagram",
      facebook: "Facebook",
      facebookHref: "https://www.facebook.com/OdmoruUlcinju/?ref=NONE_xav_ig_profile_page_web#",
      map: "Map",
      bottom: "Nature · beach · comfort",
    },
  },
} as const;

type SiteContent = (typeof siteContent)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("mne");

  useEffect(() => {
    const stored = window.localStorage.getItem("site-language");
    if (stored === "mne" || stored === "eng") setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "eng" ? "en" : "sr-ME";
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("site-language", nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: siteContent[language],
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useSiteContent() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useSiteContent must be used inside LanguageProvider");
  return value;
}
