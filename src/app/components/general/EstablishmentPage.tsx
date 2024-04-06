import { EstablishmentInterface } from "@/app/interfaces";
import { directories } from "@/app/lib/constants";
import { sampleUsers } from "@/app/lib/sampleData";
import { capitalizeWords } from "@/app/lib/utils";
import {
   Link as LinkIcon,
   Work,
   LocationOn,
   Verified,
   Edit,
   KeyboardDoubleArrowRight,
   InfoOutlined,
   Message,
   Business,
   ContactPage,
} from "@mui/icons-material";
import { Link as MuiLink, Box, Grid, Typography, IconButton, Rating } from "@mui/material";
import Link from "next/link";
import SocialMediaIcon from "../inc-connect/SocialMediaIcon";
import UserCard from "../inc-connect/UserCard";
import AspectContainedNextImage from "./AspectContainedNextImage";
import SaveIncButton from "../inc-connect/SaveIncButton";
import Image from "next/image";

export default function EstablishmentPage({
   establishment,
   isAuthenticated,
}: {
   establishment: EstablishmentInterface;
   isAuthenticated?: boolean;
}) {
   return (
      <Grid container spacing={2} className="min-h-[70vh]">
         <Grid item xs md>
            <div className="p-3">
               <Grid container gap={3} alignItems="center">
                  <Grid item xs={3} md={2}>
                     <AspectContainedNextImage
                        src={establishment?.displayPhoto}
                        alt={establishment.name}
                        aspectRatio="1 / 1"
                        priority
                        nextImageProps={{ className: "rounded-[15px] object-cover shadow-md border" }}
                     />
                  </Grid>

                  <Grid item xs>
                     <div className="flex flex-col justify-center items-start gap-2">
                        <Typography variant="h2">{establishment.name}</Typography>

                        <Box className="flex items-center gap-3" sx={{ "& svg": { color: "primary.main" } }}>
                           {/* <Typography className="border-r flex gap-2 items-center">
                              <Person2 />
                              {establishment.admin.name}
                           </Typography> */}

                           <Typography className="border-r flex gap-2 items-center">
                              <Work />
                              {establishment.industry}
                           </Typography>

                           <Typography className="flex gap-2 items-center">
                              <LocationOn />
                              {establishment.location}
                           </Typography>
                        </Box>

                        <Typography variant="subtitle1">
                           Page Admin:{" "}
                           <MuiLink
                              component={Link}
                              href={`/inc-connect/user/${establishment.admin.slug}`}
                              fontSize="inherit"
                              fontWeight="bold"
                              underline="always"
                           >
                              {establishment.admin.name}
                           </MuiLink>
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
                              <SaveIncButton sx={{ border: "solid thin", borderColor: "divider" }} />
                           </>
                        )}
                     </Box>
                  </Grid>
               </Grid>

               <Grid container spacing={3} sx={{ mt: 4 }} alignItems="flex-start">
                  <Grid item xs={12}>
                     <Box>
                        <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                           About
                           <Business fontSize="inherit" />
                        </Typography>
                        <Box className="bg-slate-100 border rounded-[15px]" sx={{ p: 2 }}>
                           {establishment.about}
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
                           {establishment.serviceOfferings.map((service) => (
                              <li key={service.service} className="flex items-start gap-3 p-2">
                                 <KeyboardDoubleArrowRight fontSize="small" />
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
                     <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md" sx={{ mb: 3 }}>
                        <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                           Contact Details
                           <ContactPage fontSize="inherit" />
                        </Typography>

                        <div className="flex items-start gap-3 p-2">
                           <KeyboardDoubleArrowRight fontSize="small" />
                           <Typography>
                              {establishment.contactDetails || "Contact details not publicly available"}
                           </Typography>
                        </div>
                     </Box>

                     {establishment.socialMedia ? (
                        <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md ">
                           <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                              Social Media
                              <LinkIcon fontSize="inherit" />
                           </Typography>
                           <ul className="list-none">
                              {establishment.socialMedia?.map((social) => (
                                 <li key={social.platform} className="flex items-start gap-3 p-2">
                                    <SocialMediaIcon props={{ fontSize: "small" }} platform={social.platform} />
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
                     ) : (
                        <div className="flex items-start gap-3 p-2">
                           <KeyboardDoubleArrowRight fontSize="small" />
                           <Typography sx={{ mb: 0.5 }}>No social media</Typography>
                        </div>
                     )}
                  </Grid>
               </Grid>
            </div>
         </Grid>

         <Grid item xs md={3.5}>
            <Box sx={{ p: 2 }} className="border min-h-[60vh] rounded-[15px] bg-white shadow-md">
               {establishment.team && (
                  <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                     <Typography variant="h4" sx={{ mb: 1 }}>
                        Team
                     </Typography>
                     <Grid container spacing={1} wrap="nowrap" overflow="auto" sx={{ pb: 1 }}>
                        {establishment.team.map((member) => (
                           <Grid item xs={4.5} component={Link} href={`/inc-connect/user/${member.slug}`} key={member.name}>
                              <Box className="p-2 rounded-xl border flex flex-col items-center  gap-2 justify-around hover:bg-slate-100 ">
                                 <Image
                                    src={member.displayPhoto}
                                    alt={member.name}
                                    className="w-10 h-10 object-cover rounded-[100%] border shadow-md"
                                 />
                                 <Typography noWrap className="w-full text-center mb-0">
                                    {member.name}
                                 </Typography>
                              </Box>
                           </Grid>
                        ))}
                     </Grid>
                  </Box>
               )}

               <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                     Gallery
                  </Typography>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                     {establishment.images.map((img, index) => (
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
                           <UserCard user={inc} />
                        </div>
                     ))}
                  </div>
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
}