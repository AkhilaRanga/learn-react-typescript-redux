import React, { lazy, Suspense } from "react";

export const LazyExample = () => {
  const LazyComponent = lazy(() => import("../App"));

  return (
    <>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
};
