export type link = {
   label: string;
   path: string;
};

export type expandSize = "minimized" | "normal" | "expanded";

export type option = {
   name: string;
   description: string;
};

export type dashboardNavLink = {
   label: string;
   href: string;
   icon: JSX.Element;
};

export type notificationType =
   | "general"
   | "announcement"
   | "account"
   | "page"
   | "directory"
   | "view"
   | "revisit"
   | "search-appearance"
   | "saved";

export type stat = {
   name: string;
   value: string | number;
   icon: JSX.Element;
};

export type settingType = {
   name: string;
   icon: JSX.Element;
   content: JSX.Element;
};
