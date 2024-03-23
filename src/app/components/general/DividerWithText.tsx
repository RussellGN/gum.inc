import { Typography } from "@mui/material";

export default function DividerWithText({ text }: { text: string }) {
   return (
      <div className="flex items-center justify-center gap-3 mt-3">
         <div className="w-1/5 h-[2px] rounded-md bg-gray-600" />
         <Typography className="break-words max-w-[45%] text-center">{text}</Typography>
         <div className="w-1/5 h-[2px] rounded-md bg-gray-600" />
      </div>
   );
}
