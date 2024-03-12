"use client";

import { ArrowUpward } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import NavLink from "../general/NavLink";

export default function Footer() {
   return (
      <Box
         component="footer"
         sx={{
            mt: 3,
            borderColor: "secondary.dark",
            backgroundColor: "primary.dark",
            color: "whitesmoke",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: 2, sm: 10 },
         }}
      >
         <Container sx={{ mt: "auto" }}>
            <Grid container gap={3} justifyContent="space-around">
               <Grid item xs md={3}>
                  <Typography variant="h1">GUM.INC</Typography>
                  <Typography variant="body2">All Rights Reserved. &copy;GUM.INC {new Date().getFullYear()}</Typography>
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3">Quick links</Typography>
                     <NavLink href="/about">About</NavLink>
                     <NavLink href="/about">Login</NavLink>
                     <NavLink href="/about">Contact</NavLink>
                  </div>
               </Grid>
               <Grid item xs md={3}>
                  <div className="flex flex-col gap-2">
                     <Typography variant="h3">Quick links</Typography>
                     <NavLink href="/about">Advertise</NavLink>
                     <NavLink href="/about">FAQ</NavLink>
                  </div>
               </Grid>
            </Grid>

            <div className="mt-[50px] px-10 text-justify">
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
            </div>
         </Container>
      </Box>
   );
}
