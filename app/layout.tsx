import Bootstrap from "@/components/shared/Bootstrap";
import Progress from "@/components/shared/Progress";
import type { Metadata } from "next";
import "./assets/scss/main.scss";

export const metadata: Metadata = {
  title: "NFTG - Esports and NFT Gaming Nextjs Template",
  description: "NFTG - Esports and NFT Gaming Nextjs Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Progress />
        <Bootstrap>{children}</Bootstrap>
      </body>
    </html>
  );
}
