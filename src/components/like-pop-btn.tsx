"use client";
import { Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LikePopBtn() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
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
