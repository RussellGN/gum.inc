import { StaticImageData } from "next/image";
import ImageInput from "./ImageInput";

type propTypes = {
   defaults?: (string | StaticImageData)[] | undefined;
};

export default function ImageInputs({ defaults }: propTypes) {
   const imageNames = ["display-photo", "image1", "image2", "image3", "image4", "image5", "image6"];

   const defaultImages = defaults?.map((img, index) => {
      if (index === imageNames.length) throw new Error("Default images are more than available image slots");
      return { name: imageNames[index], image: img };
   });

   return (
      <>
         {imageNames.map((imgName) => {
            let defaultImage = defaultImages?.find((img) => img.name === imgName)?.image;
            if (defaultImage && typeof defaultImage !== "string") {
               defaultImage = defaultImage.src;
            }
            return (
               <div key={imgName} className={`${imgName === "display-photo" ? "col-span-3 " : ""}`}>
                  <ImageInput name={imgName} defaultImage={defaultImage} />
               </div>
            );
         })}
      </>
   );
}
