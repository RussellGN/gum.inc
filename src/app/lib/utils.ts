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

export function friendlyDate(date: string | Date) {
   date = new Date(date);
   return Intl.DateTimeFormat("en-us", { month: "short", day: "2-digit", year: "numeric" }).format(date);
}
