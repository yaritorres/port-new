import { useState } from 'react';
import { motion } from "motion/react"
import Work from './pages/Work';
import Index from './pages/Index';
import Contact from './pages/Contact';
import { animate } from 'motion';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSideNav, setActiveSideNav] = useState(0);

  const sideNavItems = ['index', 'projects', 'contact'];

  const testBorder = 'border-[0.5px] border-solid border-red-500';

  const sideNavDivStyle = `
    flex flex-row place-items-center w-full gap-x-3 px-1 rounded-[2px] text-center text-[10px] bg-black-900
    hover:cursor-pointer
  `;
  const bottomNavListStyle = `
    inline-block text-white text-xs px-3 bg-black-900
    hover:text-black-950 hover:bg-white hover:cursor-pointer
  `;

  const circle = <div className={``}>{'o'}</div>;

  return (
    <>
      <div
        className={`
          relative w-screen h-screen bg-black-950 rounded-lg inset-0 py-[48px] px-[12px] z-50 overflow-hidden text-black-50
        `}
      >
        <div
          className={`
          absolute bg-fixed bg-auto inset-[-50%_0%_0%_-50%] w-[200%] h-[200vh] pointer-events-none mix-blend-normal
          bg-[url(/grain_background.png)] z-10 animate-grain
        `}
        />

        <img
          className="h-[20px] scale-y-[-1] absolute"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>
        <img
          className="h-[20px] scale-x-[-1] scale-y-[-1] absolute right-[12px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>

        <div
          className={`w-full h-full flex flex-col gap-y-[8px] overflow-y-scroll scrollbar-hidden`}
        >
          <Index />
          <Work />
          <Contact />
        </div>

        <img
          className="h-[20px] absolute bottom-[48px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>
        <img
          className="h-[20px] scale-x-[-1] absolute bottom-[48px] right-[12px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>
      </div>

      {/* BOTTOM NAV */}
      {/* <div className="flex flex-row absolute lg:left-[43%] bottom-[48px] h-8">
          <img className="scale-x-[-1] h-[40px]" src="../rounded_inner_corner.svg" width={30} alt=""></img>
          <div
            className={`
            bg-black-950 rounded-t-lg h-12
            `}
          >
            <ul className="flex flex-row">
              <div className={``}>
                <li className={bottomNavListStyle}> home </li>
              </div>
              <div className="">
                <li className={bottomNavListStyle}> projects </li>
              </div>
              <div className="">
                <li className={bottomNavListStyle}> contact </li>
              </div>
            </ul>
          </div>
          <img className="h-[40px]" src="../rounded_inner_corner.svg" width={30} alt=""></img>
        </div> */}

      {/* SIDE NAV */}
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
    </>
  );
}

export default App;
