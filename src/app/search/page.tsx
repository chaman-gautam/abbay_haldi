import { Suspense } from "react";
import SearchContent from "./search-content";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-28 px-6">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
