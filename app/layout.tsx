import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://photographer-portfolio-copy.vercel.app"),
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
    canonical: "https://photographer-portfolio-copy.vercel.app",
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
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
