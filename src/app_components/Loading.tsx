import { motion } from "motion/react";

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-fit flex flex-col justify-center items-center gap-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-xl font-medium mb-4"
      >
        Finding your perfect movies...
      </motion.div>
      
      <div className="flex justify-center items-center gap-3">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-4 h-4 bg-white/80 rounded-full shadow-lg"
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.2
          }}
          className="w-4 h-4 bg-white/60 rounded-full shadow-lg"
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.4
          }}
          className="w-4 h-4 bg-white/40 rounded-full shadow-lg"
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.6
          }}
          className="w-4 h-4 bg-white/20 rounded-full shadow-lg"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-white/60 text-sm"
      >
        This may take a few moments
      </motion.div>
    </motion.div>
  )
}

export default Loading;
