import React from "react";

export default function Page({ params: { dir } }: { params: { dir: string } }) {
   console.log(dir);
   return (
      <div className="flex justify-center items-center text-center h-full">
         Still in development
         {/* join {decodeURI(dir)} */}
      </div>
   );
}
