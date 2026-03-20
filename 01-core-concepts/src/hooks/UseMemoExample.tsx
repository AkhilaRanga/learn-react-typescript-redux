import React, { useMemo } from "react";

export const UseMemoExample = ({ items }: { items: number[] }) => {
  const total = useMemo(() => {
    console.log("Calculating total");
    return items.reduce((sum, i) => sum + i, 0);
  }, [items]);

  return <div>Total: {total}</div>;
};

export const MemoizedUseMemoExample = React.memo(UseMemoExample);
