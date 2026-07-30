import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-64 overflow-hidden rounded-xl bg-white animate-pulse">
      <div className="relative rounded-xl bg-gray-100">
        {/* Image */}
        <div className="h-80 w-full rounded-xl bg-gray-300"></div>

        {/* Favorite button */}
        <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-gray-200"></div>

        {/* Sale badge */}
        <div className="absolute left-3 top-3 h-6 w-12 rounded bg-gray-300"></div>
      </div>

      <div className="mt-3 px-1">
        {/* Price */}
        <div className="h-7 w-24 rounded bg-gray-300"></div>

        {/* Monthly payment */}
        <div className="mt-3 h-6 w-32 rounded bg-gray-300"></div>

        {/* Title */}
        <div className="mt-4 h-4 w-full rounded bg-gray-300"></div>
        <div className="mt-2 h-4 w-3/4 rounded bg-gray-300"></div>

        {/* Category */}
        <div className="mt-4 h-3 w-20 rounded bg-gray-300"></div>

        {/* Rating */}
        <div className="mt-2 h-3 w-28 rounded bg-gray-300"></div>

        {/* Button */}
        <div className="mt-4 h-12 w-full rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;