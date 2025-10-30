import { ReactNode, Suspense } from "react";
import SearchBar from "./_component_/search-bar";

export default function WithSearchBarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Suspense>
        <SearchBar />
        {children}
      </Suspense>
    </div>
  );
}
