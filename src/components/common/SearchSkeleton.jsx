import React from "react";
import Skeleton from "react-loading-skeleton";

const SearchSkeleton = ({ card }) => {
  return (
    <div>
      {Array(card)
        .fill(0)
        .map((val, i) => {
          return <Skeleton width={200} height={200} key={i} />;
        })}
    </div>
  );
};

export default SearchSkeleton;
