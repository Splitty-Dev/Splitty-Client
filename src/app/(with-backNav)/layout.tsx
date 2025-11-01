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
      <div className="px-4 py-3 -pt-[20px]">
        <BackBkBtn />
      </div>
      {children}
    </div>
  );
}
