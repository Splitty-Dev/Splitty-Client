const categories = [
  "전체",
  "식품",
  "생활/주방",
  "뷰티/미용",
  "패션",
  "건강/운동",
  "유아/아동",
];

export default function CategoryBar() {
  return (
    <div className=" px-4 typo-r14 flex py-4 overflow-x-auto gap-2 whitespace-nowrap scroll-smooth [scrollbar-width:none] border-b border-[#F2F2F2]">
      {categories.map((cat, idx) => (
        <div
          className="py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] "
          key={idx}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
