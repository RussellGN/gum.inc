"use client";

import { ArrowUpward, Facebook, Instagram, KeyboardDoubleArrowRight, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography, Link as MuiLink, SxProps } from "@mui/material";
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
                  {/* <Typography variant="body2">
                     <KeyboardDoubleArrowRight color="primary" fontSize="inherit" sx={{ mr: 0.5 }} /> London, England <br />
                     <KeyboardDoubleArrowRight color="primary" fontSize="inherit" sx={{ mr: 0.5 }} /> Gatse Business Center
                     <br />
                     <KeyboardDoubleArrowRight color="primary" fontSize="inherit" sx={{ mr: 0.5 }} /> PSX 2644, Adlyn
                     <br />
                  </Typography> */}
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3" sx={{ mb: 2.5 }}>
                        Quick links
                     </Typography>
                     <FooterLink href="/about">About</FooterLink>
                     <FooterLink href="/about">Login</FooterLink>
                     <FooterLink href="/about">Contact</FooterLink>
                  </div>
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3" sx={{ mb: 2.5 }}>
                        Quick links
                     </Typography>
                     <FooterLink href="/about">Advertise</FooterLink>
                     <FooterLink href="/about">FAQ</FooterLink>
                  </div>
               </Grid>
            </Grid>

            {/* <div className="mt-[50px] px-10 text-justify">
               <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sint, aperiam fugiat accusamus expedita
                  nostrum consequatur culpa recusandae necessitatibus, suscipit distinctio laborum nemo, maiores molestias
                  voluptates? Tempora molestias quis, dignissimos reiciendis, repudiandae aut corporis eveniet tenetur dicta
                  dignissimos reiciendis, repudiandae aut corporis eveniet tenetur dicta corporis eveniet tenetur dicta
                  <br />
                  <br />
                  incidunt, a minus nobis. Unde, ab quo, in facilis facere hic dignissimos aliquam ut laudantium dolore vero
                  ex similique animi iusto! Nobis, porro accusamus quasi perspiciatis tempora est impedit quos neque quidem
                  recusandae deserunt, corporis quod enim, dicta repellat doloremque reprehenderit quisquam beatae
                  distinctio reiciendis voluptatum qui aspernatur. Ab error minus quo maiores cum optio autem blanditiis,
                  consequuntur unde repudiandae natus! Molestiae, doloremque.{" "}
               </Typography>
               <div className="mt-5 text-right">
                  <IconButton
                     sx={{ border: "solid thin" }}
                     title="Back to top"
                     size="small"
                     onClick={() => window.scrollTo(0, 0)}
                  >
                     <ArrowUpward />
                  </IconButton>
               </div>
            </div> */}
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
                        // color="primary"
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
                  onClick={() => window.scrollTo(0, 0)}
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
   includes,
   sx,
}: {
   href: string;
   children: ReactNode;
   includes?: string;
   sx?: SxProps;
}) {
   return (
      <MuiLink
         component={Link}
         href={href}
         sx={{
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            pl: 1.5,
            width: "fit-content",
            "&::after": {
               content: "''",
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
               color: "secondary.light",
            },
         }}
      >
         {children}
      </MuiLink>
   );
}
