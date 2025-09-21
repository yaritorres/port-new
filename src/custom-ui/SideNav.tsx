import { useState } from "react";
import { motion } from "motion/react";

export default function SideNav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSideNav, setActiveSideNav] = useState(0);

  const sideNavDelay = [ 0.2, 0.5, 0.3 ];

  const sideNavItems = ['index', 'works', 'contact'];

  const activeAnimation = {
    backgroundColor: isSideNavOpen ? [ '#ffffff', '#000000', '#ffffff', '#000000', '#ffffff' ] : '#000000',
  };

  const inactiveAnimation = {
    backgroundColor: isSideNavOpen ? [ '#000000', '#ffffff', '#000000', '#ffffff', '#000000' ] : '#000000'
  };

  const sideNavDivStyle = `
    flex flex-row place-items-center gap-x-3 px-1 rounded-[2px] text-center text-[10px] bg-black-900
    hover:cursor-pointer
  `;

  const handleScroll = (id: string) => {
    const pageElement = document.getElementById(id);

    console.log(pageElement);

    if (pageElement) {
      pageElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  const circle = <div className={``}>{'o'}</div>;

  return (
    <div
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
        whileHover={{ width: '90px' }}
        transition={{ duration: 0.3, delay: isSideNavOpen ? 0.4 : 0 }}
        className={`
          flex justify-center p-3 bg-black-950 rounded-r-md
        `}
      >
        <div className={`flex flex-col gap-y-[3px]`}>
          {sideNavItems.map((nav, key) => (
            <motion.div
              key={key}
              className={`
                ${sideNavDivStyle} ${ isSideNavOpen && activeSideNav === key ? 'text-black-950' : 'text-white' }
              `}
              onClick={() => {
                setActiveSideNav(key);
              }}
              layout
              transition={{ times: [ 0.4, 0.5, 0.7, 0.9, 1 ], delay: sideNavDelay[key] }}
              initial={false}
              animate={ activeSideNav === key ? activeAnimation : inactiveAnimation }
            >
              {circle}
              <motion.p
                layout
                transition={{ delay: 0.1, opacity: { delay: 0.3 }}}
                initial={{ display: 'none', opacity: 0 }}
                animate={{ display: isSideNavOpen ? 'inline' : 'none', opacity: isSideNavOpen ? 1 : 0 }}
                onClick={ () => handleScroll(nav) }
              >
                {nav}
              </motion.p>
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