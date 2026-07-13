import { Inter } from "next/font/google"; // Garanta que o import do Inter está aqui
import { Metadata } from "next"; // Garanta que o import do Metadata está aqui

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Steam Tracker",
  description: "Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
