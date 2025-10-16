import BackBkBtn from "@/components/back-bk-btn";

export default function SearchBar() {
  return (
    <div className="flex px-4 py-3 justify-between gap-[10px]">
      <BackBkBtn />
      <input
        placeholder={`미아동 근처에서 검색`}
        className="bg-[#F2F2F2] typo-r14 flex-1 py-[5.5px] px-[14px] rounded-[4px] focus:outline-none"
      />
      <button className="typo-r12 text-[#8C8C8C]">검색</button>
    </div>
  );
}
