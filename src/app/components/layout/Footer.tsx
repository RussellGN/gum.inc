import { ArrowUpward, Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export default function Footer() {
   return (
      <Container component="footer" sx={{ mt: 3 }}>
         <Box
            sx={{
               border: "solid thin",
               borderColor: "divider",
               borderRadius: "20px",
               backgroundColor: "white",
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               p: 8,
               mb: 2,
            }}
         >
            <Grid container gap={3} justifyContent="space-between">
               <Grid item xs md={3}>
                  <Typography variant="h2" color="primary">
                     GUM.INC
                  </Typography>
                  <Typography sx={{ my: 1.5 }}>
                     Gum.inc LTD is a company registred in the United Kingdom and Whales.
                  </Typography>
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3" sx={{ mb: 2.5 }}>
                        Quick links
                     </Typography>
                     <FooterLink href="/dashboard">Dashboard</FooterLink>
                     <FooterLink href="/login">Login</FooterLink>
                     <FooterLink href="/signup">Signup</FooterLink>
                  </div>
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3" sx={{ mb: 2.5 }}>
                        Quick links
                     </Typography>
                     <FooterLink href="/contact">Contact</FooterLink>
                     <FooterLink isATag href="mailto:info@guminc.com?subject=Partnership">
                        Partner with us
                     </FooterLink>
                  </div>
               </Grid>
            </Grid>
         </Box>

         <Box
            sx={{
               border: "solid thin",
               borderColor: "divider",
               borderRadius: "20px",
               backgroundColor: "white",
               px: 8,
               py: 3,
               mb: 5,
            }}
         >
            <ul className="list-none flex justify-center gap-3 items-center px-10">
               {socialMediaAccounts.map((socialMediaAccount) => (
                  <li key={socialMediaAccount.platform}>
                     <IconButton
                        component={Link}
                        href={socialMediaAccount.url}
                        sx={{ border: "solid thin", borderColor: "divider" }}
                        title={socialMediaAccount.platform}
                        size="large"
                        className="mt-5 justify-self-end"
                     >
                        {socialMediaAccount.icon}
                     </IconButton>
                  </li>
               ))}
            </ul>

            <div className="flex justify-between items-center gap-3 mt-5">
               <Typography variant="body2">All Rights Reserved. &copy;GUM.INC {new Date().getFullYear()}</Typography>

               <IconButton
                  sx={{ border: "solid thin" }}
                  title="Back to top"
                  size="small"
                  component={Link}
                  href="#"
                  className="mt-5 ml-auto"
               >
                  <ArrowUpward />
               </IconButton>
            </div>
         </Box>
      </Container>
   );
}

type socialMedia = {
   platform: string;
   username: string;
   icon: JSX.Element;
   url: string;
};

const socialMediaAccounts: socialMedia[] = [
   {
      platform: "Instagram",
      username: "gum.inc",
      icon: <Instagram />,
      url: "#",
   },
   {
      platform: "Facebook",
      username: "gum.inc",
      icon: <Facebook />,
      url: "#",
   },
   {
      platform: "Twitter",
      username: "gum.inc",
      icon: <Twitter />,
      url: "#",
   },
   {
      platform: "Whatsapp",
      username: "gum.inc",
      icon: <WhatsApp />,
      url: "#",
   },
];

function FooterLink({
   href,
   children,
   isATag,
}: {
   href: string;
   children: ReactNode;
   includes?: string;
   isATag?: boolean;
}) {
   return (
      <MuiLink
         component={isATag ? "a" : Link}
         href={href}
         sx={{
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            pl: 1.5,
            width: "fit-content",
            transition: "color 135ms linear",
            "&::after": {
               content: "''",
               transition: "all 135ms linear",
               position: "absolute",
               top: "50%",
               left: 0,
               height: "60%",
               width: "4px",
               transform: "translateY(-50%)",
               borderRadius: "5px",
               backgroundColor: "secondary.light",
            },
            "&:hover": {
               color: "grey",
            },
            "&:hover::after": {
               backgroundColor: "secondary.dark",
            },
         }}
      >
         {children}
      </MuiLink>
   );
}
