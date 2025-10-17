"use client";

import CloseButton from "@/components/close-button";
import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";
import minisIcon from "@/assets/icons/minus.svg";
import plusIcon from "@/assets/icons/plus.svg";

import ConfirmItemBox from "./_component_/confirm-item-box";
import { useState } from "react";

const users = ["조아", "채영", "강현"];

export default function ConfirmDeal() {
  const pricePerItem = 1600;

  const [quantities, setQuantities] = useState<number[]>(
    new Array(users.length).fill(0)
  );

  const handleChange = (idx: number, x: number) => {
    setQuantities((prev) =>
      prev.map((p, i) => (i === idx ? Math.max(0, p + x) : p))
    );
  };

  const handleInputChange = (idx: number, newQ: string) => {
    const newQNum = parseInt(newQ, 10);
    if (isNaN(newQNum)) return;
    setQuantities((prev) =>
      prev.map((p, i) => (i === idx ? Math.max(0, newQNum) : p))
    );
  };
  return (
    <div>
      <div className="relative flex flex-col gap-4">
        <div className="flex justify-center items-center py-[14px] border-b border-[#F2F2F2] relative">
          <div className="absolute left-4">
            <CloseButton />
          </div>
          <h2 className="typo-b18">거래 및 수량 확정</h2>
        </div>
        <ConfirmItemBox />
        <div className="flex flex-col py-3 gap-3 px-4">
          {users.map((u, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col items-center text-[#DADADA] w-20">
                <Image src={samplePrf} alt={u} width={40} height={40} />
                <h4 className="typo-b14">{u}님</h4>
              </div>
              <div className="flex flex-1 items-center gap-1">
                <button onClick={() => handleChange(idx, -1)}>
                  <Image src={minisIcon} alt="-" width={20} height={20} />
                </button>
                <input
                  className="w-10 text-center"
                  value={quantities[idx]}
                  onChange={(e) => handleInputChange(idx, e.target.value)}
                />
                <span className="ml-1 text-[#757575] typo-r14">개</span>
                <button onClick={() => handleChange(idx, +1)}>
                  <Image src={plusIcon} alt="+" width={20} height={20} />
                </button>
              </div>
              <div className="">{pricePerItem * quantities[idx]}원</div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-end">
        <button className="typo-b14 px-[14px] py-2 bg-[#4F4DF8] text-[white] rounded-[4px]">
          거래 및 수량 확정
        </button>
      </div>
    </div>
  );
}
