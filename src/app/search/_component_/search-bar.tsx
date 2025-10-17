"use client";
import BackBkBtn from "@/components/back-bk-btn";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div className="flex px-4 py-3 justify-between gap-[10px]">
      <BackBkBtn />
      <input
        placeholder={`미아동 근처에서 검색`}
        className="bg-[#F2F2F2] typo-r14 flex-1 py-[5.5px] px-[14px] rounded-[4px] focus:outline-none"
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        value={search}
      />
      <button className="typo-r12 text-[#8C8C8C]" onClick={onSubmit}>
        검색
      </button>
    </div>
  );
}
