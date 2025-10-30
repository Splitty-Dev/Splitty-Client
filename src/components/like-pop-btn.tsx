"use client";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiFetch } from "@/app/api";
import { getIsWish } from "@/app/api/product";
import { useQuery } from "@tanstack/react-query";

export default function LikePopBtn({ goodsId }: { goodsId: number }) {
  const queryKey = ["isWishList", goodsId];
  const queryFn = () => getIsWish(goodsId);
  const { data } = useQuery({ queryKey, queryFn });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (data?.isInWishList !== undefined) {
      setLiked(data.isInWishList);
    }
  }, [data]);

  const handleLike = async () => {
    if (!liked) {
      await apiFetch(`/wishlist`, {
        method: "POST",
        body: JSON.stringify({ goodsId }),
      });
    } else {
      await apiFetch(`/wishlist/${goodsId}`, { method: "DELETE" });
    }
    setLiked(!liked);
  };
  return (
    <div>
      <motion.button onClick={handleLike} whileTap={{ scale: 0.8 }}>
        <Heart
          className={liked ? "fill-[#FF4F8B] text-[#FF4F8B]" : "text-gray-400"}
          size={25}
        />
      </motion.button>
    </div>
  );
}
