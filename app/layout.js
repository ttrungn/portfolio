import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "logos/favicon.svg",
  },
  openGraph: {
    title: "Trung Nguyen",
    description:
      "I am a fullstack developer who loves creating efficient and scalable applications. My expertise lies in designing APIs, managing databases, and integrating systems. I am now enhancing my skills to transition into a DevOps Engineer role, where I am learning about cloud computing, automation, and managing infrastructure to deliver faster and more reliable software solutions. I believe in constantly improving my skills and aim to connect development and operations to achieve great results.",
    url: "https://trungn.site",
    siteName: "Trung Nguyen",
    images: [
      {
        url: "https://trungn.site/logos/trungdeptraihihi.jpg",
        alt: "trungdeptraihihi",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
