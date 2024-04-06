"use client";

import { capitalizeWords } from "@/app/lib/utils";
import { Add, Close, KeyboardDoubleArrowRight, WarningAmber } from "@mui/icons-material";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function TitleDescriptionInput({ title }: { title: string }) {
   const [titleDescriptionItems, setTitleDescriptionItems] = useState<{ name: string; description: string }[]>([]);
   const [error, setError] = useState(false);
   const nameRef = useRef<HTMLInputElement | null>();
   const descriptionRef = useRef<HTMLInputElement | null>();

   function addItem() {
      setError(false);
      const name = nameRef.current?.value.toLowerCase().trim();
      const description = descriptionRef.current?.value.trim();

      if (name && description) {
         let exists = false;
         titleDescriptionItems.forEach((item) => {
            if (item.name === name) {
               exists = true;
            }
         });
         if (exists) {
            setError(true);
         } else {
            setTitleDescriptionItems((prev) => [...prev, { name, description }]);
         }
      } else {
         setError(true);
      }
   }

   function deleteItem(name: string) {
      setTitleDescriptionItems((prev) => {
         return prev.filter((prevItem) => prevItem.name !== name);
      });
   }

   return (
      <div>
         <TextField
            inputRef={nameRef}
            variant="outlined"
            size="small"
            label={capitalizeWords(title)}
            fullWidth
            inputProps={{ min: 3, max: 50 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px" }, mb: 2 }}
         />
         <TextField
            inputRef={descriptionRef}
            variant="outlined"
            size="small"
            label={"Description"}
            fullWidth
            multiline
            rows={3}
            inputProps={{ min: 3, max: 500 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px" }, mb: 2 }}
         />

         <Typography sx={{ mb: 2 }} textAlign="center" color="firebrick" className={error ? "block" : "hidden"}>
            <WarningAmber fontSize="inherit" sx={{ mt: -0.2, mr: 1 }} />
            Please enter both a unique {title} and its description!
         </Typography>

         <div className="text-right">
            <Button color="primary" variant="outlined" type="button" onClick={addItem} endIcon={<Add />}>
               Add
            </Button>
         </div>

         <ul className="list-none bg-white border rounded-lg p-2 mt-4">
            {titleDescriptionItems.length ? (
               titleDescriptionItems.map((item) => (
                  <li key={item.name} className="flex items-start gap-2 mb-4">
                     <KeyboardDoubleArrowRight fontSize="small" />
                     <div className="flex-grow">
                        <Typography>{capitalizeWords(item.name)}</Typography>
                        <Typography variant="subtitle2">{item.description}</Typography>
                     </div>
                     <IconButton color="error" title="remove" size="small" onClick={() => deleteItem(item.name)}>
                        <Close />
                     </IconButton>
                  </li>
               ))
            ) : (
               <Typography textAlign="center">No items added</Typography>
            )}
         </ul>
      </div>
   );
}
