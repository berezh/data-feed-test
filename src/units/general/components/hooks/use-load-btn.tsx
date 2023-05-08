import React, { useState } from "react";
import { Spinner } from "@blueprintjs/core";

export function useLoadMoreBtn(): {
  loading: boolean;
  setLoading: (value: boolean) => void;
  loadMoreBtn: () => JSX.Element;
  filterLoading: JSX.Element;
} {
  const [loading, setLoading] = useState(false);
  const filterLoading = (
    <div style={{ display: "inline-flex", width: 90, justifyContent: "space-between" }}>
      <Spinner size={16} />
      Loading ...
    </div>
  );
  const loadMoreBtn = () => <div>{loading ? filterLoading : "Load More"}</div>;

  return { loading, setLoading, loadMoreBtn, filterLoading };
}
