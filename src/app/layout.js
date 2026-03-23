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
    default: "Relax Route Travels | India Tour Packages & Char Dham Yatra",
    template: "%s | Relax Route Travels",
  },

  description:
    "Relax Route Travels is a trusted travel agency offering India tour packages, Char Dham Yatra, spiritual tours, domestic and international trips, railway ticket booking, hotel booking, and air ticket booking services.",

  keywords: [
    "Relax Route Travels",
    "India tour packages",
    "Char Dham Yatra",
    "spiritual tours India",
    "domestic travel packages India",
    "international travel packages",
    "railway ticket booking",
    "hotel booking India",
    "flight ticket booking",
    "travel agency India",
    "holiday packages India",
    "pilgrimage tours India",
  ],

  authors: [{ name: "Relax Route Travels" }],
  creator: "Relax Route Travels",
  publisher: "Relax Route Travels",

  metadataBase: new URL("https://relaxroutetravels.com"),

  openGraph: {
    title: "Relax Route Travels | Explore India & International Destinations",
    description:
      "Book Char Dham Yatra, spiritual tours, hotel booking, railway tickets, flight tickets and customized India & international travel packages with Relax Route Travels.",
    url: "https://relaxroutetravels.com",
    siteName: "Relax Route Travels",
    icons: { icon: "/LOGO/RELAX_LOGO.png" },
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
      "Best travel agency for Char Dham Yatra, India tours, railway ticket booking, hotel booking and air ticket booking.",
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