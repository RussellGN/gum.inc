import AuthProviders from "@/app/components/general/AuthProviders";
import DividerWithText from "@/app/components/general/DividerWithText";
import { InfoOutlined } from "@mui/icons-material";
import { Link as MuiLink, Grid, TextField, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <form>
         <Typography sx={{ mb: 3 }} variant="h2" textAlign="center">
            Account Details
         </Typography>

         <Typography textAlign="center" sx={{ px: 3 }}>
            <InfoOutlined fontSize="small" sx={{ mr: 0.5, mt: -0.2 }} /> Please fill out all required details.
         </Typography>

         <div className="flex flex-col gap-5 p-5">
            <TextField
               variant="filled"
               size="small"
               label="job title"
               name="job_title"
               placeholder="Your speciality"
               fullWidth
               required
               inputProps={{ min: 2, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="location"
               name="location"
               placeholder="Country, City, Area"
               fullWidth
               required
               inputProps={{ min: 2, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="industry"
               name="industry"
               placeholder="Your field of expertise"
               fullWidth
               required
               inputProps={{ min: 2, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <DividerWithText text="further details" />

            <TextField
               variant="filled"
               size="small"
               label="bio"
               name="bio"
               placeholder="Tell us more about you and your work"
               fullWidth
               required
               multiline
               rows={5}
               inputProps={{ min: 2, max: 500 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>

         <Grid container gap={3} alignItems="center" justifyContent="space-between" sx={{ p: 1, mt: 4 }}>
            <Grid item xs>
               <Typography variant="body2">
                  Already have an account? <br />
                  <MuiLink component={Link} href="/login">
                     Login
                  </MuiLink>
               </Typography>
            </Grid>

            <Grid item xs="auto">
               <Button color="primary" type="submit">
                  Proceed
               </Button>
            </Grid>
         </Grid>
      </form>
   );
}
