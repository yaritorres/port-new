import { useState } from "react";
import { motion } from "motion/react";

export default function SideNav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSideNav, setActiveSideNav] = useState(0);

  const sideNavItems = ['index', 'projects', 'contact'];

  const testBorder = 'border-[0.5px] border-solid border-red-500';

  const sideNavDivStyle = `
    flex flex-row place-items-center w-full gap-x-3 px-1 rounded-[2px] text-center text-[10px] bg-black-900
    hover:cursor-pointer
  `;

  const circle = <div className={``}>{'o'}</div>;

  return (
    <div
      id="side-nav-container"
      className="z-50 absolute top-[45%] left-[12px] flex flex-col"
    >
      <img
        id="corner-top"
        className="h-[20px]"
        src="../rounded_inner_corner.svg"
        width={20}
        alt=""
      ></img>
      <motion.div
        onMouseEnter={() => {
          setIsSideNavOpen(true);
        }}
        onMouseLeave={() => {
          setIsSideNavOpen(false);
        }}
        whileHover={{ width: '100px' }}
        className={`
          flex justify-center p-3 bg-black-950 rounded-r-md
        `}
      >
        <div className={`flex flex-col gap-y-[3px]`}>
          {sideNavItems.map((nav, key) => (
            <motion.div
              key={key}
              className={`${sideNavDivStyle} ${
                key === activeSideNav ? 'bg-white text-black-950' : ''
              }`}
              onClick={() => {
                setActiveSideNav(key);
              }}
            >
              {circle}
              <p className={`${isSideNavOpen ? '' : 'hidden'}`}>{nav}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <img
        id="corner-bottom"
        className="scale-y-[-1] h-[20px]"
        src="../rounded_inner_corner.svg"
        width={20}
        alt=""
      ></img>
    </div>
  );
}