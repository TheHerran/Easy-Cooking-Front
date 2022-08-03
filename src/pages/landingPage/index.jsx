import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>Landing Page</h1>
        <h2>Hello Easy Cooking</h2>
        <p>Cozinhando fácil!</p>
      </div>
    </motion.div>
  );
}
