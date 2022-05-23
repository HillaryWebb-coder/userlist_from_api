import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function User({ user }) {
  return (
    <motion.div
      className="user border-shadow"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.7, opacity: { ease: "linear" } }}
    >
      <motion.div
        className="user-img"
        style={{ backgroundImage: `url('${user.avatar}')` }}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      />
      <div className="user-details">
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </motion.div>
  );
}
