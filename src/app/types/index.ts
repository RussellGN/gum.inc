export type link = {
   label: string;
   path: string;
};

export type directory = {
   name: string;
   about: string;
   icon: JSX.Element;
};

export type expandSize = "minimized" | "normal" | "expanded";

export type option = {
   name: string;
   description: string;
};
