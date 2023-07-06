"use client"
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import AppContext from "./context/store";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [id, setId] = useState('');
  return (
    <html lang="en">
      <Head>
        <script src="https://kit.fontawesome.com/e852077c87.js" crossorigin="anonymous"></script>
        </Head>
        <title>CloudOlle</title>
      <AppContext.Provider value={{id, setId}}>
      <body className={inter.className}>
        {children}
      </body>
      </AppContext.Provider>
    </html>
  );
}
