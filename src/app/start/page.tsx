"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import kakaoIcon from "@/assets/icons/kakao.svg";
import Image from "next/image";

export default function SplittyIntro() {
  const [reveal, setReveal] = useState(false);
  const letters = ["p", "l", "i", "t", "t", "y"];

  const KAKAO_AUTH_URL = `https://splitty.store/oauth2/authorization/kakao`;
  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 1100); // 네모 갈라지고 글자 보이게
    return () => clearTimeout(t);
  }, []);

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#4f4df8] overflow-hidden -my-[47px] pb-[180px] relative">
      <motion.div
        className="absolute bottom-[120px] px-5 w-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.4,
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <button
          onClick={handleLogin}
          className="bg-[#FEDC2C] w-full py-4 rounded-lg typo-r16 flex gap-3 justify-center items-center"
        >
          <Image src={kakaoIcon} alt="카카오로그인" />
          카카오톡으로 시작하기
        </button>
      </motion.div>
      <div className="flex items-center gap-2">
        {/* --- (겹친 네모) --- */}
        <motion.div className="relative w-14 h-14">
          {/* 왼 */}
          <motion.div
            className="absolute bg-white w-full h-full rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            initial={{ x: -0, y: -0, opacity: 1, skewX: -16 }}
            animate={{ x: -7, y: -7, opacity: 1, skewX: -16 }}
            transition={{
              delay: 0.4,
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 100,
              damping: 16,
            }}
          />
          {/* 오 */}
          <motion.div
            className="absolute bg-white w-full h-full rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            initial={{ x: 0, y: 0, opacity: 1, skewX: -16 }}
            animate={{ x: 7, y: 7, opacity: 1, skewX: -16 }}
            transition={{
              delay: 0.4,
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 100,
              damping: 16,
            }}
          />
        </motion.div>

        {/* splitty  */}
        {/* 글자 plitty => 처음부터 렌더링(공간 차지), opacity 변경 */}
        <div className="flex text-white text-[50px] font-semibold tracking-widest ml-3">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 0, skewX: -16 }}
              animate={{ opacity: reveal ? 1 : 0, y: reveal ? 0 : 0 }}
              transition={{
                delay: 0.3 + i * 0.07,
                duration: 1.2,
                ease: "easeOut",
              }}
              aria-hidden={!reveal}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
