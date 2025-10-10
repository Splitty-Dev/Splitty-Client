import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "Splitty | 함께 나누는 똑똑한 소비",
  description:
    "필요한 만큼만, 함께 사는 시대. Splitty에서 똑똑하게 소분하고 나눠요.",
  icons: {
    icon: "/splityLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
