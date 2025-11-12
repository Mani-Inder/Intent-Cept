
import "./globals.css";
// import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: {
    default: "IntentCept",
    template: "%s | IntentCept",
  },
  
  description:
    "IntentCept — The Intelligent Acquisition Platform for identifying and converting high-intent leads.",

  metadataBase : new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://intentcept.vercel.app"
  ),
  icons: {
    icon: "/favicon.ico",
  },
};


import localFont from "next/font/local";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="font-sans">
        {children}
        {/* <SpeedInsights/> */}
      </body>
    </html>
  );
}




