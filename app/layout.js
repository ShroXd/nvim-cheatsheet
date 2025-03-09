import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Neovim Cheatsheet – Search, Save & Customize Vim Commands",
    description: "Discover and favorite essential Neovim and Vim commands, motions, plugin commands, and find alternative mappings. Create your personalized cheatsheet for efficient text editing and mastering Vim. Whether you're a beginner or a advanced user, you will find the command you are looking for. Explore command for popular plugins like nvim-tree, telescope, and more. Customize your workflow with custom keybindings, commands for enhanced productivity, and streamline your Neovim setup for maximum efficiency. Perfect for developers, sysadmins, and anyone looking to boost their text editing skills."
};


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Analytics />
        </body>
        </html>
    );
}
