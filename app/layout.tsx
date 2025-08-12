import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | 写真家のプロフィールサイト",
    default: "写真家のプロフィールサイト",
  },
  description:
    "模写修行の写真家のプロフィールサイトをNext.jsで作成したサイトです。",
  openGraph: {
    title: "写真家のプロフィールサイト",
    description:
      "模写修行の写真家のプロフィールサイトをNext.jsで作成したサイトです",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
