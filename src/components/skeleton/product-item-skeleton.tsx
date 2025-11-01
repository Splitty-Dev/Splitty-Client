export default function ProductItemSkeleton() {
  return (
    <div
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] animate-pulse `}
    >
      <div className="w-[110px] h-[110px] rounded-[4px] bg-[#F2F2F2]" />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <div className="bg-[#F2F2F2] w-[109px] h-5"></div>
          <div className=" bg-[#F2F2F2] w-[109px] h-4"></div>
          <div className=" bg-[#F2F2F2] w-[71px] h-5"></div>
        </div>
        <div className="bg-[#F2F2F2] w-[71px] h-5 flex justify-end "></div>
      </div>
    </div>
  );
}
