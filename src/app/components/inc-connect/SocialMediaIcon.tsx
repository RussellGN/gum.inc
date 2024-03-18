import { Facebook, Instagram, Link, LinkedIn, Twitter } from "@mui/icons-material";

export default function SocialMediaIcon({ platform, props }: { platform: string; props?: object }) {
   switch (platform.toLowerCase().trim()) {
      case "twitter":
         return <Twitter {...props} />;
      case "facebook":
         return <Facebook {...props} />;
      case "instagram":
         return <Instagram {...props} />;
      case "linkedin":
         return <LinkedIn {...props} />;
      default:
         return <Link {...props} />;
   }
}
