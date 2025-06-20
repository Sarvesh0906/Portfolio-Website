import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Portfolio App",
    description: "Portfolio app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <TransitionProvider>{children}</TransitionProvider>
            </body>
        </html>
    );
}

