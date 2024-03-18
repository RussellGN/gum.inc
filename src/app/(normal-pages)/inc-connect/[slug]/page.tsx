import images from "@/app/assets";
import AspectContainedNextImage from "@/app/components/general/AspectContainedNextImage";
import GoBackBtn from "@/app/components/general/GoBackBtn";
import SocialMediaIcon from "@/app/components/inc-connect/SocialMediaIcon";
import UserCard from "@/app/components/inc-connect/UserCard";
import { directories } from "@/app/lib/constants";
import { sampleUsers } from "@/app/lib/sampleData";
import { capitalizeWords } from "@/app/lib/utils";
import {
   ArrowBack,
   BookmarkAdd,
   Edit,
   KeyboardDoubleArrowRight,
   LocationOn,
   Message,
   Person2,
   Send,
   Verified,
   Work,
   Link as LinkIcon,
   InfoOutlined,
} from "@mui/icons-material";
import { Link as MuiLink, Box, Button, Divider, Grid, IconButton, Paper, Typography, Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const user = sampleUsers.find((sampleUser) => sampleUser.slug === slug);

   if (!user) throw new Error("User not found");
   const isAuthenticated = false;

   return (
      <>
         <GoBackBtn />

         <Grid container spacing={2} className="min-h-[70vh]">
            <Grid item xs md>
               <div className="p-3">
                  <Grid container gap={3} alignItems="center">
                     <Grid item xs={3} md={2}>
                        <AspectContainedNextImage
                           src={user?.displayPhoto}
                           alt={user.name}
                           aspectRatio="1 / 1"
                           priority
                           nextImageProps={{ className: "rounded-[15px] object-cover shadow-md border" }}
                        />
                     </Grid>

                     <Grid item xs>
                        <div className="flex flex-col justify-center items-start gap-2">
                           <Typography variant="h2">{user.name}</Typography>

                           <Box className="flex items-center gap-3" sx={{ "& svg": { color: "primary.main" } }}>
                              <Typography className="border-r flex gap-2 items-center">
                                 <Person2 />
                                 {user.jobTitle}
                              </Typography>

                              <Typography className="border-r flex gap-2 items-center">
                                 <Work />
                                 {user.industry}
                              </Typography>

                              <Typography className="flex gap-2 items-center">
                                 <LocationOn />
                                 {user.location}
                              </Typography>
                           </Box>

                           <Typography variant="subtitle1">
                              Works:{" "}
                              <Typography variant="inherit" fontWeight="bold" color="primary" component="span">
                                 Freelance
                              </Typography>
                           </Typography>

                           <Typography
                              variant="subtitle1"
                              className="px-2 py-[2px] border rounded-lg bg-slate-100 flex items-center gap-2"
                           >
                              Verified
                              <Verified fontSize="inherit" />
                           </Typography>
                        </div>
                     </Grid>

                     <Grid item xs={12} md="auto">
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: { xs: "row", md: "column" },
                              justifyContent: { xs: "center", md: "flex-start" },
                              alignItems: "center",
                              gap: 2,
                           }}
                        >
                           {isAuthenticated ? (
                              <>
                                 <IconButton sx={{ border: "solid thin", borderColor: "divider" }}>
                                    <Edit />
                                 </IconButton>
                              </>
                           ) : (
                              <>
                                 <IconButton sx={{ border: "solid thin", borderColor: "divider" }}>
                                    <Message />
                                 </IconButton>
                                 <IconButton sx={{ border: "solid thin", borderColor: "divider" }}>
                                    <BookmarkAdd />
                                 </IconButton>
                              </>
                           )}
                        </Box>
                     </Grid>
                  </Grid>

                  <Grid container spacing={3} sx={{ mt: 4 }} alignItems="flex-start">
                     <Grid item xs={12}>
                        <Box>
                           <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                              Bio
                              <Person2 fontSize="inherit" />
                           </Typography>
                           <Box className="bg-slate-100 border rounded-[15px]" sx={{ p: 2 }}>
                              {user.bio}
                           </Box>
                        </Box>
                     </Grid>

                     <Grid item xs md={6}>
                        <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md ">
                           <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                              Service Offerings
                              <Work fontSize="inherit" />
                           </Typography>
                           <ul className="list-none">
                              {user.serviceOfferings.map((service) => (
                                 <li key={service.service} className="flex items-start gap-3 p-2">
                                    <KeyboardDoubleArrowRight />
                                    <div>
                                       <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
                                          {capitalizeWords(service.service)}
                                       </Typography>
                                       <Typography>{service.description}</Typography>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </Box>
                     </Grid>

                     <Grid item xs md={6}>
                        <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md ">
                           <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                              Social Media
                              <LinkIcon fontSize="inherit" />
                           </Typography>
                           <ul className="list-none">
                              {user.socialMedia.map((social) => (
                                 <li key={social.platform} className="flex items-start gap-3 p-2">
                                    <SocialMediaIcon platform={social.platform} />
                                    <div>
                                       <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
                                          {capitalizeWords(social.platform)}
                                       </Typography>
                                       <MuiLink component={Link} href={social.url}>
                                          {social.username}
                                       </MuiLink>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </Box>
                     </Grid>
                  </Grid>
               </div>
            </Grid>

            <Grid item xs md={3.5}>
               <Box sx={{ p: 2 }} className="border min-h-[60vh] rounded-[15px] bg-white shadow-md">
                  <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                     <Typography variant="h4" sx={{ mb: 1 }}>
                        Essence &amp; Endeavors
                     </Typography>
                     <div className="flex gap-2 overflow-x-auto pb-2">
                        {user.images.map((img, index) => (
                           <div key={"img-" + index} className="w-6/12 flex-shrink-0">
                              <AspectContainedNextImage
                                 src={img}
                                 sx={{ border: "solid 2px", borderColor: "rgb(180,180,180)", borderRadius: "10px" }}
                                 alt="gallery image"
                                 aspectRatio="3 / 2"
                              />
                           </div>
                        ))}
                     </div>
                  </Box>

                  <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                     <Typography variant="h4" sx={{ mb: 1 }}>
                        Featured Directories
                     </Typography>
                     <Grid container spacing={1} wrap="nowrap" overflow="auto" sx={{ pb: 1 }}>
                        {directories.map((dir) => (
                           <Grid item xs={4.5} component={Link} href={`/inc-connect?dir=${dir.name}`} key={dir.name}>
                              <Box className="bg-slate-100 p-2 rounded-xl border flex flex-col items-center justify-center gap-2">
                                 {dir.icon}
                                 <Typography noWrap className="w-full text-center ">
                                    {dir.name}
                                 </Typography>
                              </Box>
                           </Grid>
                        ))}
                     </Grid>
                  </Box>

                  <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                     <Typography variant="h4" sx={{ mb: 1 }}>
                        Inc Score{" "}
                     </Typography>
                     <Typography>
                        <InfoOutlined fontSize="inherit" sx={{ mr: 1, mt: -0.2 }} />
                        Based off views and activity
                     </Typography>
                     <Rating value={3.5} readOnly precision={0.5} />
                  </Box>

                  <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                     <Typography variant="h4" sx={{ mb: 1 }}>
                        Related
                     </Typography>
                     <div className="flex gap-2 overflow-x-auto">
                        {sampleUsers.map((inc) => (
                           <div key={inc.slug} className="w-8/12 flex-shrink-0">
                              <UserCard simplifified user={inc} />
                           </div>
                        ))}
                     </div>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
