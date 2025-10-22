import MyHistory from "./_component_/myHistory";
import MyLikedList from "./_component_/myLikedList";
import MyLocation from "./_component_/myLocation";
import UserInfo from "./_component_/userInfo";

export default function MyPage() {
  return (
    <div className="bg-[#F2F2F2] w-full h-[calc(100vh-47px)] mt-[-47px] pt-[47px] flex flex-col">
      <div className="typo-b18 pt-4 pb-[14px] px-4">마이페이지</div>
      <main className="flex flex-col gap-[14px] ">
        <UserInfo />
        <MyHistory />
        <MyLocation />
        <MyLikedList />
      </main>
    </div>
  );
}
