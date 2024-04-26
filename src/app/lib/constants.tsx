import EmailSettings from "../components/settings/EmailSettings";
import { DirectoryInterface } from "../interfaces";
import { dashboardNavLink, link, option, settingType } from "../types";
import {
   AccountTreeOutlined,
   BarChart,
   BookOutlined,
   BookmarkAddOutlined,
   Brush,
   Business,
   BusinessCenter,
   EventAvailable,
   Fireplace,
   Hotel,
   LocalHospital,
   MonetizationOn,
   Money,
   MusicNote,
   Pages,
   Person,
   Piano,
   Restaurant,
   School,
   Settings,
   Shop,
   Sports,
} from "@mui/icons-material";

export const navLinks: link[] = [
   {
      label: "Home",
      path: "/",
   },
   {
      label: "Inc Connect",
      path: "/inc-connect",
   },
   {
      label: "Inc Office",
      path: "/inc-office",
   },
   {
      label: "About",
      path: "/about",
   },
];

export const zIndices = {
   header: 99,
   mobileNavigation: 100,
};

export const primaryColor = "#b58536";
export const primaryDarkColor = "#9e7430";
export const secondaryColor = "#d0d0ef";
export const secondaryDarkColor = "#b9b9d3";

export const directories: DirectoryInterface[] = [
   {
      name: "Gummy Pages",
      about: "Explore a diverse array of businesses, professionals, and entities on Gummy Pages. From tech startups to creative freelancers, discover and connect with the right partners to fuel your projects and ventures.",
      icon: <Pages />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Upcoming Events",
      about: "Stay informed and engaged with upcoming events in your area and beyond. From industry conferences to community gatherings, discover opportunities to network, learn, and grow.",
      icon: <EventAvailable />,
      for: "events",
      itemToBeListed: "event",
      actionForListing: () => {},
   },

   {
      name: "Crème Chefs",
      about: "Indulge your culinary cravings with Crème Chefs. Discover talented chefs, caterers, and food artisans offering delectable delights for every occasion. From gourmet meals to mouthwatering desserts, satisfy your taste buds with Crème Chefs.",
      icon: <Fireplace />,
      for: "users",
      itemToBeListed: "yourself",
      actionForListing: () => {},
   },

   {
      name: "Restaurants",
      about: "Explore a diverse selection of restaurants offering culinary delights to tantalize your taste buds. From cozy cafes to upscale dining experiences, discover new flavors and savor memorable meals at restaurants near you",
      icon: <Restaurant />,
      for: "organizations",
      itemToBeListed: "restaurant",
      actionForListing: () => {},
   },

   {
      name: "Sports",
      about: "Dive into the world of sports with a variety of offerings on our platform. From amateur leagues to professional coaches, discover opportunities to stay active, compete, and connect with fellow sports enthusiasts",
      icon: <Sports />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Craft / Skill",
      about: "Unleash your creativity and hone your skills with Craft/Skill. From artists to artisans, discover talented individuals offering unique creations and services. Explore, learn, and connect with the makers behind the craft.",
      icon: <Brush />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Coin (Business)",
      about: "Navigate the world of business with Coin. Discover startups, enterprises, and entrepreneurs making waves in the industry. Connect, collaborate, and explore opportunities to grow your business network",
      icon: <Money />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Thrift (Fashion)",
      about: "Embrace style with Thrift directories. Explore curated collections of fashion items. From clothing to accessories, discover unique pieces that reflect your individuality and eco-conscious values.",
      icon: <Shop />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Education",
      about: "Explore opportunities for learning and development with Education. Discover schools, courses, and educational resources to enhance your knowledge and skills. From traditional classrooms to online platforms, pursue your academic goals with confidence.",
      icon: <School />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Creatives & Artists",
      about: "Immerse yourself in the world of creativity with Creatives & Artists. Discover talented individuals pushing the boundaries of art and innovation. From visual arts to performing arts, explore, connect, and be inspired by the creative community.",
      icon: <Piano />,
      for: "users",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Labels, Artists & Repertoire / Booking Agents",
      about: "Dive into the music industry with Labels, Artists & Repertoire/Booking Agents. Discover record labels, artists, and booking agents shaping the soundtracks of tomorrow. Connect with industry professionals and explore opportunities for collaboration and representation.",
      icon: <MusicNote />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "NGOs / Sponsorships & Funds",
      about: "Make a difference with NGOs/Sponsorships & Funds. Discover organizations dedicated to social impact and humanitarian causes. Explore opportunities for sponsorship, funding, and collaboration to support meaningful initiatives and create positive change.",
      icon: <Business />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "Hubs / Studios & Co-working spaces ",
      about: "Foster creativity and collaboration with Hubs/Studios & Co-working Spaces. Discover vibrant hubs, studios, and co-working spaces where ideas come to life. From shared workspaces to specialized facilities, find the perfect environment to unleash your potential.",
      icon: <BusinessCenter />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "AirBnbs, Hotels & Resorts",
      about: "Plan your next getaway with Airbnbs, Hotels & Resorts. Explore a variety of accommodations, from cozy Airbnbs to luxurious resorts. Whether you're traveling for business or leisure, find the perfect place to relax and unwind.",
      icon: <Hotel />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "Hospitals / Medical Specialists & facilities",
      about: "Prioritize your health with Hospitals/Medical Specialists & Facilities. Access top-notch medical care and facilities, from hospitals to specialized clinics. Connect with skilled medical professionals and explore options for comprehensive healthcare services",
      icon: <LocalHospital />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },
];

export const researchBureauOptions: option[] = [
   {
      name: "Operations",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Sales & Marketing",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Strategy",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Procurement",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Enterprise Technology",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Morden Marketing",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Customer Experience",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Digital Growth",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Marketing & Sales",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Implementation Operations",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "People & Organisation Performance",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Risk & Resilience",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Strategy & Corporate Finance",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Sustainability",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Transformation",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Artificial Intelligence",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
   {
      name: "Sustainability , Cause & Responsibility",
      description:
         "part spoken game eye steady crop noise eventually inside please finally dozen graph dried bark buffalo master against noon doing sky nearly pale throat",
   },
];

export const gradients = {
   primary1: `linear-gradient(to bottom right, ${primaryColor}, goldenrod)`,
   secondary1: `linear-gradient(to bottom right, ${secondaryColor}, ${"rebeccapurple"})`,
   secondary2: `linear-gradient(to bottom left, ${secondaryDarkColor}, ${"rebeccapurple"})`,
};

export const dashboardNavLinks: dashboardNavLink[] = [
   {
      label: "Details",
      href: "/dashboard",
      icon: <Person />,
   },
   {
      label: "Overview",
      href: "/dashboard/overview",
      icon: <BarChart />,
   },
   {
      label: "Event & Organization pages",
      href: "/dashboard/events-organizations",
      icon: <AccountTreeOutlined />,
   },
   {
      label: "Saved Incs",
      href: "/dashboard/saved-incs",
      icon: <BookmarkAddOutlined />,
   },
   {
      label: "Monetization",
      href: "/dashboard/monetization",
      icon: <MonetizationOn />,
   },
   {
      label: "Directories & subscriptions",
      href: "/dashboard/directories-subscriptions",
      icon: <BookOutlined />,
   },
];

export const settings: settingType[] = [
   {
      name: "Email Notifications",
      icon: <Settings />,
      content: <EmailSettings />,
   },
];
