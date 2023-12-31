"use client";
import { motion } from "framer-motion";
const PhonesDesc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5, once: true }}
      className="relative z-50 flex-1"
    >
      <h3 className="text-4xl font-semibold text-white xl:text-3xl lg:text-2xl sm:text-xl">
        State of the Art Infrastructure
      </h3>
      <p className="mt-6 text-white/70 lg:mt-4 lg:text-sm sm:mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
        suscipit obcaecati illo cum saepe optio porro commodi quae eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates
        error itaque ducimus labore voluptate!
      </p>
    </motion.div>
  );
};
export default PhonesDesc;

// const PhonesDesc = () => {
//   return (
//     <div className="flex-1">
//       <h3 className="text-4xl font-semibold text-white xl:text-3xl lg:text-2xl sm:text-xl">
//         State of the Art Infrastructure
//       </h3>
//       <p className="mt-6 text-white/70 lg:mt-4 lg:text-sm sm:mt-3">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
//         suscipit obcaecati illo cum saepe optio porro commodi quae eligendi.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates
//         error itaque ducimus labore voluptate!
//       </p>
//     </div>
//   );
// };
// export default PhonesDesc;
