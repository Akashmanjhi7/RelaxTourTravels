import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Relax Route Travels | Manali, Goa, Kashmir, Dubai & Thailand Tour Packages",
    template: "%s | Relax Route Travels",
  },

  description:
    "Relax Route Travels offers affordable tour packages for Manali, Goa, Kashmir, Rajasthan, Himachal, Dubai, Thailand and more. Book hotels, flights, and complete holiday packages with ease.",

  keywords: [
    "Relax Route Travels",
    "Manali tour packages",
    "Goa trip packages",
    "Kashmir tour packages",
    "Rajasthan travel packages",
    "Himachal tour packages",
    "Dubai tour packages",
    "Thailand tour packages",
    "domestic travel India",
    "international holiday packages",
    "hotel booking",
    "flight booking",
    "travel agency India",
    "budget travel packages",
  ],

  authors: [{ name: "Relax Route Travels" }],
  creator: "Relax Route Travels",
  publisher: "Relax Route Travels",

  metadataBase: new URL("https://relaxroutetravels.com"),

  openGraph: {
    title: "Relax Route Travels | Explore Manali, Goa, Kashmir, Dubai & Thailand",
    description:
      "Book amazing travel packages for Manali, Goa, Kashmir, Rajasthan, Himachal, Dubai and Thailand. Affordable trips, hotel booking and flight services available.",
    url: "https://relaxroutetravels.com",
    siteName: "Relax Route Travels",
    images: [
      {
        url: "/LOGO/RELAX_LOGO.png",
        width: 1200,
        height: 630,
        alt: "Relax Route Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Relax Route Travels",
    description:
      "Explore Manali, Goa, Kashmir, Rajasthan, Dubai & Thailand with best travel packages and deals.",
    images: ["/LOGO/RELAX_LOGO.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/LOGO/RELAX_LOGO.png",
    shortcut: "/LOGO/RELAX_LOGO.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}