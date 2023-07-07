import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <script src="https://kit.fontawesome.com/e852077c87.js" crossorigin="anonymous"></script>
        </Head>
        <title>CloudOlle</title>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
