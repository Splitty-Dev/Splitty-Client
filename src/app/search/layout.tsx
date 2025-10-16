import { ReactNode } from "react";
import SearchBar from "./_component_/search-bar";

export default function WithSearchBarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
