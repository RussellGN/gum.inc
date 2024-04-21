import Image from "next/image";

export default function GridItem4() {
   return (
      <div className="bg-white col-span-2 row-span-2 flex items-center border rounded-md shadow-md ">
         <div className="h-full p-2z">
            <Image
               src="/svgs/undraw_searching_re_3ra9.svg"
               width={160}
               height={90}
               alt="searching on the net"
               className="h-full"
            />
         </div>
      </div>
   );
}
