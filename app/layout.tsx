import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { RootProvider } from "./provider";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kristianto & Stephanie",
  description: "Kristianto & Stephanie Wedding Invitation",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lato.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
