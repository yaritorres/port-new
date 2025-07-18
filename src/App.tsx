import { useEffect, useState } from "react";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSideNav, setActiveSideNav] = useState(0);
  const [activeProjectList, setActiveProjectList] = useState(0);
  const [activeList, setActiveList] = useState(0);

  const sideNavItems = ['index', 'projects', 'contact'];
  const projectListItems = ['atelier', 'SDC', 'duguid', 'codeAndTell'];
  const projectBlurbs = ['mock e-commerce site', 'database revamp for mock e-commerce site', 'doooo goooood', 'coding and telling'];
  const list = ['hello', 'bald', 'huh'];

  const testBorder = 'border-[0.5px] border-solid border-red-500';

  const sideNavDivStyle = `
    flex flex-row place-items-center w-full gap-x-3 px-1 rounded-[2px] text-center text-[10px] bg-black-900
    hover:bg-white hover:text-black-950 hover:cursor-pointer
  `;
  const bottomNavListStyle = `
    inline-block text-white text-xs px-3 bg-black-900
    hover:text-black-950 hover:bg-white hover:cursor-pointer
  `;
  const mainSectionStyle = `w-full min-h-full bg-black-900 rounded-lg grid grid-cols-8 grid-rows-4 gap-8 px-18 py-18`;
  const projectItemStyle = `flex flex-col w-full h-full gap-y-1 font-main`;
  const gridStyle = `bg-black-800 w-full h-24`;

  const circle = <div className={``}>{']'}</div>;

  useEffect(() => {
    function cycleCarousel () {
      if (activeList < list.length - 1) {
        setActiveList(activeList + 1)
      } else {
        setActiveList(0);
      }
    }

    setTimeout(cycleCarousel, 2000)
  })

  return (
    <>
      <div className={`
          w-screen h-screen bg-black-950 rounded-lg absolute inset-0 py-[48px] px-[12px]
        `}
      >
        <img className="h-[20px] scale-y-[-1] absolute" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
        <img
          className="h-[20px] scale-x-[-1] scale-y-[-1] absolute right-[12px]"
          src="../public/rounded_inner_corner.svg"
          width={20}
          alt=""
        >
        </img>

        <div className={`w-full h-full flex flex-col gap-y-[12px] overflow-y-scroll scrollbar-hidden`}>
            <div className={mainSectionStyle}>
              <div className={`col-span-2 row-span-2 font-main text-xl`}>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
                welcome to my portfolio. <br></br>
              </div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={`bg-blorange col-span-4 row-span-3`}>
                { list.map((item, key) =>
                  <div
                    key={key}
                    className={`${projectItemStyle} ${ key === activeList ? '' : 'hidden' }`}
                  >
                    <p className="font-bold text-3xl text-center">{item}</p>
                  </div>
                )}
              </div>
              <div className={gridStyle}></div>
              <div className={`flex flex-col gap-y-3 row-span-2`}>
                { projectListItems.map((nav, key) =>
                  <div
                    key={key}
                    className={`${projectItemStyle} ${ key === activeProjectList ? '' : 'hidden' }`}
                  >
                    <p className="font-bold text-md">{nav}</p>
                    <p className={`text-xs`}>{projectBlurbs[key]}</p>
                  </div>
                )}
              </div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
            </div>

            <div className={mainSectionStyle}>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
            </div>
          </div>

        <img className="h-[20px] absolute bottom-[48px]" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
        <img
          className="h-[20px] scale-x-[-1] absolute bottom-[48px] right-[12px]"
          src="../public/rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>
      </div>

        { /* BOTTOM NAV */ }
        {/* <div className="flex flex-row absolute lg:left-[43%] bottom-[48px] h-8">
          <img className="scale-x-[-1] h-[40px]" src="../public/rounded_inner_corner.svg" width={30} alt=""></img>
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
          <img className="h-[40px]" src="../public/rounded_inner_corner.svg" width={30} alt=""></img>
        </div> */}

      { /* SIDE NAV */ }
      <div id="side-nav-container" className="absolute top-[45%] left-[12px] flex flex-col">
        <img id="corner-top" className="h-[20px]" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
        <div
          onMouseEnter={() => { setIsSideNavOpen(true) }}
          onMouseLeave={() => { setIsSideNavOpen(false) }}
          className={`
            flex justify-center w-3 p-3 bg-black-950 rounded-r-md
            hover:w-auto hover:min-w-fit
          `}
        >
          <div className={`flex flex-col gap-y-[3px]`}>
            { sideNavItems.map((nav, key) =>
              <div
                key={key}
                className={`${sideNavDivStyle} ${ key === activeSideNav ? 'bg-white text-black-950' : '' }`}
                onClick={ () => { setActiveSideNav(key) } }
              >
                {circle}
                <p className={`${ isSideNavOpen ? '' : 'hidden' }`}>{nav}</p>
              </div>
            )}
          </div>
        </div>
        <img id="corner-bottom" className="scale-y-[-1] h-[20px]" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
      </div>
    </>
  )
}

export default App
