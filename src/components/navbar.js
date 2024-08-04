import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [toggle]);

  const handleToggle = () => {
    setToogle(!toggle);
  };
  return (
    <div className="scroll-smooth">
      <div className="flex p-[16px] font-sora  flex-cols items-center justify-between">
        <a href="#home">
          <div className="text-[24px] font-bold">Sugam Gelal</div>
        </a>
        <div className=" hidden md:flex  md:gap-4  md:list-none md:mx-[16px]">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
        <button className="hidden md:flex md:items-center md:gap-2 md:bg-black md:text-white md:w-[153px] md:h-[56px] md:rounded-md justify-center hover:bg-#404040">
          Resume
          <IoMdDownload />
        </button>
        {!toggle ? (
          <GiHamburgerMenu
            className="md:hidden cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <GiCancel
            className="md:hidden cursor-pointer"
            onClick={handleToggle}
          />
        )}
      </div>
      {toggle && (
        <motion.div
          className="menu-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="menu-items"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <div className=" flex flex-col gap-4 font-sora items-end list-none mx-[16px] bg-zinc-300 h-[100vh] md:hidden">
              <div className=" flex flex-col gap-4 items-end p-[16px] ">
                <li>
                  <a href="#about" onClick={handleToggle}>
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skill" onClick={handleToggle}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#project" onClick={handleToggle}>
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleToggle}>
                    Contact
                  </a>
                </li>
                <li>
                  <button className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-#404040">
                    Resume
                    <IoMdDownload />
                  </button>
                </li>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
