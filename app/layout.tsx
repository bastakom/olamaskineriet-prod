import type { Metadata } from "next";
import "./globals.css";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";

import { Header } from "@/components/ui/header/header";

export const metadata: Metadata = {
  title: "Ola och maskineriet",
  description:
    "Med rötterna i postpunk och pop skapas melodier som berör, med texter som berättar unika historier. Det skånska uttrycket är ärligt, vackert och kraftfullt. Med Maskineriet skapas bilder man vill vara en del av och uppleva mer av.",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
