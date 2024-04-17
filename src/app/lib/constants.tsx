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
      shortDescription: "Features listings of everyday proffessionals",
      about: "middle rough slabs sight sometime girl physical light tea foreign citizen recent salmon front short pair without caught cause are go bridge art return",
      icon: <Pages />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Upcoming Events",
      shortDescription: "Features listings of everyday proffessionals",
      about: "shut rough sold ability else colony bigger realize interior repeat grew house fog bow pleasure opportunity making duck running eventually star metal different represent",
      icon: <EventAvailable />,
      for: "events",
      itemToBeListed: "event",
      actionForListing: () => {},
   },

   {
      name: "Crème Chefs",
      shortDescription: "Features listings of everyday proffessionals",
      about: "raw cloth that unless black poetry report lips higher lying becoming pole discover program built simplest pressure week pool planning about rabbit percent effect",
      icon: <Fireplace />,
      for: "users",
      itemToBeListed: "yourself",
      actionForListing: () => {},
   },

   {
      name: "Restaurants",
      shortDescription: "Features listings of everyday proffessionals",
      about: "hardly gun key me determine run stopped society cause dirt vote roof part bear difference crew selection fear cabin social die poetry scale captain",
      icon: <Restaurant />,
      for: "organizations",
      itemToBeListed: "restaurant",
      actionForListing: () => {},
   },

   {
      name: "Sports",
      shortDescription: "Features listings of everyday proffessionals",
      about: "cross plate planned his kitchen break to two did positive in waste music saw does needle fifteen natural song money visitor point football how",
      icon: <Sports />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Craft / Skill",
      shortDescription: "Features listings of everyday proffessionals",
      about: "answer hello man kept familiar sets straw chose recognize per written twelve weather see pool small range accident saddle pilot five stronger smooth soil",
      icon: <Brush />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Coin (Business)",
      shortDescription: "Features listings of everyday proffessionals",
      about: "camp nuts sea difficulty together statement flower topic nation mirror see castle rough built steady forty lead sale powder smoke may river finger judge",
      icon: <Money />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Thrift (Fashion)",
      shortDescription: "Features listings of everyday proffessionals",
      about: "block dust service tie atom ability range train aloud wealth then badly return skill therefore present direct cabin fought difference whispered fill free children",
      icon: <Shop />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Education",
      shortDescription: "Features listings of everyday proffessionals",
      about: "court height practical coal also whose name fort failed spread tin clearly probably origin raise use car heard younger expression safe tall large negative",
      icon: <School />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Creatives & Artists",
      shortDescription: "Features listings of everyday proffessionals",
      about: "getting else is son sat nails exclaimed adjective church tie moon search nearer size character familiar route ants joy corn nearly trap whether far",
      icon: <Piano />,
      for: "users",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "Labels, Artists & Repertoire / Booking Agents",
      shortDescription: "Features listings of everyday proffessionals",
      about: "leg hearing gulf fed lose track noon material vessels pipe sides read mouse bicycle atomic hat poor wrapped beyond loss school straw began ago",
      icon: <MusicNote />,
      for: "users-organizations",
      itemToBeListed: "yourself or establishment",
      actionForListing: () => {},
   },

   {
      name: "NGOs / Sponsorships & Funds",
      shortDescription: "Features listings of everyday proffessionals",
      about: "live into southern forty mathematics aloud song research funny exactly growth yes origin torn recently president got equally quickly final arrangement season almost poetry",
      icon: <Business />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "Hubs / Studios & Co-working spaces ",
      shortDescription: "Features listings of everyday proffessionals",
      about: "fought brass want lungs parallel create newspaper fell pond underline heading meal ants brush becoming sell familiar worry hollow several bottom myself small word",
      icon: <BusinessCenter />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "AirBnbs, Hotels & Resorts",
      shortDescription: "Features listings of everyday proffessionals",
      about: "mysterious result cast softly science particular mother food brush practical government end thee rock thought income market worker slope provide solve snow slide grandmother",
      icon: <Hotel />,
      for: "organizations",
      itemToBeListed: "establishment",
      actionForListing: () => {},
   },

   {
      name: "Hospitals / Medical Specialists & facilities",
      shortDescription: "Features listings of everyday proffessionals",
      about: "selection aid tune pole minute impossible pitch instrument shout chapter lunch another sides handle on listen among them story tired realize had language heat",
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
