import { use, useState } from "react"

function App() {
  const gridStyle = `bg-black-800 w-full`;
  const navListStyle = `text-white text-xs`
  const circle = <div className="w-2 h-2 rounded-full bg-white"></div>;

  type State = {
    isSideNavOpen: boolean,
  }

  const initialState: State = {
    isSideNavOpen: false,
  }

  const [state, setState] = useState({
    ...initialState,
  });

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <div className={`
          w-screen h-screen grid grid-cols-4 grid-rows-4 gap-8 px-24 py-18 bg-black-900 rounded-lg absolute inset-0
        `}
      >
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={`bg-red-600 col-span-2 row-span-2`}>image carousel self scrolling</div>
      </div>


      <div className={`
          w-screen h-screen border-solid border-y-48 border-x-24 border-black-950 absolute inset-0
        `}
      >

        { /* SIDE NAV */ }
        <div
          className={`
          bg-black-950 relative top-1/2 left-0 max-w-fit rounded-r-md p-3 group
          `}
        >
          <ul className={`flex flex-col gap-y-3 group-hover:hidden`}>
            {circle}
            {circle}
            {circle}
          </ul>
          <ul className={`hidden flex-col group-hover:flex`}>
            <li className={navListStyle}> home </li>
            <li className={navListStyle}> projects </li>
            <li className={navListStyle}> contact </li>
          </ul>
        </div>

        { /* BOTTOM NAV */ }
        <div
          className={`
          bg-black-950 absolute lg:left-[45%] bottom-0 rounded-t-md
          `}
        >
          <ul className="flex flex-row p-3 gap-x-3 justify-between">
            <li className={navListStyle}> home </li>
            <li className={navListStyle}> projects </li>
            <li className={navListStyle}> contact </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
