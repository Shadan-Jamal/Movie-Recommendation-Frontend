import { AnimatePresence, motion } from "motion/react";

const Loading = () => {
  return (
    <>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-[20px] h-[20px] border-2 rounded-full"
        />
         <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay : 0.38
          }}
          className="w-[20px] h-[20px] border-2 rounded-full"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay : 0.19
          }}
          className="w-[20px] h-[20px] border-2 rounded-full"
        />
    </>
  )
}

export default Loading;
