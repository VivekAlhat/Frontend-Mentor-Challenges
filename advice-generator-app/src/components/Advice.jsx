import { motion } from "framer-motion";

const Advice = ({ adviceDetails, pattern, getAdvice }) => {
  const { id, advice } = adviceDetails;

  return (
    <>
      <p className="text-neon-green uppercase tracking-[5px]">Advice #{id}</p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-light-cyan text-[28px] text-center"
      >
        &quot;{advice}&quot;
      </motion.p>
      <img
        src={`/images/pattern-divider-${pattern}.svg`}
        alt="divider"
        className="mb-8"
      />
      <motion.div
        whileHover={{ rotate: 90 }}
        className="bg-neon-green p-6 cursor-pointer rounded-full absolute -bottom-8 mx-auto hover:shadow-simple  hover:shadow-neon-green transition ease-linear"
        onClick={getAdvice}
      >
        <img src="/images/icon-dice.svg" alt="generate advice" />
      </motion.div>
    </>
  );
};

export default Advice;
