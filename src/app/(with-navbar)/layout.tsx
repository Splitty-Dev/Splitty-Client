import { ReactNode } from "react";
import BottomNav from "./bottom-nav/bottom-nav";

export default function WithNavbarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
