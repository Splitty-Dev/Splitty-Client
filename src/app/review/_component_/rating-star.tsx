"use client";
import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingStar() {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex gap-[4px] px-4">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        const halfValue = i + 0.5;

        return (
          <div key={i} className="relative cursor-pointer">
            <div
              className="absolute left-0 w-1/2 h-full"
              onClick={() => handleClick(halfValue)}
            />

            <div
              className="absolute right-0 w-1/2 h-full"
              onClick={() => handleClick(starValue)}
            />
            {/* 별 표시 */}
            {rating >= starValue ? (
              <FaStar className="text-[#4f4df8] text-[30px]" />
            ) : rating >= halfValue ? (
              <FaStarHalfAlt className="text-[#4f4df8] text-[30px]" />
            ) : (
              <FaRegStar className="text-[#C8C8C8] text-[30px]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
