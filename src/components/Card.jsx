import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1}
      className="flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3 ">
          <h5>{data.filesize}</h5>
          <span className="bg-zinc-500 w-7 h-7 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag py-4 w-full ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex align-center justify-center text-sm font-semibold`}
          >
            {data.tag.tagTitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
