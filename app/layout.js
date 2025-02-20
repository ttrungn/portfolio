import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "logos/favicon.svg",
  },
  title: "Trung Nguyen",
  description:
    "I am a back-end developer passionate about building efficient, scalable applications, specializing in API design, database management, and system integration. I am transitioning into DevOps, expanding my skills in cloud computing, automation, and infrastructure management to deliver faster, reliable software solutions. Committed to continuous learning, I aim to bridge development and operations for impactful results. I may not have all the answers, but I am committed to finding solutions and learning along the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
