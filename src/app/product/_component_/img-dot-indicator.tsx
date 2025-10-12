export default function DotIndicator({ active }: { active: boolean }) {
  return (
    <div
      className={`w-[6px] h-[6px] rounded-[100px] ${
        active ? "bg-[white]" : "bg-[white]/30"
      }`}
    ></div>
  );
}
