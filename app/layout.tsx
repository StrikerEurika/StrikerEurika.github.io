import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import TabIconUpdater from "@/components/tab-icon-updater";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ngen Tina | Data Science Portfolio",
    template: "%s | Ngen Tina",
  },
  description:
    "Data Science major and analytics enthusiast. Explore my projects in machine learning, data visualization, and statistical analysis.",
  keywords: [
    "data science",
    "machine learning",
    "analytics",
    "python",
    "portfolio",
    "student",
  ],
  authors: [{ name: "Ngen Tina" }],
  creator: "Ngen Tina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ngentina-portfolio.vercel.app",
    title: "Ngen Tina | Data Science Portfolio",
    description:
      "Data Science major and analytics enthusiast. Explore my projects in machine learning, data visualization, and statistical analysis.",
    siteName: "Ngen Tina Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngen Tina | Data Science Portfolio",
    description:
      "Data Science major and analytics enthusiast. Explore my projects in machine learning, data visualization, and statistical analysis.",
    creator: "@tina_ngen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/light-nt-icon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TabIconUpdater />
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
