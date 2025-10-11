import MyInfo from "./_component_/myInfo";
import MyHistory from "./_component_/myHistory";
import MyLocation from "./_component_/myLocation";

// interface MyPageProps {
//   //image
//   name: string;
//   location: string;
//   rating: number;
// }

export default function MyPage() {
  return (
    <div className="bg-[#F2F2F2] w-full h-[calc(100vh-47px)] mt-[-47px] pt-[47px] flex flex-col">
      <div className="typo-b18 pt-4 pb-[14px] px-4">마이페이지</div>
      <main className="flex flex-col gap-[14px]">
        <MyInfo />
        <MyHistory />
        <MyLocation />
      </main>
    </div>
  );
}
