import localFont from "next/font/local";

export const helveticaNeue = localFont({
  src: [
    {
      path: "../public/font/HelveticaNeueRoman.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/font/HelveticaNeueMedium.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "../public/font/HelveticaNeueBold.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-neue",
});
