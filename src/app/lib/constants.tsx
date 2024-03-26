import { dashboardNavLink, directory, link, option } from "../types";
import {
   BarChart, BookOutlined,
   Bookmark,
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
   Shop,
   Sports
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
// export const secondaryColor = "#365da1";
export const secondaryColor = "#d0d0ef";
export const secondaryDarkColor = "#b9b9d3";

export const directories: directory[] = [
   {
      name: "Upcoming Events",
      about: "shut rough sold ability else colony bigger realize interior repeat grew house fog bow pleasure opportunity making duck running eventually star metal different represent",
      icon: <EventAvailable />,
   },
   {
      name: "Gummy Pages",
      about: "middle rough slabs sight sometime girl physical light tea foreign citizen recent salmon front short pair without caught cause are go bridge art return",
      icon: <Pages />,
   },
   {
      name: "Crème Chefs",
      about: "raw cloth that unless black poetry report lips higher lying becoming pole discover program built simplest pressure week pool planning about rabbit percent effect",
      icon: <Fireplace />,
   },
   {
      name: "Restaurants",
      about: "hardly gun key me determine run stopped society cause dirt vote roof part bear difference crew selection fear cabin social die poetry scale captain",
      icon: <Restaurant />,
   },
   {
      name: "Sports",
      about: "cross plate planned his kitchen break to two did positive in waste music saw does needle fifteen natural song money visitor point football how",
      icon: <Sports />,
   },
   {
      name: "Craft/Skill",
      about: "answer hello man kept familiar sets straw chose recognize per written twelve weather see pool small range accident saddle pilot five stronger smooth soil",
      icon: <Brush />,
   },
   {
      name: "Coin (Business)",
      about: "camp nuts sea difficulty together statement flower topic nation mirror see castle rough built steady forty lead sale powder smoke may river finger judge",
      icon: <Money />,
   },
   {
      name: "Thrift (Fashion)",
      about: "block dust service tie atom ability range train aloud wealth then badly return skill therefore present direct cabin fought difference whispered fill free children",
      icon: <Shop />,
   },
   {
      name: "Education",
      about: "court height practical coal also whose name fort failed spread tin clearly probably origin raise use car heard younger expression safe tall large negative",
      icon: <School />,
   },
   {
      name: "Creatives & Artists",
      about: "getting else is son sat nails exclaimed adjective church tie moon search nearer size character familiar route ants joy corn nearly trap whether far",
      icon: <Piano />,
   },
   {
      name: "Labels | Artists & Repertoire/Booking Agents",
      about: "leg hearing gulf fed lose track noon material vessels pipe sides read mouse bicycle atomic hat poor wrapped beyond loss school straw began ago",
      icon: <MusicNote />,
   },
   {
      name: "NGOs/Sponsorships & Funds",
      about: "live into southern forty mathematics aloud song research funny exactly growth yes origin torn recently president got equally quickly final arrangement season almost poetry",
      icon: <Business />,
   },
   {
      name: "Hubs/Studios & Co-working spaces ",
      about: "fought brass want lungs parallel create newspaper fell pond underline heading meal ants brush becoming sell familiar worry hollow several bottom myself small word",
      icon: <BusinessCenter />,
   },
   {
      name: "AirBnbs, Hotels & Resorts",
      about: "mysterious result cast softly science particular mother food brush practical government end thee rock thought income market worker slope provide solve snow slide grandmother",
      icon: <Hotel />,
   },
   {
      name: "Hospitals/Medical Specialists & facilities",
      about: "selection aid tune pole minute impossible pitch instrument shout chapter lunch another sides handle on listen among them story tired realize had language heat",
      icon: <LocalHospital />,
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
      label: "Saved Incs",
      href: "/dashboard/saved-incs",
      icon: <Bookmark />,
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
