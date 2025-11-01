"use client";

import { ReactNode } from "react";
import BackBkBtn from "@/components/back-bk-btn";

export default function WithNavbarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div className="px-4 pb-3  flex">
        <BackBkBtn />
      </div>
      {children}
    </div>
  );
}
