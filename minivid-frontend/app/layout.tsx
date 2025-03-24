import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavigationBar from "@/components/navigation/NavigationBar";

export const metadata: Metadata = {
  title: "Mini Vid",
  description: "Mini Vid - Tool for easy video editing!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col items-center h-screen max-w-screen gap-20">
              <NavigationBar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
