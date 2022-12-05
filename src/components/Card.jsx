import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Card = ({ id, title, avatar, makeSelected }) => {
  const variants = {
    visible: { scale: 1, rotate: 360, opacity: 1 },
    hidden: { rotate: 180, scale: 0, opacity: 0 },
  };
  return (
    <motion.div
      className="card-grid  bottom grid h-[16rem] w-[14rem]  overflow-hidden rounded-t-3xl rounded-b-2xl p-2"
      onClick={makeSelected.bind(this, id)}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 1.05 }}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          className="h-[12rem] w-full  object-cover object-top"
          src={avatar}
          alt="fighter"
        />
      </div>
      <p className="grid items-center text-center text-2xl font-semibold">
        <span>{title}</span>
      </p>
    </motion.div>
  );
};

export default Card;
