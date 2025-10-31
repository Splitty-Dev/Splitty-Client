import { Suspense } from "react";
import HomeClient from "./_component/homeClient";

export default function HomePage() {
  return (
    <Suspense>
      <HomeClient />
    </Suspense>
  );
}
