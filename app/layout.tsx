import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "திருமண அழைப்பிதழ் | Wedding Invitation",
  description:
    "You are cordially invited to celebrate the sacred union of our beloved couple. A traditional Tamil wedding celebration.",
  keywords: ["wedding", "invitation", "Tamil", "traditional", "celebration"],
  openGraph: {
    title: "திருமண அழைப்பிதழ் | Wedding Invitation",
    description:
      "You are cordially invited to celebrate the sacred union of our beloved couple.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif+Tamil:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
