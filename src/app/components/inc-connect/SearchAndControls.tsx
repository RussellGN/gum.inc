"use client";

import { Tune, ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { SelectChangeEvent, Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useIsMobile from "@/app/hooks/useIsMobile";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// export default function SearchAndSort() {
//    const { handleQuery, handleSortChange, sortValue, queryValue } = useSearchAndSort();
//    const isMobile = useIsMobile();
//    const router = useRouter();
//    const pathname = usePathname();

//    return (
//       <div className="py-5 px-[5rem]">
//          <Box
//             component="form"
//             sx={{
//                display: "flex",
//                alignItems: "center",
//                gap: 1,
//                mb: queryValue ? 2 : 4,
//             }}
//          >
//             <Button type="button" color="primary">
//                <Tune />
//             </Button>

//             <TextField
//                onKeyUp={(e) => {
//                   if (e.which === 13) {
//                      const q = (e.target as HTMLInputElement).value;
//                      (e.target as HTMLInputElement).value = "";
//                      (e.target as HTMLInputElement).blur();
//                      handleQuery(q);
//                   }
//                }}
//                type="search"
//                defaultValue={queryValue}
//                size={isMobile ? "small" : "medium"}
//                fullWidth
//                variant="outlined"
//                name="query"
//                placeholder="Search..."
//                sx={{
//                   "& .MuiInputBase-root": {
//                      backgroundColor: "background.paper",
//                      borderRadius: "10px",
//                   },
//                }}
//             />

//             <FormControl size={isMobile ? "small" : "medium"}>
//                <InputLabel id="sort-label">Sort</InputLabel>
//                <Select
//                   labelId="sort-label"
//                   id="sort-select"
//                   label="Sort"
//                   name="sort"
//                   value={sortValue || "-date"}
//                   onChange={handleSortChange}
//                   autoWidth
//                   sx={{
//                      width: { sm: "fit-content" },
//                      borderRadius: "10px",
//                      backgroundColor: "background.paper",
//                   }}
//                >
//                   <MenuItem value="-view_count">Popularity</MenuItem>
//                   <MenuItem value="-date">
//                      Date <ArrowDownward fontSize="small" color="inherit" sx={{ ml: 0.2 }} />
//                   </MenuItem>
//                   <MenuItem value="date">
//                      Date <ArrowUpward fontSize="small" color="inherit" sx={{ ml: 0.2 }} />
//                   </MenuItem>
//                </Select>
//             </FormControl>
//          </Box>

//          {queryValue && (
//             <Typography noWrap variant="h6" sx={{ mb: 4, textAlign: "center" }}>
//                <IconButton size="small" onClick={() => router.replace("/inc-connect")} sx={{ mr: 0.8 }}>
//                   <Close />
//                </IconButton>
//                {`Results for "${queryValue}"`}
//             </Typography>
//          )}
//       </div>
//    );
// }

export default function SearchAndSort() {
   const { handleSortChange, sortValue, queryValue } = useSearchAndSort();
   const isMobile = useIsMobile();
   // const router = useRouter();
   // const pathname = usePathname();

   return (
      <Box sx={{ p: 4 }}>
         <Box
            component="form"
            sx={{
               display: "flex",
               backgroundColor: "white",
               borderRadius: "20px",
               // alignItems: "center",
               // gap: 1,
               // mb: queryValue ? 2 : 4,
            }}
         >
            <button
               type="button"
               className="bg-[transparent] py-2 px-4 border border-r-0 rounded-tl-[20px] rounded-bl-[20px] hover:bg-slate-50   active:bg-slate-100"
            >
               <Tune />
            </button>

            <input
               type="search"
               defaultValue={queryValue ? queryValue : ""}
               name="query"
               placeholder="Search..."
               className="bg-[transparent] py-2 px-4 border border-r-0 border-l-0 flex-grow hover:bg-slate-50 outline-none focus:bg-slate-100"
            />

            <FormControl size={isMobile ? "small" : "medium"}>
               <InputLabel id="sort-label">Sort</InputLabel>
               <Select
                  labelId="sort-label"
                  id="sort-select"
                  label="Sort"
                  name="sort"
                  value={sortValue || "-date"}
                  onChange={handleSortChange}
                  autoWidth
                  sx={{
                     width: { sm: "fit-content" },
                     borderRadius: "0 20px 20px 0",
                     backgroundColor: "white",
                     "&:hover": {
                        backgroundColor: "rgb(248 250 252)",
                     },
                     "& .MuiOutlinedInput-notchedOutline": {
                        border: "solid thin rgb(229,231,235) !important",
                        borderLeft: "0 !important",
                     },
                  }}
               >
                  <MenuItem value="-view_count">Popularity</MenuItem>
                  <MenuItem value="-date">
                     Date <ArrowDownward fontSize="small" color="inherit" sx={{ ml: 0.2 }} />
                  </MenuItem>
                  <MenuItem value="date">
                     Date <ArrowUpward fontSize="small" color="inherit" sx={{ ml: 0.2 }} />
                  </MenuItem>
               </Select>
            </FormControl>
         </Box>

         {/* {queryValue && (
            <Typography noWrap variant="h6" sx={{ mb: 4, textAlign: "center" }}>
               <IconButton size="small" onClick={() => router.replace("/inc-connect")} sx={{ mr: 0.8 }}>
                  <Close />
               </IconButton>
               {`Results for "${queryValue}"`}
            </Typography>
         )} */}
      </Box>
   );
}

function useSearchAndSort() {
   const params = useSearchParams();
   const pathname = usePathname();
   const router = useRouter();
   const sortValue = params.get("sort");
   const queryValue = params.get("query");

   function handleSortChange(e: SelectChangeEvent) {
      const searchParams = new URLSearchParams(params);
      searchParams.set("sort", e.target.value);
      router.replace(pathname + "?" + searchParams.toString());
   }

   function handleQuery(query: string) {
      const searchParams = new URLSearchParams(params);
      if (query) searchParams.set("query", query);
      else searchParams.delete("query");
      router.replace(pathname + "?" + searchParams.toString());
   }

   return {
      handleQuery,
      handleSortChange,
      sortValue,
      queryValue,
   };
}
