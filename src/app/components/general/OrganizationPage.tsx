import { OrganizationInterface } from "@/app/interfaces";
import { directories } from "@/app/lib/constants";
import { sampleUsers } from "@/app/lib/sampleData";
import { capitalizeWords } from "@/app/lib/utils";
import {
   Link as LinkIcon,
   Work,
   LocationOn,
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
import Members from "./Members";
import Verification from "./Verification";
import Gallery from "./Gallery";
import DirectoryCard from "./DirectoryCard";
import ResponsiveTypography from "./ResponsiveTypography";

export default function OrganizationPage({
   organization,
   isAuthenticated,
}: {
   organization: OrganizationInterface;
   isAuthenticated?: boolean;
}) {
   return (
      <Grid container spacing={2} className="min-h-[70vh]">
         <Grid item xs={12} md>
            <div className="p-3">
               <Grid container gap={3} alignItems="center" justifyContent={{ xs: "center", md: "unset" }}>
                  <Grid item xs={5} md={2}>
                     <AspectContainedNextImage
                        src={organization?.displayPhoto}
                        alt={organization.name}
                        aspectRatio="1 / 1"
                        priority
                        nextImageProps={{ className: "rounded-[15px] object-cover shadow-md border" }}
                     />
                  </Grid>

                  <Grid item xs={12} md>
                     <Box
                        sx={{ alignItems: { xs: "center", md: "flex-start", textAlign: { xs: "center", md: "unset" } } }}
                        className="flex flex-col justify-center gap-2"
                     >
                        <Typography variant="h2">{organization.name}</Typography>

                        <Box
                           className={`flex ${
                              (organization.industry + organization.industry).length > 40 ? "flex-wrap" : ""
                           } items-center justify-center gap-2 md:justify-start md:gap-3`}
                           sx={{ "& svg": { color: "primary.main" } }}
                        >
                           <ResponsiveTypography
                              desktopVariant="body1"
                              mobileVariant="subtitle2"
                              className="whitespace-nowrap flex gap-1 md:gap-2 items-center"
                           >
                              <Work sx={{ mt: -0.2 }} />
                              {organization.industry}
                           </ResponsiveTypography>

                           <ResponsiveTypography
                              desktopVariant="body1"
                              mobileVariant="subtitle2"
                              className="whitespace-nowrap flex gap-1 md:gap-2 items-center"
                           >
                              <LocationOn sx={{ mt: -0.2 }} />
                              {organization.location}
                           </ResponsiveTypography>
                        </Box>

                        <Typography variant="subtitle1">
                           Page Admin:{" "}
                           <MuiLink
                              component={Link}
                              href={`/inc-connect/user/${organization.admin.slug}`}
                              fontSize="inherit"
                              fontWeight="bold"
                              underline="always"
                           >
                              {organization.admin.name}
                           </MuiLink>
                        </Typography>

                        <Verification isVerified={organization.verified} />
                     </Box>
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
                              <IconButton
                                 href={"/new/organization?organizationSlug=" + organization.slug}
                                 sx={{ border: "solid thin", borderColor: "divider" }}
                              >
                                 <Edit />
                              </IconButton>
                           </>
                        ) : (
                           <>
                              <IconButton
                                 component={Link}
                                 href={"/inbox/" + organization.slug + "?type=organization"}
                                 sx={{ border: "solid thin", borderColor: "divider" }}
                              >
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
                           {organization.about}
                        </Box>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                     <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md ">
                        <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                           What We Do
                           <Work fontSize="inherit" />
                        </Typography>
                        <ul className="list-none">
                           {organization.serviceOfferings.map((service) => (
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

                  <Grid item xs={12} md={6}>
                     <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md" sx={{ mb: 3 }}>
                        <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                           Contact Details
                           <ContactPage fontSize="inherit" />
                        </Typography>

                        <div className="flex items-start gap-3 p-2">
                           <KeyboardDoubleArrowRight fontSize="small" />
                           <Typography>
                              {organization.contactDetails || "Contact details not publicly available"}
                           </Typography>
                        </div>
                     </Box>

                     {organization.socialMedia ? (
                        <Box className="border px-2 py-5 rounded-[15px] bg-white shadow-md ">
                           <Typography variant="h3" className="flex items-center gap-2" sx={{ mb: 2, px: 2 }}>
                              Social Media
                              <LinkIcon fontSize="inherit" />
                           </Typography>
                           <ul className="list-none">
                              {organization.socialMedia?.map((social) => (
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

         <Grid item xs={12} md={3.5}>
            <Box sx={{ p: 2 }} className="border min-h-[60vh] rounded-[15px] bg-white shadow-md">
               {organization.team && <Members members={organization.team} memberType="team" />}

               <Gallery images={organization.images} />

               <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                     Featured Directories
                  </Typography>
                  <Grid container spacing={1} wrap="nowrap" overflow="auto" sx={{ pb: 1 }}>
                     {directories.map((dir) => (
                        <Grid item xs={4.5} key={dir.name}>
                           <DirectoryCard simplified dir={dir} />
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
