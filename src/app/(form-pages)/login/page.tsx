import AuthProviders from "@/app/components/general/AuthProviders";
import DividerWithText from "@/app/components/general/DividerWithText";
import { Link as MuiLink, Grid, TextField, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <form>
         <Typography sx={{ mb: 3 }} variant="h2" textAlign="center">
            Login
         </Typography>

         <AuthProviders />

         <DividerWithText text="or" />

         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
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
                  Don&apos;t have an account? <br />
                  <MuiLink component={Link} href="/signup">
                     Signup
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
