import PageTransition from "./components/PageTransition";
import TopCorners from "./components/utility/TopCorners";
import BottomCorners from "./components/utility/BottomCorners";
import { useEffect, useState } from "react";

export default function LayoutDefault(props: {children: React.ReactNode}) {
  const [ inView, setInView] = useState(true);

  // useEffect(() => {
  //   setInView(true);
  // }, [setInView])

  return (
    <>
      <PageTransition inView={inView} setInView={setInView} />
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
        >
        </div>
        <TopCorners />
        <BottomCorners />
        {props.children}
      </div>
    </>
  )
}