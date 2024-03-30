import type { Metadata } from "next";
import "./globals.css";

// google fonts
import { Open_Sans, Permanent_Marker} from "next/font/google";
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-sans',
})
const permanent_marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
})


// metadata
export const metadata: Metadata = {
  title: "OPEN GRILL",
  description: "Make sure everyone gets the food they want at your BBQ",
};

//export data
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
