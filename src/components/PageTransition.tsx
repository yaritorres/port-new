import { PowerGlitch } from 'powerglitch'
import BottomCorners from "./utility/BottomCorners";
import TopCorners from "./utility/TopCorners";
import { useEffect } from 'react';

export default function PageTransition(props: { stasis: number; }) {
  const mainSectionStyle = `
    w-full h-full flex justify-center items-center bg-radial from-black-900 to-black-930 rounded-lg px-18 py-18 font-main
  `;

  const transitionTextPool: Array<string> = [
    'generating visual stimuli...',
    'extracting neural data from user...',
    'injecting falsified data...',
    'contacting RATWARE CORPORATION cybersecurity division...'
  ];

  const randomlyPickedText = transitionTextPool[Math.floor(Math.random() * transitionTextPool.length)]

  useEffect(() => {
    PowerGlitch.glitch('.glitched', {playMode: 'always'});
  })

  return (
    <>
      <div
        className={`
          relative w-screen h-screen bg-black-950 rounded-lg inset-0 py-[48px] px-[12px] z-50 overflow-hidden text-black-50
          ${ props.stasis ? '' : 'hidden' }
        `}
      >
        <div
          className={`
            absolute bg-fixed bg-auto inset-[-50%_0%_0%_-50%] w-[200%] h-[200vh] pointer-events-none mix-blend-normal
            bg-[url(/grain_background.png)] z-10 animate-grain
          `}
        />
        <TopCorners />
        <BottomCorners />
        <div className={mainSectionStyle}>
          <p className="text-blorange"> {`[`} &nbsp; </p>
          <p className="w-content glitched"> {randomlyPickedText} </p>
          <p className="text-blorange"> &nbsp; {`]`} </p>
        </div>
      </div>
    </>
  );
}
