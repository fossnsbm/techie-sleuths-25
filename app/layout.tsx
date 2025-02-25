import type { Metadata } from "next";
import { Henny_Penny } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Henny_Penny({ subsets: ["latin"], weight: "400" });
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/HarryP.ttf',
  weight: '700',
  style: 'normal',
});
export const metadata: Metadata = {
  title: "Techie Sleuths",
  description: "An Enchanting Tech Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", myFont.className)}>
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
