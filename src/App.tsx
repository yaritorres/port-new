import { useState } from "react";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSideNav, setActiveSideNav] = useState('0');

  const sideNavItems = ['index', 'projects', 'contact']

  const sideNavDivStyle = `
    flex flex-row place-items-center w-full gap-x-3 px-1 rounded-[2px] text-center text-[10px] bg-black-900
    hover:bg-white hover:text-black-950 hover:cursor-pointer
  `;
  const bottomNavListStyle = `
    inline-block text-white text-xs px-3 bg-black-900
    hover:text-black-950 hover:bg-white hover:cursor-pointer
  `;
  const mainSectionStyle = `w-full bg-black-900 rounded-lg grid grid-cols-4 grid-rows-4 gap-8 px-18 py-18`
  const gridStyle = `bg-black-800 w-full h-24`;

  const testBorder = 'border-[0.5px] border-solid border-red-500';
  const circle = <div className={``}>{']'}</div>;

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
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={gridStyle}></div>
              <div className={`bg-blorange col-span-2 row-span-2`}>image carousel self scrolling</div>
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
      <div
        onMouseEnter={() => { setIsSideNavOpen(true) }}
        onMouseLeave={() => { setIsSideNavOpen(false) }}
        className={`flex flex-col absolute max-w-fit top-[45%] left-[12px]`}
      >
        <img className="h-[20px]" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
        <div
          className={`
          bg-black-950 rounded-r-md p-3 hover:min-w-fit w-3 hover:w-auto
          `}
        >
          <ul className={`flex flex-col gap-y-[1px]`}>
            { sideNavItems.map((nav, key) =>
              <div
                key={key}
                className={`${sideNavDivStyle} ${ key.toString() === activeSideNav ? 'bg-white text-black-950' : '' }`}
                onClick={ () => { setActiveSideNav(key.toString()) } }
              >
                {circle}
                <li className={`${ isSideNavOpen ? '' : 'hidden' }`}>{nav}</li>
              </div>
            )}
          </ul>
        </div>
        <img className="scale-y-[-1] h-[20px]" src="../public/rounded_inner_corner.svg" width={20} alt=""></img>
      </div>
    </>
  )
}

export default App
