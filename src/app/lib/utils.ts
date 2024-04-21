export function generateAvatarLetters(string: string): string {
   string = string.trim();
   const words = string.split(" ");
   const letters = words.map((word) => word[0]);

   const finalLetters = letters.join("").toUpperCase();

   if (finalLetters.length > 1) return finalLetters.slice(0, 2);
   else return finalLetters;
}

export async function wait(seconds: number, log?: boolean) {
   if (log) console.log("waiting");
   await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
   if (log) console.log("done waiting");
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
   try {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   } catch (error) {
      console.log("error getting cookie:", error);
   }
}

export function deleteCookie(cname: string) {
   try {
      document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
   } catch (error) {
      console.log("error deleting cookie:", error);
   }
}

export function getCookie(cname: string) {
   try {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) == " ") {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
      }
      return null;
   } catch (error) {
      console.log("error getting cookie:", error);
      return null;
   }
}

export function capitalizeWords(str: string) {
   let finalString = "";
   const words = str
      .trim()
      .split(" ")
      .filter((wrd) => wrd.trim() !== "");

   words.forEach((word) => (finalString += word[0].toUpperCase() + word.slice(1) + " "));

   return finalString;
}

export function friendlyDate(date: string | Date, format?: "second" | "third") {
   date = new Date(date);
   switch (format) {
      case "second":
         return Intl.DateTimeFormat("en-GB", { month: "short", day: "2-digit", year: "numeric" }).format(date);
      case "third":
         return Intl.DateTimeFormat("en-GB", { month: "numeric", day: "2-digit", year: "2-digit" }).format(date);
      default:
         return Intl.DateTimeFormat("en-GB", { month: "short", day: "2-digit", year: "2-digit" }).format(date);
   }
}

export function getTimeElapsedSince(date: Date | string): string {
   const currentDate = new Date();
   const startDate = typeof date === "string" ? new Date(date) : date;

   const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();

   if (elapsedMilliseconds < 1) return "now";

   const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
   const elapsedMinutes = Math.floor(elapsedSeconds / 60);
   const elapsedHours = Math.floor(elapsedMinutes / 60);
   const elapsedDays = Math.floor(elapsedHours / 24);
   const elapsedWeeks = Math.floor(elapsedDays / 7);
   const elapsedMonths = Math.floor(elapsedDays / 30);
   const elapsedYears = Math.floor(elapsedDays / 365);

   if (elapsedYears > 0) {
      return `${elapsedYears} y`;
   } else if (elapsedMonths > 0) {
      return `${elapsedMonths} m`;
   } else if (elapsedWeeks > 0) {
      return `${elapsedWeeks} w`;
   } else if (elapsedDays > 0) {
      return `${elapsedDays} d`;
   } else if (elapsedHours > 0) {
      return `${elapsedHours} hr`;
   } else {
      return `${elapsedMinutes} min`;
   }
}
