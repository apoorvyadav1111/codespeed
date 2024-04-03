import type { Metadata } from "next";
import { Fira_Code as Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codespeed",
  description: "Improve your coding speed",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: dark)",
        url:"/code.svg",
        href:"/code.svg",
      },
      {
        media:"(prefers-color-scheme: light)",
        url:"/code.svg",
        href:"/code.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
      </body>
    </html>
  );
}
