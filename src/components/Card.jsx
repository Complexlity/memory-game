// This helps animate the cards when the component mounts. See https://www.framer.com/motion/animation/ for more information on how it works
import { motion } from "framer-motion";

// This components takes in the cards information and creates a new card item
const Card = ({ id, title, avatar, makeSelected }) => {
  // Putting multiple animations in a single object as stated by the framer-motion documentation
  const variants = {
    visible: { scale: 1, rotate: 360, opacity: 1 },
    hidden: { rotate: 180, scale: 0, opacity: 0 },
  };
  return (
    <motion.div
      className="card-grid bottom grid h-[16rem] w-[14rem] overflow-hidden  rounded-t-3xl rounded-b-2xl bg-sky-700 p-2"
      onClick={makeSelected.bind(this, id)}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 1.05 }}
    >
      {/* the motion key-word is how you get access to the framer motion function in your object*/}
      <div className="overflow-hidden rounded-2xl">
        <img
          className="h-[12rem] w-full  object-cover object-top"
          src={avatar}
          alt="fighter"
        />
      </div>
      <p className="names grid items-center text-center text-2xl font-semibold text-gray-300">
        <span>{title}</span>
      </p>
    </motion.div>
  );
};

export default Card;
