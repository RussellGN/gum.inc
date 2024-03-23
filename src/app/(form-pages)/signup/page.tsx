import AuthProviders from "@/app/components/general/AuthProviders";
import { Link as MuiLink, Grid, TextField, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <form>
         <Typography sx={{ mb: 3 }} variant="h2" textAlign="center">
            Signup
         </Typography>

         <AuthProviders />

         <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-1/4 h-[2px] rounded-md bg-gray-600" />
            <Typography>or</Typography>
            <div className="w-1/4 h-[2px] rounded-md bg-gray-600" />
         </div>

         <div className="flex flex-col gap-5 p-5">
            <TextField
               variant="filled"
               size="small"
               label="full name"
               name="full_name"
               placeholder="full name and surname"
               fullWidth
               required
               inputProps={{ min: 8, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="email"
               type="email"
               name="email"
               placeholder="example@example.com"
               fullWidth
               required
               inputProps={{ min: 3, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="password"
               name="password"
               type="password"
               placeholder="Minimum 8 alpha-numeral characters"
               fullWidth
               required
               inputProps={{ min: 8, max: 50 }}
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
