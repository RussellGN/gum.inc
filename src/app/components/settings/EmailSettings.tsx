import { Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";

export default function EmailSettings() {
   return (
      <form>
         <Typography>
            Allow email notifications of account and related <br /> platform activity?{" "}
         </Typography>
         <RadioGroup sx={{ my: 2 }} defaultValue="enable" aria-labelledby="access-level-label" name="access-level">
            <FormControlLabel value="disable" control={<Radio />} label={"Disable"} />
            <FormControlLabel value="enable" control={<Radio />} label="Enable" />
         </RadioGroup>
         <Button type="button">Save</Button>
      </form>
   );
}
