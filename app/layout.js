import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   icons: {
//     icon: "logos/favicon.svg",
//   },
//   openGraph: {
//     title: "Trung Nguyen",
//     description:
//       "I am a fullstack developer who loves creating efficient and scalable applications. My expertise lies in designing APIs, managing databases, and integrating systems. I am now enhancing my skills to transition into a DevOps Engineer role, where I am learning about cloud computing, automation, and managing infrastructure to deliver faster and more reliable software solutions. I believe in constantly improving my skills and aim to connect development and operations to achieve great results.",
//     url: "https://trungn.site",
//     siteName: "Trung Nguyen",
//     image: {
//       url: "https://trungn.site/logos/trungdeptraihihi.jpg",
//       width: 1200,
//       height: 630,
//       alt: "trungdeptraihihi",
//     },
//     type: "website",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Trung Nguyen" />
        <meta
          property="og:description"
          content="I am a fullstack developer who loves creating efficient and scalable applications..."
        />
        <meta property="og:url" content="https://trungn.site" />
        <meta property="og:site_name" content="Trung Nguyen" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://trungn.site/logos/trungdeptraihihi.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="trungdeptraihihi" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
