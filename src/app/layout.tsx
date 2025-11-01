import type { Metadata, Viewport } from "next";
import "./globals.css";
import { pretendard } from "./fonts";
import Providers from "./providers";
import ClientProvider from "./client-provider";

export const metadata: Metadata = {
  title: "Splitty | 함께 나누는 똑똑한 소비",
  description:
    "필요한 만큼만, 함께 사는 시대. Splitty에서 똑똑하게 소분하고 나눠요.",
  icons: {
    icon: "/splityLogo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="pb-[var(--app-safe-bottom)] bg-white min-h-screen">
        <ClientProvider>
          <Providers>{children}</Providers>
        </ClientProvider>
      </body>
    </html>
  );
}
